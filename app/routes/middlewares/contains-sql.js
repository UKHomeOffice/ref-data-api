function hasSql(value) {
  // NOTE: SQL RegEx reference:
  // http://www.symantec.com/connect/articles/detection-sql-injection-and-cross-site-scripting-attacks
  const sqlMeta = new RegExp('(%27)|(\')|(--)|(%23)|(#)', 'i');
  const sqlMetaModified = new RegExp('((%3D)|(=))[^\n]*((%27)|(\')|(--)|(%3B)|(;))', 'i'); // eslint-disable-line no-control-regex
  const sqlTypical = new RegExp('w*((%27)|(\'))((%6F)|o|(%4F))((%72)|r|(%52))', 'i');
  const sqlUnion = new RegExp('((%27)|(\'))union', 'i');

  if (value === null || value === undefined || !value) {
    return false;
  }

  if (sqlMeta.test(value) || sqlMetaModified.test(value) || sqlTypical.test(value) || sqlUnion.test(value)) {
    return true;
  }

  return false;
}

function containsSQLMiddleware(request, response, next) {
  let containsSql = false;

  if (request.originalUrl !== null && request.originalUrl !== undefined) {
    containsSql = hasSql(request.originalUrl);
  }

  if (containsSql) {
    response.status(403).json({ error: 'Unauthorized' });
  } else {
    next();
  }
}

module.exports = containsSQLMiddleware;
