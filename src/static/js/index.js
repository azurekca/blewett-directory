/**
 * String.prototype.includes() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
 */
if (!String.prototype.includes) {
	String.prototype.includes = function(search, start) {
		'use strict';

		if (search instanceof RegExp) {
			throw TypeError('first argument must not be a RegExp');
		}
		if (start === undefined) { start = 0; }
		return this.indexOf(search, start) !== -1;
	};
}

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}

const businessCards = document.getElementsByClassName('card');

// Event Listeners for search form
const searchForm = document.getElementById('search-form');
if (searchForm) {
	searchForm.addEventListener('submit', function(event) {
		event.preventDefault();
	});
}
const searchInput = document.getElementById('search-input');
if (searchInput) {
	searchInput.addEventListener('input', function(event) {
		searchCards(event.target, businessCards);
	});
}

// Event listener for toggling summary/details
document.addEventListener('click', function(event) {
	if (event.target.matches('details p')) {
		toggleDetails(event.target.closest('details'));
		return;
	}
});

/**
 * Show only cards that match all the search terms provided
 * @param {Array} searchTerms 
 */
function searchCards(searchTerms, cards) {
	const results = [];
	let resultText = '';

	// convert search terms into an array
	searchTerms = searchTerms.value.split(' ');

	// loop through each card looking for search string
	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		for (let j = 0; j < searchTerms.length; j++) {
			const term = searchTerms[j];
			if (card.innerText.toLowerCase().includes(term.toLowerCase())) {
				results.push(card);
			}
		}
	}

  showHideCards(results);
  
	// update dom to announce to screen reader number of results
	if (results.length === 1) {
		resultText = '1 result';
	} else {
		resultText = results.length + ' results';
  }

	document.getElementById('search-results').innerText = resultText;
}

/**
 * Hides supplied list of cards, shows all if empty
 * @param {array} cards array of dom elements to hide
 */
function showHideCards(cards) {
	// hide all cards
	showOrHideElements(businessCards, false);
	// show supplied cards
	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		card.style.display = '';
	}
}

/**
 * Set display to default for all the dom elements in the collection
 * @param {element} elements dom collection
 */
function showOrHideElements(elements, show) {
	const display = show ? '' : 'none';
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];
		element.style.display = display;
	}
}

function toggleDetails(details) {
	if (details.open) details.open = false;
}
