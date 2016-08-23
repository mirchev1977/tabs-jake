(function(){
	"use strict";
	
	var assert = require('./assert.js');
	var tabs = require('./tabs.js');

	describe("tabs", function(){

		styleTabs();

		it("creates tabs and content elements whose number equals the number of texts we want to display", function(){
			var texts = [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + ' Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + ' Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + ' Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + ' Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.'
			];
			tabs.tabsInitialize(texts, 1);
		});

		it('checks if we have the necessary ids on the tabs and content elements', function() {
			assert.equal(document.getElementById('tab1').getAttribute('id'), 'tab1');
			assert.equal(document.getElementById('tab2').getAttribute('id'), 'tab2');
			assert.equal(document.getElementById('tab3').getAttribute('id'), 'tab3');
			assert.equal(document.getElementById('tab4').getAttribute('id'), 'tab4');
			assert.equal(document.getElementById('content1').getAttribute('id'), 'content1');
			assert.equal(document.getElementById('content2').getAttribute('id'), 'content2');
			assert.equal(document.getElementById('content3').getAttribute('id'), 'content3');
			assert.equal(document.getElementById('content4').getAttribute('id'), 'content4');
		});

		it("checks if we have activated the correct tab", function(){
			assert.equal(document.getElementById('tab1').classList.contains('active'), true);
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