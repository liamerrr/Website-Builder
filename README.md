# Genom – Websites nicht bauen, sondern züchten

> 📋 **Was als Nächstes dran ist:** [AUFGABEN.md](AUFGABEN.md) · 📝 [NOTIZEN.md](NOTIZEN.md) · 🕘 [CHANGELOG.md](CHANGELOG.md)

Ein **evolutionärer Website-Builder**. Statt Vorlagen auszuwählen oder hunderte Regler zu bedienen,
züchtest du deine Website wie ein Biologe: Du siehst sechs Entwürfe, markierst, was dir gefällt –
und die nächste Generation entsteht durch **Kreuzung und Mutation** der Favoriten.

## Projektordner

```
genom/
├── index.html          ← der Builder: im Browser öffnen, fertig
├── landing.html        ← Verkaufsseite für Genom Pro
├── fonts/              ← selbst gehostete Schriften der Verkaufsseite
└── beispiele/          ← damit erzeugte Websites
    ├── holzwerk-berger.html   (Magazin-Layout, Wellen-Übergänge)
    ├── morgenrot-cafe.html    (Poster, Bento-Leistungen, Live-Öffnungszeiten)
    ├── studio-nordlicht.html  (Typo-Stapel, dunkel, Kontrast-Bänder)
    ├── physio-balance.html    (Bento-Hero, Tabs, Block-Rhythmus)
    └── kodex-labs.html        (Laufband, Zickzack-Übergänge)
```

## Starten

`genom/index.html` im Browser öffnen. Keine Installation, kein Build, keine Abhängigkeiten.

## So funktioniert's

1. Inhalt eintragen (Name, Slogan, Beschreibung, Leistungen, E-Mail) – oder eine **Branchen-Vorlage**
   wählen (Café, Fotografie, Handwerk, Praxis, Software, Innenarchitektur).
2. Favoriten anklicken (Tasten `1`–`6`).
3. **Evolvieren** (`Enter`) – die Gene der Favoriten werden gekreuzt und mutiert.
4. Wiederholen, bis es passt → Vorschau (Desktop/Mobil) → als fertige HTML-Datei herunterladen.

## Das Gen-Labor (Oberfläche)

- Rotierende **DNA-Helix**: jede Sprosse ist ein Gen deines Favoriten (Farbe = Position, Deckkraft = Wert).
- Jeder Entwurf ist eine **Probe** mit wissenschaftlichem **Artnamen** aus ihrem Erbgut
  (Gattung = Hero-Layout, Art = Farbton, „var. nocturna“ = dunkel), z. B. *Periodica violacea*.
- **Durchleuchten**: Maus über eine Probe (oder Scan-Knopf) scrollt sie einmal durch die ganze Website.
- **Chromosom-Streifen** am Rand zeigt den Aufbau der ganzen Seite als Farbbänder; ein leuchtendes
  Fenster zeigt, welcher Teil gerade zu sehen ist.
- **Gen-Barcode** (20 Balken), mutierte Gene leuchten auf; **Δ-Abstand** zum Elter mit Einstufung
  (Elter, Feinschliff, Variante, Mutant); vier Kernmerkmale, Änderungen leuchten.
- **Scan-Effekt** beim Evolvieren, holografische Ränder für Favoriten, Partikelnetz im Hintergrund.
- Alle Animationen ruhen bei „Bewegung reduzieren“.

## Werkzeuge im Labor

- **Start-Erlebnis**: Intro beim ersten Besuch mit Schnellstart über eine Branchen-Vorlage.
- **Evolutions-Film**: die Ahnenreihe als Zeitraffer mit Überblendung und geänderten Merkmalen.
- **Herbarium** (Tab Evolution, Taste `S`): Lieblingsdesigns sammeln – sie bleiben über alle
  Generationen erhalten und lassen sich jederzeit weiterzüchten.
- **Vergleich** (Taste `V`, genau zwei Proben wählen): beide Websites übereinander, Trennlinie
  ziehen, beide scrollen gekoppelt mit; danach „Linke“ oder „Rechte behalten“.
- **Gen-Editor** (Pro): alle 20 Gene mit Reglern direkt einstellen, die Probe ändert sich live.

## Extras in jeder Website

