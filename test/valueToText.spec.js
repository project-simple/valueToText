
const valueToText = require("../src/valueToText");
var makeTest = function (title, list) {
	describe(title, () => {
		list.forEach(function (v) {
			test(v['title'] + ' test - result : ' + valueToText(v['value']), () => {
				expect(valueToText(v['value'])).toBe(v['toBe']);
			});
		})
	});

};
makeTest(
	'Test valueToText - Number',
	[
		{
			title: 'number',
			value: 1,
			toBe: '1'
		},
		{
			title: 'negative number',
			value: -1,
			toBe: '-1'
		},
		{
			title: 'positive number',
			value: 1.2,
			toBe: '1.2'
		},
		{
			title: 'zero number',
			value: 0,
			toBe: '0'
		}
	]
);
makeTest(
	'Test valueToText - Boolean',
	[
		{
			title: 'true',
			value: true,
			toBe: 'true'
		},
		{
			title: 'false',
			value: false,
			toBe: 'false'
		}
	]
);
makeTest(
	'Test valueToText - null, undefined',
	[
		{
			title: 'null',
			value: null,
			toBe: 'null'
		},
		{
			title: 'undefined',
			value: undefined,
			toBe: 'undefined'
		}
	]
);

makeTest(
	'Test valueToText - function(){}',
	[
		{
			title: 'function',
			value: function(){},
			toBe: function(){}.toString()
		},
		{
			title: 'function',
			value: function(){console.log('test')},
			toBe: function(){console.log('test')}.toString()
		}
	]
);

makeTest(
	'Test valueToText - array',
	[
		{
			title: 'array',
			value: [],
			toBe: '[]'
		},
		{
			title: 'array',
			value: [1,2,3],
			toBe: '[1,2,3]'
		},
		{
			title: 'array',
			value: [1,2,3,[1,2,3]],
			toBe: '[1,2,3,[1,2,3]]'
		}
	]
);

makeTest(
	'Test valueToText - object',
	[
		{
			title: 'object',
			value: {},
			toBe: '{}'
		},
		{
			title: 'object',
			value: {test:1},
			toBe: '{"test":1}'
		},
		{
			title: 'object',
			value: {test:'test'},
			toBe: '{"test":\"test\"}'
		}
	]
);
makeTest(
	'Test valueToText - string',
	[
		{
			title: 'string',
			value: 'testString',
			toBe: '\"testString\"'
		}
	]
);