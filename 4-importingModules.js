/**
 * Require
 *
 * The Nodejs runtime injects another global, require.
 * This function takes a relative path to the module that you want to consume, and Synchronoussly loads it by returning whatever the target module exported.
 *
 */
const lib = require('./3-creatingModule')
const { more } = require('./3-creatingModule')
const addTwoNumbers = lib.add(1,2)

console.log(addTwoNumbers) // 3
console.log(more.name) // Andres Hernandez