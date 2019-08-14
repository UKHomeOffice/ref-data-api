// queryFilterDecode is a function that takes a string
// with query parameters and decodes it to be used in a postgres database
function queryFilterDecode(queryParams) {
  let queryFilter = '';
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

    if (filter !== 'in' && isNaN(value) && value !== 'null') {
      value = `'${value}'`;
    } else if (isNaN(value) && value === 'null') {
      isNull = true;
      value = value.toUpperCase();
    }

    if (filter === 'gt' && !isNull) {
      // 'sum IS GREATER THAN \'3\''
      filter = '>';
    } else if (filter === 'gte' && !isNull) {
      // 'sum IS GREATER THAN or EQUAL to \'3\''
      filter = '>=';
    } else if (filter === 'lt' && !isNull) {
      // 'sum IS LESS THAN \'3\''
      filter = '<';
    } else if (filter === 'lte' && !isNull) {
      // 'sum IS LESS THAN or EQUAL to \'3\''
      filter = '<=';
    } else if (filter === 'eq' && !isNull) {
      // 'continent = \'Asia\''
      filter = '=';
    } else if (filter === 'eq' && isNull) {
      // 'validfrom IS NULL'
      filter = 'IS';
    } else if (filter === 'neq' && !isNull) {
      // 'continent != \'Asia\''
      filter = '!=';
    } else if (filter === 'neq' && isNull) {
      // 'validfrom IS NOT NULL'
      filter = 'IS NOT';
    } else {
      filter = 'IN';
      value = value.replace('%28', '').replace('%29', '').replace(/%20/g, ' ');

      const values = value.split(',');
      value = values.map(val => val.trim());
      value = `'${value.join("', '")}'`;
      value = `(${value})`;
    }

    queryFilter += `${field} ${filter} ${value}`;
    queryFilter = queryFilter.replace(/%20/g, ' ');
  });
  return queryFilter.replace('&', ' AND ');
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
  let conditions = '';
  let limit = '';
  let select = '';

  // check if select and limit are arrays
  if ((queryParams.select || queryParams.limit)
      && (Array.isArray(queryParams.select) || Array.isArray(queryParams.limit))) {
    return '';
  }

  // check if limit is not integer
  // check if limit is a negative integer
  if (queryParams.limit && !isPositiveInteger(queryParams.limit)) {
    return '';
  }

  if (queryParams.select) {
    select = `SELECT ${queryParams.select} FROM ${name}`;
  } else {
    select = `SELECT * FROM ${name}`;
  }

  if (queryParams.limit) {
    limit = `%20LIMIT ${queryParams.limit}`;
  }

  if (queryParams.filter) {
    queryParams.filter.map((params) => {
      // 'id=eq.3' -> ['id', 'eq' '3']
      params = params.replace('=', '|').replace('.', '|').split('|');
      let [field, filter, value] = params;
      let isNull = false;

      if (filter !== 'in' && isNaN(value) && value !== 'null') {
        value = `'${value}'`;
      } else if (isNaN(value) && value === 'null') {
        isNull = true;
        value = value.toUpperCase();
      }

      if (filter === 'gt' && !isNull) {
        // 'sum IS GREATER THAN \'3\''
        filter = '>';
      } else if (filter === 'gte' && !isNull) {
        // 'sum IS GREATER THAN or EQUAL to \'3\''
        filter = '>=';
      } else if (filter === 'lt' && !isNull) {
        // 'sum IS LESS THAN \'3\''
        filter = '<';
      } else if (filter === 'lte' && !isNull) {
        // 'sum IS LESS THAN or EQUAL to \'3\''
        filter = '<=';
      } else if (filter === 'eq' && !isNull) {
        // 'continent = \'Asia\''
        filter = '=';
      } else if (filter === 'eq' && isNull) {
        // 'validfrom IS NULL'
        filter = 'IS';
      } else if (filter === 'neq' && !isNull) {
        // 'continent != \'Asia\''
        filter = '!=';
      } else if (filter === 'neq' && isNull) {
        // 'validfrom IS NOT NULL'
        filter = 'IS NOT';
      } else {
        filter = 'IN';
        value = value.replace('(', '').replace(')', '').replace(/%20/g, ' ');

        const values = value.split(',');
        value = values.map(val => val.trim());
        value = `'${value.join("', '")}'`;
        value = `(${value})`;
      }

      conditions += conditions.includes('WHERE') ? `%20AND ${field} ${filter} ${value}` : `%20WHERE ${field} ${filter} ${value}`;
    });
  }


  let query = `${select}${conditions}${limit};`;
  query = query.replace(/%20/g, ' ');
  return query;
}

module.exports = {
  queryFilterDecode,
  queryFilterDecodeV2,
};
