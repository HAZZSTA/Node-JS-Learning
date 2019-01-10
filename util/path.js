//This module constructs a path to the root directory of the main app module (defined in package.json), for use in other module paths
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);//main module refers to the starting app js module