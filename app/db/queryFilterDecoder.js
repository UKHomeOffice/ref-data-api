const config = require('../config/core');
const logger = require('../config/logger')(__filename);
const helpers = require('./helpers');

// queryFilterDecode is a function that takes a string
// with query parameters and decodes it to be used in a postgres database
function queryFilterDecode(queryParams) {
  let queryString = '';
  let index = 1;
  let placeholders = '';
  let values = [];

  // 'id=eq.3&continent=neq.Asia' -> 'id=eq.3,&continent=neq.Asia'
  queryParams = queryParams.replace(/&/g, ';&');
  queryParams = queryParams.split(';');
  queryParams.map((params) => {
    // 'id=eq.3' -> ['id', 'eq' '3']
    params = params.replace('=', ' ')
      .replace('.', ' ')
      .split(' ');
    let [field, filter, value] = params;
    let isNull = false;

    if (isNaN(value) && value === 'null') {
      isNull = true;
      value = value.toUpperCase();
    }

    if (filter === 'gt' && !isNull) {
      // 'sum IS GREATER THAN \'3\''
      filter = '>';
      values.push(value);
      placeholders = `$${index}`;
      index += 1;
    } else if (filter === 'gte' && !isNull) {
      // 'sum IS GREATER THAN or EQUAL to \'3\''
      filter = '>=';
      values.push(value);
      placeholders = `$${index}`;
      index += 1;
    } else if (filter === 'lt' && !isNull) {
      // 'sum IS LESS THAN \'3\''
      filter = '<';
      values.push(value);
      placeholders = `$${index}`;
      index += 1;
    } else if (filter === 'lte' && !isNull) {
      // 'sum IS LESS THAN or EQUAL to \'3\''
      filter = '<=';
      values.push(value);
      placeholders = `$${index}`;
      index += 1;
    } else if (filter === 'eq' && !isNull) {
      // 'continent = \'Asia\''
      filter = '=';
      values.push(value);
      placeholders = `$${index}`;
      index += 1;
    } else if (filter === 'eq' && isNull) {
      // 'validfrom IS NULL'
      filter = 'IS';
      // 'IS NULL' is treated as dynamic columns and
      // therefore prepared statements are not allowed
      // hence adding the value in place of the index.
      placeholders = value;
      index += 1;
    } else if (filter === 'neq' && !isNull) {
      // 'continent != \'Asia\''
      filter = '!=';
      values.push(value);
      placeholders = `$${index}`;
      index += 1;
    } else if (filter === 'neq' && isNull) {
      // 'validfrom IS NOT NULL'
      filter = 'IS NOT';
      // 'IS NOT NULL' is treated as dynamic columns and
      // therefore prepared statements are not allowed
      // hence adding the value in place of the index.
      placeholders = value;
      index += 1;
    } else {
      filter = 'IN';
      value = value.replace('%28', '');
      value = value.replace('%29', '');
      value = value.replace(/%20/g, ' ');
      value = value.split(',');
      values = values.concat(value.map(val => val.trim()));
      placeholders = value.map((val) => {
        val = `$${index}`;
        index += 1;
        return val;
      });

      placeholders = `${placeholders.join(', ')}`;
      placeholders = `(${placeholders})`;
    }

    queryString += `${field} ${filter} ${placeholders}`;
    queryString = queryString.replace(/%20/g, ' ');
  });

  queryString = queryString.replace('&', ' AND ');
  return { queryString, values };
}

// isPositiveInteger is a function that takes a number
// as a string and checks if that number is a positive integer
//
// params stringValue: a string
// returns:            a Boolean
function isPositiveInteger(stringValue) {
  const number = Math.floor(Number(stringValue));
  return number !== Infinity && String(number) === stringValue && number >= 0;
}

