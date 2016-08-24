(function(){
	"use strict";
	
	exports.tabsInitialize = function tabsInitialize(texts, defaultTab){
		var container = document.createElement('div');
		container.setAttribute('class', 'container');
		document.body.appendChild(container);

		var nav = document.createElement('nav');
		nav.innerHTML = generateTabsHtml(texts.length, defaultTab);

		var content = document.createElement('article');
		content.setAttribute('class', 'content');
		content.innerHTML = generateContentSections(texts, defaultTab);
		
		
		container.appendChild(nav);
		container.appendChild(content);

		attachEventListeners();
	};

	function attachEventListeners(){
		var tabs = document.querySelectorAll('.tabs li');

		for (var i = 0; i < tabs.length; i++) {
			var tab = tabs[i];
			addListener(tab);
		}

		function addListener(tab){
			tab.addEventListener('click', function(){
				var tabId = this.getAttribute('id');
				var tabIdNumber = tabId[tabId.length - 1];
				switchTabs(tabId);
				switchContentElements('content' + tabIdNumber);
			});
		}
	}

	function generateTabsHtml(tabsNumber, defaultTab){
		var html = '<nav><ul class="tabs">';
		for (var i = 1; i < tabsNumber + 1; i++) {
			if(i === defaultTab){
				html += '<li id = "tab' + i + '" class= "active">Tab ' + i + '</li>';
			} else {
				html += '<li id = "tab' + i + '">Tab ' + i + '</li>';
			}
		}

		html += '</ul></nav>';

		return html;
	}

	function generateContentSections(texts, defaultTab){
		var html = '';
		texts.forEach( function(text, index) {
			if(defaultTab === (parseInt(index) + 1)){
				html += '<div id="content' + (parseInt(index) + 1) + '" class="active"><h2>Content ' + (parseInt(index) + 1) + '</h2>';
			} else {
				html += '<div id="content' + (parseInt(index) + 1) + '"><h2>Content ' + (parseInt(index) + 1) + '</h2>';
			}
			html += '<p>' + text + '</p></div>';
		});

		return html;
	}

	function switchTabs(newTab){
		var tab = document.querySelector('.tabs #' + newTab);
		var oldTab = document.querySelector('.tabs .active');
		oldTab.classList.remove('active');
		tab.classList.add('active');
	}

	function switchContentElements(contentElement){
		var currentContent = document.querySelector('.content .active');
		currentContent.classList.remove('active');

		var nextContent = document.getElementById(contentElement);
		nextContent.classList.add('active');
	}
}());