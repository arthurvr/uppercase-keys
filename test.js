'use strict';
var test = require('ava');
var uppercaseKeys = require('./');

test(function (t) {
	t.same(uppercaseKeys({
		foo: 'fixture'
	}), {
		FOO: 'fixture'
	});

	t.end();
});
