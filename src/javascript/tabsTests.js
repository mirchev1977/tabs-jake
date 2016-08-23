(function(){
	"use strict";
	
	var assert = require('./assert.js');
	var tabs = require('./tabs.js');

	describe("tabs", function(){

		styleTabs();

		it("creates three tabs and three containers with text inside", function(){
			tabs.tabsInitialize();
		});
	});

	function styleTabs(){
		var head = document.createElement('head');
		var style = document.createElement('style');
		style.innerHTML = '<style>' +
		'ul.tabs{' +
			'list-style-type: none;' +
			'padding: 0;' +
			'margin: 0;' +
		'}' +

		'ul.tabs li {' +
			'display: inline-block;' +
			'border: 1px lightgray solid;' +
			'border-top-right-radius: 8%;' +
			'border-top-left-radius: 8%;' +
			'padding: 5px 20px;' +
			'background-color: skyblue;' +
			'margin-left: -5px;' +
		'}' +

		'ul.tabs li:first-of-type{' +
			'margin-left: 0px;' +
		'}' +

		'ul.tabs li.active {' +
			'display: inline-block;' +
			'border: 0;' +
			'border-top: 1px lightgray solid;' +
			'padding: 5px 20px;' +
			'background-color: white;' +
		'}' +

		'nav {' +
			'border-bottom: lightgray solid 1px;' +
			'padding: 0;' +
		'}' +

		'article.content > div{' +
			'padding: 10px;' +
			'border: 1px lightgray solid;' +
			'margin-bottom: 20px;' +
		'}' +

		'article.content > div:last-of-type{' +
			'margin-bottom: 0px;' +
		'} </style>';

		head.appendChild(style);
		var html = document.querySelector('html');
		html.appendChild(head);
	}

}());