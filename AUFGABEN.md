# Aufgaben

Stand: 25.11.2026 · Projekt: **Genom** – evolutionärer Website-Builder mit 10-€-Abo (Genom Pro)

Legende: 🔴 blockiert den Verkauf · 🟠 wichtig · 🟢 Verbesserung · ✅ erledigt

---

## 1. Jetzt – bevor Geld verdient werden kann

- [ ] 🔴 **Repo auf privat stellen** – es ist öffentlich; jeder kann den Builder samt Pro-Funktionen
      herunterladen und die Bezahlschranke entfernen.
      GitHub → Settings → General → Danger Zone → *Change visibility*.
- [ ] 🔴 **Zahlungsanbieter einrichten** – Abo-Produkt 10 € / Monat bei Lemon Squeezy
      (übernimmt EU-Umsatzsteuer) oder Stripe. Link in `genom/index.html` bei
      `SHOP.checkoutUrl` eintragen. Bis dahin zeigt der Kauf-Knopf „Kauf bald verfügbar“.
- [ ] 🔴 **Privaten Lizenzschlüssel sichern** – Datei `tools/lizenz-privat.jwk` ablegen
      (wurde im Chat geschickt) und ein Backup machen. Oder neu erzeugen:
      `node tools/lizenz.mjs einrichten --neu` (macht alte Testschlüssel ungültig).
- [ ] 🔴 **Rechtliches klären** – Gewerbeanmeldung, Impressum / AGB / Widerrufsbelehrung /
      Datenschutz für den Verkauf von Genom selbst. Zahlungsanbieter verlangen Volljährigkeit
      (sonst Konto der Eltern).
- [ ] 🟠 **Builder öffentlich erreichbar machen** – Ordner `genom/` bei Netlify hochladen oder eigene
      Domain; alternativ den claude.ai-Link über „Teilen“ freigeben.

## 2. Als Nächstes – Produkt

- [ ] 🟠 **Besucherzählung unter eigener Domain** – in der claude.ai-Seite gibt es sie schon (nur für
      dich sichtbar). Für die öffentliche Version: Plausible oder GoatCounter (ohne Cookies), um
      Besucher → Gratis-Limit → Kauf zu messen.
- [ ] 🟠 **Lizenzen automatisch verschicken** – Webhook vom Zahlungsanbieter → kleine
      Serverless-Funktion (z. B. Netlify Functions) signiert den Schlüssel und mailt ihn.
      Heute: von Hand mit `node tools/lizenz.mjs neu kunde@mail.de 31`.
- [ ] 🔴 **Verkaufsseite fertig machen** – `genom/landing.html` steht (Entwurf). Vor dem Start:
      Impressum und Datenschutzerklärung ergänzen und im Fuß verlinken; die Versprechen im FAQ
      (monatlich kündbar, Websites gehören dem Kunden) prüfen und an deine echten Bedingungen anpassen.
- [ ] 🟠 **Builder-Schriften selbst hosten** – der Builder lädt für seine Oberfläche und die Vorschauen
      Schriften von Google. Für den öffentlichen Start wie bei der Verkaufsseite lokal ablegen.
- [ ] 🟢 **Branch `codex/create-profitable-website-concept` („LaunchLab“)** – übernehmen oder löschen.
- [ ] 🟢 **Logo-Upload** statt Monogramm-Buchstabe in Navigation und Favicon.
- [ ] 🟢 **Unterseiten** – mehrseitige Websites (z. B. eigene Seite pro Leistung).
- [ ] 🟢 **Zweisprachige Websites** (Deutsch / Englisch).
- [ ] 🟢 **„Zurück“ über das Neuladen hinaus speichern** – heute nur Ahnenreihe und Herbarium.

## 3. Später – Ideen

- [ ] 🟢 Handy-Vorschau direkt in jeder Probe.
- [ ] 🟢 Export als ZIP (HTML + Bilder als einzelne Dateien statt eingebettet).
- [ ] 🟢 Herbarium teilen (Sammlung als Link oder Datei).
- [ ] 🟢 Jahresabo mit Rabatt (z. B. 100 € / Jahr).

## Bekannte Grenzen

- Die Lizenzprüfung läuft im Browser. Wer den Code verändert, kann sie umgehen – absolute
  Sicherheit nur mit Server (siehe „Lizenzen automatisch verschicken“).
- In der claude.ai-Ansicht werden Schriften beim Export nicht eingebettet (Systemschriften);
  in der lokalen Datei oder unter eigener Domain schon.
- Live-Öffnungszeiten nutzen die Uhrzeit des Besuchers (andere Zeitzone = ungenau).

---

## ✅ Erledigt

- ✅ Verkaufsseite (Entwurf), Intro, Evolutions-Film, Heroes Kinetik/Collage/Terminal, Bereich Ablauf (27.11.2026)
- ✅ Alle Arbeit auf `main` gebracht (25.11.2026)
- ✅ Besucheranzeige in der claude.ai-Seite: online, Besucher, Besuche, heute, mit Namen (27.11.2026)
- ✅ Evolutionärer Builder mit 20-Gen-Genom, Kreuzung, Mutation, Gen-Sperren, Genom-Codes
- ✅ 10 Hero-Layouts, 5 Leistungs-Layouts, Farbrhythmus, Übergänge, Überschriften-Effekte, Animationen
- ✅ 9 Bereiche mit eigenen Funktionen (Zähler, Galerie, Preise→Formular, Karussell, FAQ,
     Live-Öffnungszeiten, Kontaktformular …)
- ✅ Impressum & Datenschutz, eingebettete Schriften, Privat-Modus, Website-Check
- ✅ Futuristisches Gen-Labor (Helix, Proben, Durchleuchten, Chromosom-Streifen, Artnamen)
- ✅ Herbarium, Vergleich, Gen-Editor
- ✅ Hell/Dunkel-Schalter, WhatsApp, Social-Links, Route, SEO-Paket in den Websites
- ✅ Genom Pro: Gratis-Limit, Pro-Fenster, signierte Lizenzschlüssel, `tools/lizenz.mjs`
- ✅ Projektordner `genom/` mit 5 Beispiel-Websites
