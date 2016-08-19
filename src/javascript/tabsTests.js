(function(){
	"use strict";
	
	var assert = require('./assert.js');
	var tabs = require('./tabs.js');

	describe("Tabs", function(){
		it("is initialized on index load", function(){
			tabs.tabsInitialize();
		});
	});

}());