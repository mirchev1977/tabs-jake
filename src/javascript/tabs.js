(function(){
	"use strict";
	
	exports.tabsInitialize = function tabsInitialize(){
		var container = document.createElement('div');
		container.setAttribute('class', 'container');
		document.body.appendChild(container);

		var nav = document.createElement('nav');
		nav.innerHTML = '<nav>' +
			'<ul class="tabs">' +
				'<li id="tab1">Tab 1</li>' +
				'<li id="tab2" class="active">Tab 2</li>' +
				'<li id="tab3">Tab 3</li>' +
			'</ul>' +
		'</nav>';

		var content = document.createElement('article');
		content.setAttribute('class', 'content');
		content.innerHTML = 
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
			'</div>';

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
		
		container.appendChild(nav);
		container.appendChild(content);
	};
}());