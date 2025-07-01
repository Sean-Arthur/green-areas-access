document.addEventListener('DOMContentLoaded', function () {
  const map = L.map('map').setView([55.604981, 13.003822], 12);

  // Set cursor to crosshair to indicate interactivity
  map.getContainer().style.cursor = 'crosshair';

  // Add OpenStreetMap base layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const arcgisUrl = 'https://gis.malmo.se/arcgis/rest/services/op/OP2023_Samtliga_lager/MapServer/13/query';
  const query = '?where=1%3D1&outFields=*&f=geojson';

  let userMarker, bufferLayer, nearbyLayer;

  map.on('click', function (e) {
    const clickedPoint = turf.point([e.latlng.lng, e.latlng.lat]);

    // Read dropdown on click
    const bufferSelect = document.getElementById('bufferSelect');
    const selectedDistance = parseFloat(bufferSelect.value); // in km

    // Clear previous
    if (userMarker) map.removeLayer(userMarker);
    if (bufferLayer) map.removeLayer(bufferLayer);
    if (nearbyLayer) map.removeLayer(nearbyLayer);

    // Add marker
    userMarker = L.marker(e.latlng).addTo(map).bindPopup("You clicked here").openPopup();

    // Create buffer
    const buffer = turf.buffer(clickedPoint, selectedDistance, { units: 'kilometers' });
    bufferLayer = L.geoJSON(buffer, {
      style: {
        color: 'red',
        fillOpacity: 0.15,
        weight: 2
      }
    }).addTo(map);

    // Fetch and filter green areas
    fetch(arcgisUrl + query)
      .then(res => res.json())
      .then(data => {
        const nearbyFeatures = data.features.filter(f => turf.booleanIntersects(buffer, f));
        const nearbyGeoJSON = {
          type: "FeatureCollection",
          features: nearbyFeatures
        };

        nearbyLayer = L.geoJSON(nearbyGeoJSON, {
          style: {
            color: '#006400',
            fillOpacity: 0.6,
            weight: 1
          },
          onEachFeature: (feature, layer) => {
            const props = feature.properties;
            let popup = '<strong>Attributes:</strong><br>';
            for (let key in props) {
              popup += `${key}: ${props[key]}<br>`;
            }
            layer.bindPopup(popup);
          }
        }).addTo(map);
      })
      .catch(err => console.error('Error loading Malmö green areas:', err));
  });
});
