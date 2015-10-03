'use strict';
import test from 'ava';
import uppercaseKeys from './';

test(t => {
	t.same(uppercaseKeys({
		foo: 'fixture'
	}), {
		FOO: 'fixture'
	});

	t.end();
});
