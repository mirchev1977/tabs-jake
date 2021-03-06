(function(){
	"use strict";
	
	var assert = require('./assert.js');
	var tabs = require('./tabs.js');

	describe("tabs", function(){

		var ACTIVE_ELEMENT = 1;

		styleTabs();

		it("creates tabs and content elements whose number equals the number of texts we want to display", function(){
			var texts = [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + ' Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.',
				'In auctor mauris et lectus feugiat, ut auctor ante blandit. Integer vulputate ipsum lacus, at cursus odio elementum facilisis. Integer sed leo odio. Donec mollis sit amet leo id mattis. Aenean placerat hendrerit ex at pulvinar. Sed vel metus imperdiet, porttitor diam at, bibendum nisl. Pellentesque accumsan magna ac est consequat, vel hendrerit arcu feugiat. Ut tellus neque, condimentum ut enim eget, convallis varius massa. Duis et lorem eget augue facilisis feugiat sit amet sit amet mauris. Nullam dignissim fringilla dolor ac facilisis.',
				'Ut a nunc non libero tincidunt vehicula. Proin posuere nulla eget nunc vehicula molestie. Maecenas at arcu et tellus viverra aliquam at ullamcorper elit. Curabitur venenatis fringilla lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida ligula a nunc mollis malesuada. Quisque luctus, enim eu finibus suscipit, sem elit faucibus justo, a rhoncus mauris lectus sed ante. Nulla sit amet enim vel risus iaculis scelerisque. Morbi quis mollis nibh, eu bibendum nisi. Vivamus laoreet tincidunt semper. Nulla rutrum vehicula eros, et eleifend nunc fermentum id. Cras et malesuada nibh. Integer condimentum, elit vel varius facilisis, nisl ex vehicula turpis, nec pulvinar ipsum libero vitae dolor. Sed quis turpis eget urna ullamcorper lobortis eu quis ipsum.',
				'Suspendisse in nibh ut metus vestibulum maximus hendrerit in magna. Suspendisse orci quam, placerat id luctus eget, aliquet quis sapien. Nulla sed est neque. Maecenas a leo eu justo vehicula finibus in sed nisl. Curabitur nec lectus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi arcu erat, faucibus non dui a, hendrerit viverra libero. Ut ut imperdiet mauris, quis tincidunt eros. Pellentesque eu mattis quam. Nulla condimentum arcu lorem, eget scelerisque leo condimentum a. Integer dapibus, sem a viverra laoreet, nunc lectus blandit purus, sit amet tempor eros est convallis dolor. Aenean at ligula quis massa vehicula ultrices. Etiam sollicitudin magna et ullamcorper pellentesque. Etiam vestibulum, velit id auctor rutrum, ligula est dapibus enim, non fringilla enim quam at neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
			];
			tabs.tabsInitialize(texts, ACTIVE_ELEMENT);
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
			assert.equal(document.getElementById('tab' + ACTIVE_ELEMENT).classList.contains('active'), true);
		});

		it("checks if we have displayed the correct content element", function(){
			assert.equal(document.getElementById('content' + ACTIVE_ELEMENT).classList.contains('active'), true);
		});

		it("switches to tab 2 and checks if we have active class on tab2 and content2", function(){
			var current = document.getElementById('tab2');
			var click_ev = document.createEvent("MouseEvents");
			click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
			current.dispatchEvent(click_ev);
			assert.equal(document.getElementById('tab2').classList.contains('active'), true);
			assert.equal(document.getElementById('content2').classList.contains('active'), true);
		});

		it("switches to tab3 and checks if we have active class on tab3 and content3", function(){
			var current = document.getElementById('tab3');
			var click_ev = document.createEvent("MouseEvents");
			click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
			current.dispatchEvent(click_ev);
			assert.equal(document.getElementById('tab3').classList.contains('active'), true);
			assert.equal(document.getElementById('content3').classList.contains('active'), true);
		});

		it("switches to tab4 and checks if we have active class on tab4 and content4", function(){
			var current = document.getElementById('tab4');
			var click_ev = document.createEvent("MouseEvents");
			click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
			current.dispatchEvent(click_ev);
			assert.equal(document.getElementById('tab4').classList.contains('active'), true);
			assert.equal(document.getElementById('content4').classList.contains('active'), true);
		});

		it("switches to tab3 and checks if we have active class on tab3 and content3", function(){
			var current = document.getElementById('tab3');
			var click_ev = document.createEvent("MouseEvents");
			click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
			current.dispatchEvent(click_ev);
			assert.equal(document.getElementById('tab3').classList.contains('active'), true);
			assert.equal(document.getElementById('content3').classList.contains('active'), true);
		});

		it("switches to tab 2 and checks if we have active class on tab2 and content2", function(){
			var current = document.getElementById('tab2');
			var click_ev = document.createEvent("MouseEvents");
			click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
			current.dispatchEvent(click_ev);
			assert.equal(document.getElementById('tab2').classList.contains('active'), true);
			assert.equal(document.getElementById('content2').classList.contains('active'), true);
		});

		it("switches to tab1 and checks if we have active class on tab1 and content1", function(){
			var current = document.getElementById('tab1');
			var click_ev = document.createEvent("MouseEvents");
			click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
			current.dispatchEvent(click_ev);
			assert.equal(document.getElementById('tab1').classList.contains('active'), true);
			assert.equal(document.getElementById('content1').classList.contains('active'), true);
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

		'article.content > div.active {' +
			'display: block;' +
		'}' +

		'article.content > div{' +
			'padding: 10px;' +
			'border: 1px lightgray solid;' +
			'margin-bottom: 20px;' +
			'display: none;' +
		'}' +

		'article.content > div:last-of-type{' +
			'margin-bottom: 0px;' +
		'} </style>';

		head.appendChild(style);
		var html = document.querySelector('html');
		html.appendChild(head);
	}

}());