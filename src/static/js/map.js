// Initialize global markers array where map markers will be stored as objects
const markers = [];
// create map object and set coordinates and zoom level where map will open
const map = L.map('mapBox').setView([49.479076, -117.393192], 14);

// test custom icon
// TODO: get custom category icons to use on the map
const myIcon = L.icon({
    iconUrl: '/static/images/place.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

// Basic Leaflet map setup with specified map server and credits
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// for each listing in our directory, if showMap is true, create a marker
// Push the marker to the markers array for access later to open the pop up programmatically
// TODO: use the custom category icons instead of the default
listings.forEach(listing => {
  if (listing.showMap) {
    const marker = L.marker([listing.geometry.coordinates[1], listing.geometry.coordinates[0]], {title: (listing.slug)})
      .addTo(map)
      .bindPopup(listing.title)
    markers.push(marker);
  }
})

/**
 * Look through the markers added to the map 
 * and open the pop up and pan to it for the matching slug
 * @param {string} slug 
 */
function openPopupAndPanTo(slug) {
  markers.forEach(marker => {
    // console.log(slug, marker.options)
    if (slug === marker.options.title) {
      marker.openPopup();
      map.panTo(marker.getLatLng());
    }
  })
}

// if url has a listing in the query parameter, open the map pop up for that listing
const params = new URLSearchParams(window.location.search);
if (params.has('listing')) {
  openPopupAndPanTo(params.get('listing'));
}