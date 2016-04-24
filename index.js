'use strict';
var list = require('./list.json');
var uniqueRandomArray = require('unique-random-array');
var getUniqueFromList = uniqueRandomArray(list);

module.exports = function () {
	return getUniqueFromList();
};

module.exports.all = list;