function queryFilterDecodeV2({ name, queryParams }) {
  let columns = '';
  let conditions = '';
  let index = 1;
  let invalidQueryParams = false;
  let limit = config.limitRows ? 100 : '';
  let order = '';
  let placeholders = '';
  let queryString = '';
  let select = '';
  let values = [];

  // check if select and limit are arrays
  if ((queryParams.select || queryParams.limit)
      && (Array.isArray(queryParams.select) || Array.isArray(queryParams.limit))) {
    return { queryString, values };
  }

  // check if limit is not integer
  // check if limit is a negative integer
  if (queryParams.limit && !isPositiveInteger(queryParams.limit)) {
    return { queryString, values };
  }

  if (queryParams.select) {
    // column params should be comma separated words
    columns = queryParams.select.split(',');
    columns.map((col) => {
      if (col.match(/\W/)) {
        invalidQueryParams = true;
      }
    });

    if (invalidQueryParams) {
      logger.debug(`Select params: ${queryParams.select}`);
      return { queryString, values };
    }
    select = `SELECT ${queryParams.select} FROM ${name}`;
  } else {
    select = `SELECT * FROM ${name}`;
  }

  if (queryParams.limit) {
    limit = ` LIMIT $${index}`;
    values.push(queryParams.limit);
    index += 1;
  }

  if (queryParams.sort) {
    // 'name.asc,age.desc' -> ['name.asc', 'age.desc']
    let sortParams = queryParams.sort.split(',');
    sortParams.map((params) => {
      // 'name;.asc' -> 'name .asc' -> name |asc' -> ['name ', 'asc']
      params = params.replace(/;/g, ' ').replace('.', '|').split('|');

      if (params.length > 1) {
        let [field, filter] = params;
        filter = filter.toUpperCase();
        order += order.includes('ORDER BY') ? `, ${field} ${filter}` : ` ORDER BY ${field} ${filter}`;
        // each identifier should contain no spaces in order to be valid
        invalidQueryParams = (params[0].indexOf(' ') >= 0);
      }
    });

    if (invalidQueryParams) {
      logger.debug(`Sort params: ${queryParams.sort}`);
      return { queryString, values };
    }
  }

  if (queryParams.filter) {
    queryParams.filter.map((params) => {
      // 'id=eq.3' -> ['id', 'eq' '3']
      params = params.replace('=', '|').replace('.', '|').split('|');
      let [field, filter, value] = params;
      let isNull = false;

      if (isNaN(value) && value === 'null') {
        isNull = true;
        value = value.toUpperCase();
      }

      if (filter === 'gt' && !isNull) {
        // 'sum IS GREATER THAN \'3\''
        filter = '>';
        values.push(value);
        placeholders = `$${index}`;
        index += 1;
      } else if (filter === 'gte' && !isNull) {
        // 'sum IS GREATER THAN or EQUAL to \'3\''
        filter = '>=';
        values.push(value);
        placeholders = `$${index}`;
        index += 1;
      } else if (filter === 'lt' && !isNull) {
        // 'sum IS LESS THAN \'3\''
        filter = '<';
        values.push(value);
        placeholders = `$${index}`;
        index += 1;
      } else if (filter === 'lte' && !isNull) {
        // 'sum IS LESS THAN or EQUAL to \'3\''
        filter = '<=';
        values.push(value);
        placeholders = `$${index}`;
        index += 1;
      } else if (filter === 'eq' && !isNull) {
        // 'continent = \'Asia\''
        filter = '=';
        values.push(value);
        placeholders = `$${index}`;
        index += 1;
      } else if (filter === 'eq' && isNull) {
        // 'validfrom IS NULL'
        filter = 'IS';
        // 'IS NULL' is treated as dynamic columns and
        // therefore prepared statements are not allowed
        // hence adding the value in place of the index.
        placeholders = value;
      } else if (filter === 'neq' && !isNull) {
        // 'continent != \'Asia\''
        filter = '!=';
        values.push(value);
        placeholders = `$${index}`;
        index += 1;
      } else if (filter === 'neq' && isNull) {
        // 'validfrom IS NOT NULL'
        filter = 'IS NOT';
        // 'IS NOT NULL' is treated as dynamic columns and
        // therefore prepared statements are not allowed
        // hence adding the value in place of the index.
        placeholders = value;
      } else {
        filter = 'IN';
        value = value.replace('(', '');
        value = value.replace(')', '');
        value = value.replace(/%20/g, ' ');
        value = value.split(',');
        values = values.concat(value.map(val => val.trim()));
        placeholders = value.map((val) => {
          val = `$${index}`;
          index += 1;
          return val;
        });

        placeholders = `${placeholders.join(', ')}`;
        placeholders = `(${placeholders})`;
      }

      conditions += conditions.includes('WHERE') ? ` AND ${field} ${filter} ${placeholders}` : ` WHERE ${field} ${filter} ${placeholders}`;
    });
  }

  if (queryParams.validDateTime) {
    let { hoursBehind, hoursAhead } = helpers.dateTimeRange();

    conditions += conditions.includes('WHERE') ? ` AND ($${index} >= validfrom OR validfrom IS NULL)` : ` WHERE ($${index} >= validfrom OR validfrom IS NULL)`;
    index += 1;
    values.push(hoursBehind);
    conditions += ` AND ($${index} <= validto OR validto IS NULL)`;
    index += 1;
    values.push(hoursAhead);
  }

  queryString = `${select}${conditions}${order}${limit}`;
  return { queryString, values };
}

module.exports = {
  queryFilterDecode,
  queryFilterDecodeV2,
};
