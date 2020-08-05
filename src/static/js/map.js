const map = L.map('mapBox').setView([49.479076, -117.393192], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

listings.forEach(listing => {
  console.log(listing.geometry.coordinates[1]);
  L.marker([listing.geometry.coordinates[1], listing.geometry.coordinates[0]]).addTo(map)
    .bindPopup(listing.title);
})
