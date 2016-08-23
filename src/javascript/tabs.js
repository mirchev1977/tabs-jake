(function(){
	"use strict";
	
	exports.tabsInitialize = function tabsInitialize(tabsNumber){
		var container = document.createElement('div');
		container.setAttribute('class', 'container');
		document.body.appendChild(container);

		var nav = document.createElement('nav');
		nav.innerHTML = '<nav>' +
			'<ul class="tabs">' +
				generateTabsHtml(tabsNumber);
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
		
		
		container.appendChild(nav);
		container.appendChild(content);
	};

	function generateTabsHtml(tabsNumber){
		var html = '';
		for (var i = 1; i < tabsNumber + 1; i++) {
			html += '<li id = "tab' + i + '">Tab ' + i + '</li>';
		}

		return html;
	}
}());