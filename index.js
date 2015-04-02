'use strict';
var arrayUniq = require('sindresorhus/array-uniq');

module.exports = function () {
	return arrayUniq([].concat.apply([], arguments));
};
