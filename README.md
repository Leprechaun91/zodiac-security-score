# Zodiac Security Score™ – DDC Night Session Edition

Eine statische, mobile-freundliche Spaß-Anwendung für GitHub Pages. Deutsch, ohne Fremdbibliotheken und ohne Backend.

## Inhalt
- `index.html`: Startseite
- `style.css`: Responsives Night-Session-Design mit animiertem Sternzeichen-Rad
- `app.js`: Zwölf Sternzeichen, fünf Fragen, Auswertung und PNG-Ergebniskarte
- `favicon.svg`: Symbol

## GitHub Pages veröffentlichen
1. Neues **öffentliches** GitHub-Repository `zodiac-security-score` erstellen.
2. Diese vier Dateien direkt im Repository-Hauptverzeichnis hochladen (nicht den übergeordneten Ordner).
3. Unter **Settings → Pages** bei *Build and deployment* `Deploy from a branch` auswählen; Branch `main`, Folder `/ (root)`.
4. Die Website sollte dann auf `https://<username>.github.io/zodiac-security-score/` liegen. GitHub Pages kann etwas Zeit benötigen, bis die Bereitstellung abgeschlossen ist.

## Privat & datensparsam
Die Quiz-Berechnung erfolgt vollständig im Browser. Es werden **keine Antworten an einen Server gesendet**. Das Teilen des Ergebnislinks kodiert Sternzeichen und fünf gewählte Antworten im URL-Fragment. Das bedeutet, Empfänger des Links können diese Antworten rekonstruieren. Keine Namen oder Konten werden abgefragt. GitHub oder andere Plattformanbieter können übliche technische Zugriffslogs führen.

## Score
Illustrativer, ausdrücklich **nicht valider** Security Score = `100 - (Sternzeichenbasis 0…40 + Entscheidungen 0…40 + Sternzeichen/Antwort-Wechselwirkung 0…20)`.
Die Basis und Profile sind an die 12 satirischen Rollen aus `The_Insider_Risk_Horoscope(5).pptx` angelehnt. Der Score ist keine echte Insider-Risk-Bewertung und darf dafür nicht verwendet werden.

## Night-Session-Auswertung (noch nicht implementiert)
GitHub Pages ist statisch und kann Besucherantworten nicht zentral sammeln. Für eine echte Konferenzstatistik wäre ein separates, abgesichertes Backend mit Opt-in, Datenschutzinformation, Validierung, Ratenbegrenzung und geschütztem Dashboard nötig. Die UI zeigt deshalb bewusst **keine erfundenen Live-Statistiken**.

## Testen
`index.html` in einem Browser öffnen. Keine Installation erforderlich. Für die Freigabe über `navigator.share` oder Clipboard ist eine HTTPS-Seite empfohlen; der Download als PNG läuft lokal.
## v0.4.0 – Night-Session-Comedy
- Alle fünf Quizsituationen und zwanzig Antworten neu geschrieben: weniger offensichtlich, mehr Entwickler-Humor.
- Jede Option zeigt einen realistischen Zielkonflikt statt einer einfachen 'richtig oder falsch'-Logik.
- Zodiac-Wechselwirkungen bestimmen weiterhin den satirischen Score; keine fachlich valide Risikobewertung.
- Responsive Smartphone-Navigation aus v0.3.0 bleibt erhalten.
