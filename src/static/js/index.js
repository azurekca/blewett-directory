const businessCards = document.getElementsByClassName('card');

// Event Listeners for search form
document.getElementById('search-form').addEventListener('submit', () => event.preventDefault());
document.getElementById('search-input').addEventListener('input', event => searchCards(event.target, businessCards))

// Event listener for filter cards buttons
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    // show only cards matching filter
    filterCards(event.target.innerHTML, businessCards);
    return;
  }
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
  console.log(searchTerms)
  // show all cards
  showAllElements(cards);
  // convert search terms into an array
  searchTerms = searchTerms.value.split(' ')
  // loop through each card looking for search string, hide if not found
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    searchTerms.forEach(term => {
      if (!card.innerText.toLowerCase().includes(term.toLowerCase())) {
        card.style.display = 'none';
      }
    });
  }
}

function filterCards(filterString, cards) {
  // show all cards
  showAllElements(cards);

  // scroll to card container
  document.getElementById('listings').scrollIntoView({
    behavior: 'smooth',
  });

  if (filterString === 'Show All') return;

  // show all cards matching filter
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if (!card.dataset.categories.includes(filterString)) {
      card.style.display = 'none';
    }
  }
}

/**
 * Set display to default for all the dom elements in the collection
 * @param {element} elements dom collection
 */
function showAllElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.display = '';
  }
}

function toggleDetails(details) {
  if (details.open) details.open = false;
}