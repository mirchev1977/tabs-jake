(function(){
	"use strict";
	var jshint = require("simplebuild-jshint");

	desc("Default Build");
	task("default", ["checkVersion", "lint"], function(){
		console.log("\n\nBUILD OK");
	});

	desc("Checks if the correct Node version installed");
	task("checkVersion", function(){
		var semver = require("semver");
		var EXPECTED_VERSION = require("./package.json").engines.node;
		var actualVersion = process.version;

		if (semver.neq(EXPECTED_VERSION, actualVersion)) {
			fail("You've installed an incorrect Node version: " + actualVersion + '. The expected Node version is: ' + EXPECTED_VERSION);
		}
	});

	desc("Lint JavaScript code");
	task("lint", function() {
		jshint.checkFiles({
			files: "Jakefile.js",
			options: {},
			globals: {}
		}, complete, fail);
	}, { async: true });
}());