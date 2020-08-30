const searchForm = document.getElementById('search-form');
const businessCards = document.getElementsByClassName('card');
const filterButtonsList = document.getElementsByClassName('category');

// Event Listeners
searchForm.addEventListener('submit', () => {
  event.preventDefault();
  const searchTerms = document.getElementById('search').value.split(' ');
  searchCards(searchTerms, businessCards);
});

// Event listener for filter cards buttons
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const clickedBtn = event.target;
    // show only cards matching filter
    filterCards(clickedBtn.innerHTML);
    // set selected class on clicked button's list element, remove from rest
    for (let i = 0; i < filterButtonsList.length; i++) {
      filterButtonsList[i].classList.remove('selected');
    }
    clickedBtn.parentElement.classList.add('selected');
  }
});

/**
 * Show only cards that match all the search terms provided
 * @param {Array} searchTerms 
 */
function searchCards(searchTerms, Cards) {
  
  showAllElements(Cards);

  // loop through each card looking for search string, hide if not found
  for (let i = 0; i < Cards.length; i++) {
    const card = Cards[i];
    searchTerms.forEach(term => {
      if (!card.innerText.toLowerCase().includes(term.toLowerCase())) {
        card.style.display = 'none';
      }
    });
  }
}

function filterCards(filterString) {
  // show all cards
  showAllElements(businessCards)
  console.log(filterString)
  if (filterString === 'Show All') return;
  for (let i = 0; i < businessCards.length; i++) {
    const card = businessCards[i];
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