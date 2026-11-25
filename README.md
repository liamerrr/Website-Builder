# Genom – Websites nicht bauen, sondern züchten

Ein **evolutionärer Website-Builder**. Statt Vorlagen auszuwählen oder hunderte Regler zu bedienen,
züchtest du deine Website wie ein Biologe: Du siehst sechs Entwürfe, markierst, was dir gefällt –
und die nächste Generation entsteht durch **Kreuzung und Mutation** der Favoriten.

## Projektordner

```
genom/
├── index.html          ← der Builder: im Browser öffnen, fertig
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

## Neun Bereiche – jeder kann etwas anderes

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
- **9 Hero-Layouts**: Zentriert, Geteilt (Bogen- oder Versatzrahmen), Riesentitel, Farbband,
  Magazin, Bento, Poster (mit Kontur-Schriftzug), Laufband, Typo-Stapel.
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