- **Hell/Dunkel-Schalter** für Besucher (Wahl wird gemerkt, Kontraste geprüft).
- **WhatsApp-Chat-Button**, **Social-Links** (Instagram, Facebook, TikTok, LinkedIn),
  **Adresse und Telefon** mit „Route planen“ (OpenStreetMap).
- **SEO-Paket**: Vorschau beim Teilen (Open Graph), Favicon aus dem Logo und Firmendaten für
  Google (schema.org LocalBusiness inkl. Öffnungszeiten).

## Zehn Bereiche – jeder kann etwas anderes

Im Tab **Bereiche** schaltest du Bereiche ein und aus, änderst die Reihenfolge und bearbeitest ihre Inhalte.

| Bereich | Was er kann |
|---|---|
| Leistungen | Karten, Liste oder Zickzack mit generierten Illustrationen – das Genom entscheidet |
| Zahlen & Fakten | Zahlen zählen beim Hinscrollen hoch (deutsches Zahlenformat, z. B. „1.200+", „99,9 %") |
| Galerie | Eigene Bilder (werden verkleinert und eingebettet), Großansicht mit Pfeiltasten |
| Über uns | Beschreibung als großes Zitat |
| Preise | „Anfragen" füllt das Kontaktformular automatisch mit dem gewählten Paket |
| Kundenstimmen | Karussell zum Wischen und Blättern |
| FAQ | Aufklappbare Fragen – funktioniert auch ohne JavaScript |
| Öffnungszeiten | Zeigt Besuchern live „Jetzt geöffnet" oder wann wieder offen ist, markiert den heutigen Tag |
| Ablauf | Zeitleiste, die sich beim Scrollen Schritt für Schritt füllt |
| Kontakt | Formular öffnet das E-Mail-Programm mit fertiger Nachricht – ohne Server |

