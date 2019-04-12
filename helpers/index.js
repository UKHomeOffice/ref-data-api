const stripStringAfterChar = (str, char) => str.substring(0, str.indexOf(char) + 1);

const jsonify = str => JSON.parse(str);

/**
 * findObjectByKey() returns an object in an array of objects
 * based on object's property and value for instance if you
 * have the following array of objects
 * data = [
 *   {
 *     description: 'Work related activities',
 *     entityName: 'activities',
 *     lastupdated: '14/03/2019'
 *   },
 *   {
 *     description: 'Border functions type clarifications',
 *     entityName: 'bffunctiontypes',
 *     lastupdated: '06/03/2019'
 *   },
 * ]
 * executing `findObjectByKey(data, 'entityName', 'activities')`
 * will return the following object:
 *   {
 *     description: 'Work related activities',
 *     entityName: 'activities',
 *     lastupdated: '14/03/2019'
 *   }
 */
const findObjectByKey = (arrayOfObjs, key, value) => arrayOfObjs.find(obj => obj[key] == value);

module.exports = { findObjectByKey, jsonify, stripStringAfterChar };