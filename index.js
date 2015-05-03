'use strict';
module.exports = function (orig) {
	var keys = Object.keys(orig);
	var amount = keys.length;
	var ret = {};

	var key;
	while (amount--, key = keys[amount]) {
		ret[typeof key === 'string' ? key.toUpperCase() : key] = orig[key];
	}

	return ret;
};