Dazu: Einblende-Animationen beim Scrollen (abgeschaltet bei „Bewegung reduzieren"), automatisch
erzeugte Navigation und Google-Beschreibung.

## Website-Check

Der Tab **Check** bewertet den gewählten Entwurf mit Punktzahl: Kontrast, Impressum, Seitentitel,
Google-Beschreibung, E-Mail, Bildbeschreibungen, Umfang, Datenschutz und Ladegröße.
Mit dem Schalter **Privates Projekt** entfallen Impressum und Datenschutz für Übungs- und Privatseiten.

## Was es besonders macht

- **20-Gen-Genom** pro Design: Farbton, Farbharmonie, Sättigung, Hell/Dunkel, Schriftpaar,
  Typo-Skala, Schriftgewicht, Eckenradius, Dichte, Breite, Hero-Layout, Leistungs-Layout,
  Button-Stil, Navigation, Dekoration, Übergänge, Überschriften-Effekt, Farbrhythmus und Animation.
- **13 Hero-Layouts**: Zentriert, Geteilt (Bogen- oder Versatzrahmen), Riesentitel, Farbband,
  Magazin, Bento, Poster (mit Kontur-Schriftzug), Laufband, Typo-Stapel, Hologramm (Aurora, Glas,
  Orbit), Kinetik (Buchstaben weichen der Maus aus), Collage (Polaroids mit Sticker) und Terminal
  (Slogan tippt sich selbst).
- **5 Leistungs-Layouts**: Karten, Liste, Zickzack, Bento, interaktive Tabs.
- **Farbrhythmus & Übergänge**: Bereiche wechseln zwischen Hintergrund, Fläche und invertierten
  Kontrast-Bändern; dazwischen Welle, Diagonale, Zickzack oder Bogen.
- **Überschriften-Effekte**: Textmarker, Kursiv, Kontur, Kringel oder Verlauf auf dem letzten Wort.
- **Echte Genetik**: Gen-Gruppen werden als Block vererbt (damit Farben/Schrift stimmig bleiben),
  Punkt- und Sprungmutationen, Elitismus (Favoriten überleben), einstellbare Mutationsrate.
- **Gene sperren**: z. B. Farben fixieren und nur am Layout weiterzüchten.
- **Garantierte Barrierefreiheit**: Jede Farbkombination wird gegen WCAG-AA geprüft und
  automatisch korrigiert (Text ≥ 4,5:1) – getestet mit 3000 Zufallsgenomen, 0 Verstöße.
- **Generative Kunst**: Jedes Genom erzeugt deterministisch eigene Bauhaus-Illustrationen.
- **Genom-Code**: Jedes Design ist ein 40-stelliger Hex-Code (ältere 32-stellige Codes funktionieren weiter). Teilen per Code oder Link –
  andere züchten von dort weiter.
- **Ahnenreihe** mit Rücksprung zu jedem Vorfahren, `Z` für Rückgängig, `R` für komplett neu.
- **Automatisches Speichern**: Generation, Ahnenreihe, Inhalte und Sperren bleiben nach dem
  Neuladen erhalten (lokal im Browser). „Neu starten" setzt alles zurück.
- **Impressum & Datenschutz**: Felder für die Pflichtangaben nach § 5 DDG; daraus entstehen ein
  Impressum und eine passende DSGVO-Datenschutzerklärung als eigene Bereiche der Website. Fehlen
  Pflichtangaben, warnt der Builder und markiert die Lücken in der Seite. *Vorlage, keine Rechtsberatung.*
- **Keine Google-Verbindung beim Besucher**: Beim Export werden die Schriften (Latin-Subset, inkl.
  Umlaute, ß, €) direkt in die HTML-Datei eingebettet. Die fertige Seite lädt nichts von Dritten –
  ohne Internet fällt sie auf Systemschriften zurück.
- **WYSIWYG-Export**: Vorschau und Download nutzen denselben Renderer; die exportierte Seite ist
  eigenständig, responsiv und enthält ihren Genom-Code im `<meta name="generator">`.

## Genom Pro – 10 € im Monat

| Kostenlos | Genom Pro (10 € / Monat) |
|---|---|
| Inhalte, Vorlagen, alle Layouts ansehen | alles aus „Kostenlos“ |
| Proben durchleuchten, groß ansehen | **unbegrenzt** evolvieren |
| bis Generation 5 züchten | fertige Websites **herunterladen** |
| Genom-Code teilen | **HTML kopieren** |

Die Freischaltung funktioniert ohne eigenen Server: Jeder Kunde bekommt einen **signierten
Lizenzschlüssel** (`GENOM-…`). Der Builder prüft die Signatur (ECDSA P-256) und das Ablaufdatum
direkt im Browser. Schlüssel können nicht gefälscht oder verlängert werden, ohne den privaten
Schlüssel zu kennen.

### Einrichten (einmalig, braucht Node.js)

```bash
node tools/lizenz.mjs einrichten --neu   # eigenes Schlüsselpaar erzeugen
```

Das legt `tools/lizenz-privat.jwk` an (steht in `.gitignore` – **niemals veröffentlichen, Backup
machen**) und trägt den öffentlichen Schlüssel in `genom/index.html` ein.

Dann in `genom/index.html` bei `const SHOP` den Zahlungslink eintragen:

```js
checkoutUrl: "https://buy.stripe.com/…",   // oder ein Lemon-Squeezy-Checkout
```

Ein Abo-Produkt über 10 € pro Monat legst du bei **Stripe** (Payment Link) oder **Lemon Squeezy**
an. Lemon Squeezy tritt als Verkäufer auf und kümmert sich um die Umsatzsteuer in der EU.

### Verkaufen

Nach jeder Zahlung bzw. Verlängerung:

```bash
node tools/lizenz.mjs neu kunde@mail.de 31   # Schlüssel für 31 Tage
node tools/lizenz.mjs pruefen GENOM-…         # zeigt, für wen und bis wann er gilt
```

Den Schlüssel schickst du dem Kunden per E-Mail. Er fügt ihn im Pro-Fenster ein.

### Gut zu wissen

- Die Prüfung läuft im Browser. Wer den Quellcode selbst verändert, kann die Sperre umgehen –
  für die allermeisten Kunden ist das keine Option, eine absolute Sperre gibt es aber nur mit Server.
- Lizenzprüfung braucht `https` oder das Öffnen als lokale Datei.
- Wer verkauft, braucht in Deutschland u. a. Gewerbeanmeldung, Impressum, AGB, Widerrufsbelehrung
  und Datenschutzerklärung. Zahlungsanbieter verlangen Volljährigkeit (oder ein Konto der Eltern).
