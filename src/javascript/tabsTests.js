(function(){
	"use strict";
	
	var assert = require('./assert.js');
	var tabs = require('./tabs.js');

	describe("tabs", function(){
		
		it("creates three tabs and three containers with text inside", function(){
			tabs.tabsInitialize();
		});
	});

}());