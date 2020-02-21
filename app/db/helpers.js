function dateTimeRange(hoursRange = 6) {
  let date = new Date();
  let hoursBehind = date.setHours(date.getHours() - hoursRange);
  hoursBehind = new Date(hoursBehind).toISOString();

  date = new Date();
  let hoursAhead = date.setHours(date.getHours() + hoursRange);
  hoursAhead = new Date(hoursAhead).toISOString();

  return { hoursBehind, hoursAhead };
}

module.exports = { dateTimeRange };
