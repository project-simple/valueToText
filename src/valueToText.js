"use strict";
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.valueToText = factory());
}(this, (function () {
	var valueToText;
	valueToText=function (v) {
		return 	v === undefined ? 'undefined' : v === null ? 'null' : v.toString() == 'NaN' ? 'NaN' : typeof v == 'function' ? v.toString()  : typeof v=='string'?v :JSON.stringify(v)
	};
	return  valueToText;
})));