
# Malmö Parker interaktiv webbkarta
Ett interaktivt webbkarta för att analysera närhet till parker i Malmö. Användaren kan vilja en plats på kartan och ange ett avstånd (100 - 1000m). Verktyget skapar seden en buffert runt den valda platsen och identifierar vilka parker som intersecterar med det valda området. Projektet är utvecklat för att demonstrera arbete med geodata, GIS API:er, webbkartor och spatial analys.

## Funktioner
- Interaktiv webbkarta över Malmö
- Val av plats direkt på kartan
- Anpassningsbara buffertavstånd (100-1000 meter)
- Spatial analys av parker inom den valda bufferten
- Hämtning av geodata via Malmö stads ArcGIS REST API
- Konvertering och hantering av data i GeoJSON-format
- Visning av attributinformation för identifierade objekt

## Teknisk arbetsprocess
1. Användaren klickar på en plats i kartan.
2. Den valda positionen representeras som en geografisk punkt.
3. En buffert skapas runt punkten med hjälp av Turf.js.
4. Parker hämtas från Malmö stads ArcGIS REST-tjänst.
5. Geodata analyseras med hjälp av spatiala funktioner i Turf.js.
6. De parker som intersecterar med bufferten identifieras.
7. Resultatet visas direkt i den interaktiva kartan.
8. Användaren kan klicka på objekten för att se tillhörande attributinformation.

## Teknik
- JavaScript
- HTML / CSS
- Leaflet.js - interaktiv webbkarta
- Turf.js - spatial analys och geometrihantering
- ArcGIS REST API - hämtning av geodata
- GeoJSON - format för geografiska data

## Data
Projektet använder öppna geodata från Malmö stad via ArcGIS REST-tjänster.


## Köra projektet
1. Klona repositoryt:
   ```bash
   git clone https://github.com/your-username/malmo-green-map.git
   cd malmo-green-map
   ```
2. Öppna därefter index.html i en webbläsare.
3. Välj önskat buffertavstånd och klicka på kartan för att genomföra analysen.

## Projektstruktur
```
malmo-green-map/
├── index.html     # Main page
├── style.css      # Styling
└── script.js      # Map logic
```
## Syfte
Projektet är framtaget som ett praktiskt exempel på arbete med:
- Geodata och GIS
- ArcGIS REST-tjänster
- Webbaserade GIS-lösningar
- GeoJSON
- Spatial analys
- API-integration
- JavaScript-baserad geodatahantering
- Interaktiv visualisering av geografisk information
Projektet visar hur geodata kan hämtas från en extern GIS-tjänst, bearbetas och analyseras i en webbläsare och därefter presenteras interaktivt för användaren.


## Licens
MIT License
