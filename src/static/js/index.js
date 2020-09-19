const businessCards = document.getElementsByClassName('card');

// Event Listeners for search form
document.getElementById('search-form').addEventListener('submit', event => event.preventDefault());
document.getElementById('search-input').addEventListener('input', event => searchCards(event.target, businessCards))

// Event listener for filter cards buttons
document.addEventListener('click', (event) => {

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
    searchTerms.forEach(term => {
      if (card.innerText.toLowerCase().includes(term.toLowerCase())) {
        results.push(card);
      }
    });
  }
  
  showHideCards(results);

  // update dom to announce to screen reader number of results

  if (results.length === 1) {
    resultText = '1 result';
  } else {
    resultText = `${results.length} results`;
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
  cards.forEach(card => card.style.display = '');
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