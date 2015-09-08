'use strict';
var list = require('./list.json');

module.exports = function () {
	return require('unique-random-array')(list)();
};

module.exports.all = list;
