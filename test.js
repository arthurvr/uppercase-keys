'use strict';
var test = require('ava');
var uppercaseKeys = require('./');

test(function (t) {
	t.assert(uppercaseKeys({
		foo: 'fixture'
	}).FOO === 'fixture');

	t.assert(uppercaseKeys({
		thingie: 55
	}).THINGIE === 55);

	t.assert(typeof uppercaseKeys({
		thingie: 55
	}).thingie === 'undefined');

	t.assert(!uppercaseKeys({
		thingie: 55,
		KEY: false
	}).KEY);
});
