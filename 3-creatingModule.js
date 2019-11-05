/**
 * Regular code, just export it.
 * All your NodeJs code are modules
 * As the author, you decide how and what to expose from your modules, to other modules.
 * You do this with the module global object provided you by the Nodejs runtime
 */

const add =(num, num2) => {
  return num + num2
}
const notPublic = () => {}

module.exports = {add, value: 1}
module.exports.more = {name:'Andres Hernandez'}