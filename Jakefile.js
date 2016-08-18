/*globals desc:false, task:false, fail:false, complete:false, jake:false*/

(function(){
	"use strict";
	var jshint = require("simplebuild-jshint");
	var karma = require("simplebuild-karma");

	/********************************************
	CONSTANTS
	**********************************************/
	var KARMA_CONFIG = "karma.conf.js";

	/********************************************
	GENERAL-PURPOSE TASKS
	**********************************************/

	desc("Start the Karma server (run this first)");
	task("karma", function() {
		karma.start({
			configFile: KARMA_CONFIG
		}, complete, fail);
	}, { async: true });

	desc("Default Build");
	task("default", ["checkVersion", "lint", "test"], function(){
		console.log("\n\nBUILD OK");
	});

	desc("Run localhost http-server");
	task("run", function(){
		jake.exec("node node_modules/http-server/bin/http-server src", {interactive: true}, complete);
	});

	/********************************************
	SUPPORTING TASKS
	**********************************************/

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
			files: ["Jakefile.js", "src/**/*.js"],
			options: lintingOptions(),
			globals: lintGlobals()
		}, complete, fail);
	}, { async: true });

	desc("Run tests");
	task("test", function() {
		karma.run({
			configFile: KARMA_CONFIG
		}, complete, fail);
	}, { async: true });

	function lintingOptions(){
		return {
				bitwise: true,
				eqeqeq: true,
				forin: true,
				freeze: true,
				futurehostile: true,
				latedef: "nofunc",
				noarg: true,
				nocomma: true,
				nonbsp: true,
				nonew: true,
				strict: true,
				undef: true,

				node: true,
				browser: true
			};
	}

	function lintGlobals(){
		return {
				// Mocha
				describe: false,
				it: false,
				before: false,
				after: false,
				beforeEach: false,
				afterEach: false
			};
	}

}());