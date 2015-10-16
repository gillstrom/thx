'use strict';
var list = require('./list.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = function () {
	return uniqueRandomArray(list)();
};

module.exports.all = list;
