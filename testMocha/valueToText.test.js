
const expect = require('chai').expect;
const valueToText = require("../src/valueToText");
const fs = require("fs");
const data = fs.readFileSync("./testMocha/valueToText.run.js","utf8",function (err,data){console.log(err)});
console.log("data")
eval(data);




