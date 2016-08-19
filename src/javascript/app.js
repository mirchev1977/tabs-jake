(function(){
	"use strict";
	
	var addition = require("./addition.js");
	var subtraction = require("./subtraction.js");

	console.log("42 + 13 = " + addition.add(42, 13));
	console.log("100 - 50 = " + subtraction.subtract(100, 50));
}());