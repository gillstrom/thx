'use strict';
var assert = require('assert');
var thx = require('./');

it('should return an array', function () {
	assert.strictEqual(Array.isArray(thx.all), true);
});

it('should return a random string from the list', function () {
	assert.strictEqual(typeof thx(), 'string');
	assert.strictEqual(thx.all.indexOf(thx()) !== -1, true);
});
