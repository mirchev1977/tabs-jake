(function(){
	"use strict";
	
	var assert = require('./assert.js');
	var tabs = require('./tabs.js');

	describe("tabs", function(){

		it("checks if tabsInitialize function exists", function(){

		});

		it("creates three tabs and three containers with text inside", function(){
			var nav = '<nav>' +
				'<ul class="tabs">' +
					'<li id="tab1">Tab 1</li>' +
					'<li id="tab2" class="active">Tab 2</li>' +
					'<li id="tab3">Tab 3</li>' +
				'</ul>' +
			'</nav>';

			var content = 
			'<article class="content">' +
				'<div id="content1">' +
					'<h2>Content 1</h2>' +
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + ' Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.</p>' +
				'</div>' +
				'<div id="content2">' +
					'<h2>Content 2</h2>' +
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.</p>' +
				'</div>' +
				'<div id="content3">' +
					'<h2>Content 3</h2>' +
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet vestibulum quam, quis fermentum justo. Proin ultricies ex id lectus iaculis, blandit porttitor nulla vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt leo non gravida scelerisque. Aliquam neque ipsum, ultricies ac mollis quis, vehicula vitae lorem. Mauris ornare urna a aliquam congue. Donec sed tortor egestas sapien volutpat pulvinar at nec erat. Morbi ut tellus in velit tincidunt tincidunt. Mauris vel sapien mauris.</p>' +
				'</div>' +
			'</article>';
		});
	});

}());