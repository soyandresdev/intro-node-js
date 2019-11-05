/**
 * FS- fileSystem module to interacting with files on a machine
 * http - low level-ish module for creating network based programs, like APIs
 * path - useful for manipulating path strring and handling differences across many OS's
 */

const fs = require('fs')

const file = fs.readFileSync('./1-hello.js', {encoding: 'utf-8'})
console.log(file.toString())
fs.writeFileSync('./1-hello.js', 'var me = "me"')
const fileEnd = fs.readFileSync('./1-hello.js', {encoding: 'utf-8'})
console.log(file.toString())