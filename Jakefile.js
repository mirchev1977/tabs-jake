(function(){
	"use strict";

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
		jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", { interactive: true }, complete);
	}, { async: true });
}());