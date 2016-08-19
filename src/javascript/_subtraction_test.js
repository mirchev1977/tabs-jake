(function(){
	"use strict";
	var assert = require("./assert.js");
	var subtraction = require("./subtraction.js");

	describe("Subtraction", function(){

		it("subtracts integers", function(){
			assert.equal(subtraction.subtract(100, 50), 50);
			assert.equal(subtraction.subtract(9, 4), 5);
		});

		it("subtracts floating point numbers", function(){
			assert.equal(subtraction.subtract(0.9, 0.5), 0.4);
			assert.equal(subtraction.subtract(10.5, 10.3), 0.1999999999999993);
		});
	});
}());