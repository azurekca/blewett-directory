const map = L.map('mapBox').setView([49.479076, -117.393192], 14);

const myIcon = L.icon({
    iconUrl: '/static/images/place.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

listings.forEach(listing => {
  if (listing.showMap) {
    L.marker([listing.geometry.coordinates[1], listing.geometry.coordinates[0]]).addTo(map)
      .bindPopup(listing.title);
  }
})
