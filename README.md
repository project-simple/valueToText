# valueToText
Value to Text.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![](https://data.jsdelivr.com/v1/package/npm/value-to-text/badge)](https://www.jsdelivr.com/package/npm/value-to-text)

[![NPM](https://nodei.co/npm/value-to-text.png)](https://npmjs.org/package/value-to-text)

# Install 
#### npm 
```npm
npm install value-to-text --save-dev
```
#### browser
```html
<script src="http://redcamel-studio.github.io//valueToText/src/valueToText.js"></script>
<script>
valueToText(1) // return '1'
valueToText(null) // return 'null'
valueToText(undefined) // return 'undefined'
valueToText(NaN) // return 'NaN'
valueToText([]) // return '[]'
valueToText({}) // return '{}'
valueToText(function(){}) // return 'function(){}'
valueToText('testString') // return 'testString'
</script>
```
# License : MIT 
