# Projektnotizen

## Worum es geht

**Genom** ist ein Website-Builder, bei dem man Websites nicht baut, sondern züchtet: Man sieht sechs
Entwürfe („Proben“), markiert Favoriten, und die nächste Generation entsteht durch Kreuzung und
Mutation. Am Ende lädt man eine fertige, eigenständige HTML-Datei herunter.

Geschäftsmodell: **kostenlos** ausprobieren bis Generation 5, **Genom Pro für 10 € / Monat** für
unbegrenztes Züchten, Download, HTML-Export und den Gen-Editor.

## Ordner

```
genom/index.html        Der komplette Builder (eine Datei, keine Abhängigkeiten)
genom/beispiele/        5 damit erzeugte Websites
tools/lizenz.mjs        Lizenzschlüssel einrichten, erstellen, prüfen (Node.js)
tools/lizenz-privat.jwk GEHEIM, nicht im Repo (.gitignore)
README.md               Funktionsübersicht und Anleitung
AUFGABEN.md             Was als Nächstes dran ist
CHANGELOG.md            Was wann dazukam
```

## Branches

| Branch | Inhalt | Status |
|---|---|---|
| `main` | nur „Initialize repository“ | Standard-Branch auf GitHub – deshalb wirkt das Repo leer |
| `claude/innovative-code-prototype-whk8au` | Genom komplett (alle Commits) | aktuelle Arbeit |
| `codex/create-profitable-website-concept` | „LaunchLab“: Landingpage für ein Website- und Monetarisierungs-Angebot (index.html + styles.css, 20.02.2026) | nicht zusammengeführt, offen |

## Wie der Builder aufgebaut ist (`genom/index.html`)

Die Datei ist in nummerierte Abschnitte gegliedert:

1. **Zufall** – deterministischer Generator (mulberry32), damit Grafiken pro Genom gleich bleiben.
2. **Genom** – 20 Gene à 1 Byte. Ein Genom-Code ist 40 Hex-Zeichen (ältere 32-stellige Codes
   werden mit neutralen Werten aufgefüllt).
3. **Farbe** – HSL-Paletten mit erzwungenem WCAG-AA-Kontrast (≥ 4,5:1), auch für invertierte Bänder
   und den Hell/Dunkel-Schalter. Geprüft mit 3000 Zufallsgenomen.
4. **Typografie** – 10 Schriftpaare (Google Fonts in der Vorschau, beim Export eingebettet).
5. **Dekodierung** – Genom → konkrete Design-Entscheidungen.
6. **Generative Illustration** – Bauhaus-artige SVG-Grafiken aus dem Genom.
7. **Renderer** – erzeugt die komplette Website als HTML-Text; Vorschau und Download nutzen
   denselben Renderer. 7b: die 9 Bereiche und das eingebettete Seiten-Skript.
8. **Evolution** – Kreuzung in Gen-Gruppen, Punkt- und Sprungmutation, Elitismus.
9. **Oberfläche** – Proben, Tabs, Speichern, Vorlagen, Check, Pro/Lizenz, Herbarium, Gen-Editor,
   Vergleich, Helix und Partikelfeld.

### Die 20 Gene

| Gruppe | Gene |
|---|---|
| Farben | Farbton, Harmonie, Sättigung, Hell/Dunkel, Farbverschiebung |
| Schrift | Schriftpaar, Typo-Skala, Gewicht, Überschriften-Effekt |
| Form | Radius, Dichte, Buttons, Breite |
| Layout | Hero-Layout, Leistungen, Navigation, Rhythmus |
| Deko | Deko, Übergänge, Animation |

## Lizenzsystem

- Schlüssel: `GENOM-<Daten>.<Signatur>`; Daten = E-Mail, Ablaufdatum, Zufallswert.
- Signatur ECDSA P-256; der öffentliche Schlüssel steht in `genom/index.html` zwischen
  `/*PUBKEY*/ … /*/PUBKEY*/` und wird von `tools/lizenz.mjs einrichten` gesetzt.
- Prüfung per WebCrypto im Browser – braucht `https` oder eine lokale Datei.
- Ein Testschlüssel (test@genom.local, gültig bis 26.12.2026) wurde im Chat verschickt.

## Wichtige Entscheidungen

- **Eine Datei, kein Server** – läuft überall per Doppelklick; deshalb Lizenzen statt Konten.
- **Datenschutz zuerst** – erzeugte Websites setzen keine Cookies, kein Tracking, Schriften
  eingebettet; externe Dienste nur als einfache Links.
- **Kontrast ist Pflicht** – Farben werden so lange verschoben, bis WCAG AA erfüllt ist.
- **Gratis-Grenze bei Generation 5** – genug, um begeistert zu sein, zu wenig, um fertig zu werden.

## Testen

Getestet wird mit Playwright (Chromium) gegen die lokale Datei: Laden ohne Fehler, Evolution,
Export ohne Google-Verbindung, Lizenz gültig / gefälscht / abgelaufen, Bereiche (Zähler, Karussell,
Lightbox, Formular, Live-Öffnungszeiten), Handy-Breite ohne seitliches Scrollen.

## Zahlen (Stand 25.11.2026)

- GitHub, letzte 14 Tage: **0 Seitenaufrufe**, 6 Klone von 5 Quellen (vermutlich automatisch), 1 Stern.
- claude.ai-Link: privat, nur der Besitzer kann ihn öffnen.
- Verkäufe: noch keine (Zahlungslink nicht eingerichtet).

## Links

- Builder (privat): https://claude.ai/artifact/AJUcmdXrVoci8AFhCTVX7c
