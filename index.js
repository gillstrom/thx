'use strict';
var uniqueRandomArray = require('unique-random-array');
var list = require('./list.json');

module.exports = uniqueRandomArray(list);
module.exports.all = list;
