
# Malmö Green Areas Accessibility Map

An interactive web map that shows accessibility to green areas in Malmö using Leaflet, Turf.js, and ArcGIS REST data.

## Features

- Interactive map with location-based buffer creation
- Customizable buffer distances (100m–1000m)
- Highlights intersecting green areas
- Client-side geospatial analysis with Turf.js
- Uses open data from Malmö Stad

## Technologies Used

- HTML, CSS, JavaScript
- [Leaflet.js](https://leafletjs.com/)
- [Turf.js](https://turfjs.org/)
- [ArcGIS REST API](https://gis.malmo.se)

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/malmo-green-map.git
   cd malmo-green-map
   ```

2. Open `index.html` in your browser.

3. Select a distance buffer from the dropdown and click on the map to create a buffer and see nearby green areas.

## Project Structure

```
malmo-green-map/
├── index.html     # Main page
├── style.css      # Styling
└── script.js      # Map logic
```

## License

MIT License
