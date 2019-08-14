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

function queryFilterDecodeV2(queryParams) {
  let queryFilter = '';

  for (const key in queryParams) {
    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      let field = '';
      let filter = '';
      let value = '';

      if (key === 'filter') {
        queryParams[key].map((params) => {
          // 'id=eq.3' -> ['id', 'eq' '3']
          params = params.replace('=', '|').replace('.', '|').split('|');
          field = params[0];
          filter = params[1];
          value = params[2];
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
      }
    }
  }
  return queryFilter.replace('&', ' AND ');
}

module.exports = {
  queryFilterDecode,
  queryFilterDecodeV2,
};
