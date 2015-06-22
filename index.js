'use strict';
module.exports = function (orig) {
	var ret = {};
	var keys = Object.keys(orig);

	for (var i = 0; i < keys.length; i++) {
		ret[keys[i].toUpperCase()] = orig[keys[i]];
	}

	return ret;
};
