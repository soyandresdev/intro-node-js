/**
 * Remote Modulees
 * - Download and use other modules from the internet
 * NodeJS has grown a bunch, and a bunch of that growth is due to its community and the ability to share modules and consume them at will
 * You can slap together an app really fast by reusing public modules. Which are the same as the modules you make, but packaged for downloading.
 * This sounds nice, but now you have to be aware of malicious code. Also, you need a system to help with the management of remote modules (downloading, publishing, updating, etc)
 *
 * Three module types, one require
 * Modules you created aree always relativee paths. "js" is implied
 * - Custom local modules
 * var lib = require('../ree;/path/to/lib') // Always have to use a "." first
 * - Remote modules
 * var lib = require('lib') // the same name you used to install ir with npm
 * - Custom local modules
 * var lib = require('../ree;/path/to/lib')// internal module, remote module with same name takes it
 */