# Portfolio

Statische Portfolio-Website – reines HTML, CSS und JavaScript, ohne Build-Schritt.

## Anpassen

Alle Texte, Projekte, Skills und Links stehen in **`content.js`**. Nur diese Datei bearbeiten.

- **Projektbilder:** Bild in `assets/` legen und beim Projekt `image: "assets/mein-bild.jpg"` ergänzen. Ohne Bild wird eine Farbfläche (`color`) mit Initialen angezeigt.
- **Kategorien:** Die Filter-Buttons entstehen automatisch aus den `category`-Werten.
- **Akzentfarbe:** `--accent` in `styles.css` (oben, für hell und dunkel).

## Lokal ansehen

```bash
cd portfolio && python3 -m http.server 8000
```

Dann http://localhost:8000 öffnen.

## Veröffentlichen

Der Ordner funktioniert direkt auf GitHub Pages, Netlify, Vercel oder jedem Webspace.
