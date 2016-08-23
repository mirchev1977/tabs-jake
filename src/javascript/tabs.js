(function(){
	"use strict";
	
	exports.tabsInitialize = function tabsInitialize(texts){
		var container = document.createElement('div');
		container.setAttribute('class', 'container');
		document.body.appendChild(container);

		var nav = document.createElement('nav');
		nav.innerHTML = generateTabsHtml(texts.length);

		var content = document.createElement('article');
		content.setAttribute('class', 'content');
		content.innerHTML = generateContentSections(texts);
		
		
		container.appendChild(nav);
		container.appendChild(content);
	};

	function generateTabsHtml(tabsNumber){
		var html = '<nav><ul class="tabs">';
		for (var i = 1; i < tabsNumber + 1; i++) {
			html += '<li id = "tab' + i + '">Tab ' + i + '</li>';
		}

		html += '</ul></nav>';

		return html;
	}

	function generateContentSections(texts){
		var html = '';
		texts.forEach( function(text, index) {
			html += '<div id="content' + (parseInt(index) + 1) + '"><h2>Content ' + (parseInt(index) + 1) + '</h2>';
			html += '<p>' + text + '</p></div>';
		});

		return html;
	}
}());