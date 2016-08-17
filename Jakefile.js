(function(){
	"use strict";


	desc("Default Build");
	task("default", function(){
		console.log("\n\nBUILD OK");
	});

	desc("Checks if the correct Node version installed");
	task("checkVersion", function(){
		var EXPECTED_VERSION = require("./package.json").engines.node;
		var actualVersion = process.version;

		if ("v" + EXPECTED_VERSION !== actualVersion) {
			fail("You've installed an incorrect Node version: " + actualVersion + '. The expected Node version is: ' + EXPECTED_VERSION);
		}
	});
}());