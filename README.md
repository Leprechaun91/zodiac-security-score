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
Illustrativer, ausdrücklich **nicht valider** Security Score = `clamp(75 − Sternzeichen-Basisrisiko + Entscheidungen + Cosmic Twist, 0, 100)`. Die bestehenden Basisrisiken (14–40) bleiben erhalten; die fünf Antworten erhalten jeweils −4, −2, +2 oder +4 Punkte (einige Fragen haben zwei sichere Optionen).
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

## v0.5.0 – Sherlock-Grafiken und schnelleres Quiz
- Fünf Fragen und zwanzig Antworten bewusst für 60–90 Sekunden Spielzeit gekürzt.
- Kleines Sherlock-Branding im Header und auf der Startseite, basierend auf Julians hochgeladenem Originalbild.
- Vier scoreabhängige Sherlock-Illustrationen mit zunehmend verschmitzter Stimmung, vom sicherheitsbewussten Detektiv bis zum kosmischen Chaos.
- Das Ergebnis und die PNG-Karte wählen die grafische Stimmung anhand des Scores; die Berechnung bleibt satirisch.
- Auf GitHub Pages besonders kompakte, eingebettete Bilddateien für mobiles Laden.

## v0.6.0 – Zodiac-Illustrationen statt Sherlock-Ergebnisporträts
- Sherlock dient ausschließlich als dezente persönliche Marke im Header und als kleines Signet auf der exportierten Karte.
- 12 eigenständige, lokal generierte SVG-Sternzeichenmotive werden auf der Ergebnisseite und in der PNG-Karte verwendet.
- 4 risikobasierte Farbstimmungen von souverän bis verschmitzt/chaotisch.
- Großflächige mobile Zodiac-Karte und neues Zodiac-Rad im Startbildschirm.
- Keine externen Bildrequests; die Illustration entsteht im Browser aus SVG.

## v0.7.0 – Cinematic Zodiac Collector Cards
- Ergebnisseite: zwölf gemalte Fantasy-Sternzeichen statt stilisierter Liniengrafiken.
- Vier scoreabhängige Farb- und Lichtstimmungen; hochwertige Karte für Smartphones und Share-PNG.
- Kleine Sherlock-Signatur bleibt erhalten.
- Das Bildatlas `assets/zodiac-atlas.webp` (4 Spalten, 3 Reihen) ist eine einzige WebP-Datei mit zwölf Bildern. Es wird benötigt, damit die neue cineastische Darstellung angezeigt wird.
- Beim Fehlen des Atlas greift die Seite automatisch auf die bisherigen SVG-Sternzeichen zurück.
- Einmaliges Hochladen der WebP-Datei über GitHub im Ordner `assets` nötig; der GitHub-Textconnector kann keine lokale Bilddatei direkt übertragen.


## v0.8.0 – 48 echte Zodiac-Varianten
Die App verwendet vier gleich große Bildatlanten mit jeweils 12 Sternzeichen (3 Spalten × 4 Reihen, 384 px pro Motiv):

- `assets/zodiac-safe.webp` – souverän und kontrolliert
- `assets/zodiac-cautious.webp` – skeptisch und aufmerksam
- `assets/zodiac-mischievous.webp` – verschmitzt und unkonventionell
- `assets/zodiac-chaos.webp` – kosmisches Security-Chaos

**Upload:** Die vier Dateien aus dem ZIP direkt in den Ordner `assets/` des Repositories hochladen. Es müssen keine zusätzlichen HTML-, CSS- oder JavaScript-Dateien manuell hochgeladen werden, weil der Code bereits in GitHub angepasst ist.

Score-Zuordnung: ≥ 60 sicher, 45–59 vorsichtig, 30–44 verschmitzt, unter 30 chaotisch. Der Score ist satirisch und nicht wissenschaftlich.

Die Bilder werden pro Risikostufe bei Bedarf geladen. Die herunterladbare PNG-Karte nutzt dasselbe Zeichen und dieselbe Variante. Bei fehlenden Bilddateien dient die bisherige SVG-Illustration als Fallback.

Die ZIP enthält außerdem alle 48 Portraits als einzelne WebP-Dateien für andere Nutzungsformen. Nur die vier Atlanten sind für die Website erforderlich.

## v0.9.0 – Cosmic Security Algorithm 2.0
- Sternzeichen behalten ihr individuelles Basisrisiko und erhalten sechs charakteristische Verhaltenstags für relevante Wechselwirkungen.
- Entscheidungen wirken positiv oder negativ auf den Security Score (maximal −20 bis +20), unabhängig vom Sternzeichen.
- Pro Antwort wird der Tag-Abgleich mit den Eigenheiten des Sternzeichens bewertet: keine Übereinstimmung = 0, eine = ±2, mindestens zwei = ±3, je nach Vorzeichen der Antwort.
- Ab drei positiven bzw. drei negativen Übereinstimmungen kommt ein zusätzlicher Muster-Effekt von +4 bzw. −4 hinzu. Der gesamte Cosmic Twist bleibt auf ±16 begrenzt.
- Ergebnisansicht erläutert den Startwert, das Sternzeichen, die Entscheidungen und den Cosmic Twist. Portraitfarbe, PNG-Karte und Ergebnislink verwenden automatisch den neuen Score.
- 12.288 Kombinationen (12 Sternzeichen × 4⁵ Antworten) automatisiert durchgerechnet. Alle zwölf Zeichen erreichen mindestens drei Ergebnisstufen und zeigen wirksame Musterverstärkung; alle vier Risikostufen sind insgesamt erreichbar.
- Keine Speicherung, kein Tracking und keine Änderung der Quiz-URL. Die geplante Live-Statistik ist weiterhin separat umzusetzen.

## v1.0.0 – Cinematic Night Session Startseite
- Neuer zweispaltiger Hero mit klarer Botschaft, auffälligem Start-Button und kompakter Ablaufübersicht.
- Drei überlagerte Zodiac-Artworks (Waage, Wassermann, Schütze) aus den bestehenden Atlanten statt des alten, generischen Zodiac-Rads.
- Violett-goldene Cosmic-Optik, dezente Animationen und responsive Darstellung, auch für QR-Code-Besucher am Smartphone.
- Sherlock bleibt klein im Kopfbereich. Score, Fragen, Datenschutzverhalten, Ergebnisbilder und Ergebnislinks bleiben unverändert.


## v1.0.2 – Erklärung des Cosmic Security Scores
- Ergebnisaufschlüsselung beginnt bei 100, zeigt −25 Punkte allgemeinen Grundverdacht, Sternzeichen-Basiswert, Summe der fünf Entscheidungen und den Cosmic Twist.
- Zwei stärkste Wechselwirkungen werden mit Original-Quizantwort, Frage, passender Sternzeichen-Eigenschaft und Einzelpunktewert angezeigt.
- Weitere Wechselwirkungen, Musterbonus und bei Bedarf die Begrenzung auf ±16 werden transparent ausgewiesen; Score 0–100 bleibt begrenzt.
- Die Berechnungslogik ist unverändert; keine Datenspeicherung und keine Änderung der öffentlichen Quiz-URL.

## v1.0.3 – Homepage auf exportierten PNG-Karten
- Alle heruntergeladenen Ergebnis-PNGs zeigen unten zentriert und goldfarben `KUSENBERG.NET`.
- Der alternative Canvas-Export im Fehlerfall enthält dieselbe Homepage.
- Keine Änderungen an Quiz, Score-Berechnung, URL, Ergebnissen oder Speicherung.

## v1.1.0 – Night-Session-Finale und Teilen per Bild
- **Berechnung unverändert:** Final abgestimmter Cosmic Security Algorithm 2.0: Score = clamp(75 − Zodiac-Basis + Antworten + Cosmic Twist, 0, 100). Die 12 astrologischen Grundwerte und fünf Fragen bleiben erhalten.
- Zwölf individuelle astrologische Diagnosen mit je drei Tonvarianten. Die Antworten bestimmen die ausgewählte Pointe.
- Mobile Ergebnisansicht: Sternzeichenbild, Score, Diagnose und Teilen/PNG zuerst.
- Superpower, Schwäche, Originalprognose und ausführliche Score-Berechnung bleiben in aufklappbaren Bereichen verfügbar.
- „Karte teilen“ versucht natives Bild-Teilen, sofern unterstützt; andernfalls PNG-Download. „Ergebnislink kopieren“ bleibt separat.
- Die geteilte Karte verwendet den passenden Zodiac-Bildatlas und die persönliche Pointe, Sherlock bleibt Signatur.
- Abschluss mit DDC Night Session ohne unbelegte Zeit- oder Raumangaben.
- Keine Datensammlung und keine erfundenen Statistiken. Ergebnislink enthält Antwortcodes im URL-Fragment.

## v1.1.1 – Abgewogene kosmische Diagnose
Wenn sich positive und negative Zodiac-Wechselwirkungen ungefähr ausgleichen, nennt die Diagnose nun diesen Mischfall. So sind alle drei Textstimmungen bei jedem der zwölf Sternzeichen erreichbar. Die Formel und die Score-Grenzwerte bleiben unverändert.

## v1.2.0 – Cinematic Collector Card PNG
- Vollständig neu gestaltete, dynamische PNG-Ergebniskarte im Cosmic-Look: Weltraumhintergrund, Sternenfelder, Zodiac-Kunstwerk im Panoramarahmen, leuchtender Score-Ring und farbige Risikokategorie.
- Berechnungsabschnitt enthält jetzt das echte Sternzeichen-Basisrisiko, die Entscheidungen, den Cosmic Twist sowie den allgemeinen Grundverdacht.
- Alle zwölf Sternzeichen und vier Bildstimmungen verwenden den bestehenden WebP-Atlas; falls das Bild nicht lädt, erscheint das SVG-Zodiac-Motiv.
- Unten bleibt KUSENBERG.NET sichtbar; iPhone-Vorschau, Speichern und Teilen bleiben erhalten.
- Die Quiz-Berechnung wird nicht verändert.

## v1.4.0 – Live-Statistik als fester Quiz-Bestandteil

- Jedes regulär abgeschlossene Quiz versucht, vor der Anzeige der Ergebniskarte einen Eintrag an Supabase zu senden. Ohne erfolgreiche Verarbeitung wird **kein neues Ergebnis** angezeigt.
- Der freiwillige Mitmach-Button entfällt. Vor dem Start, bei der Sternzeichenwahl und vor der letzten Auswertung wird erklärt, dass Sternzeichen, fünf Antwortcodes und eine zufällige Abstimm-ID übertragen werden.
- Der Server rechnet den Score erneut aus. Doppelzählungen aus demselben Browser werden wie bisher vermieden; daher zählt eine zweite Quizrunde aus diesem Browser nicht noch einmal.
- Bei Netzwerkfehlern bleibt das Quiz auf der Auswertungsseite und bietet **Erneut versuchen** oder **Quiz abbrechen** an.
- Geteilte Ergebnislinks werden weiterhin ohne Statistikübermittlung angezeigt, damit Empfänger nicht fälschlich als neue Quizteilnehmer zählen.
- Die Logik zur Berechnung der Scores, die fünf Fragen, die Bilder und die Share-PNG-Karten bleiben unverändert.
- `/live.html` zeigt gezählte, einmalige Browser-Abschlüsse statt einer optionalen Teilnahmequote.
- Auf der Webseite ist ein kurzer Datenschutzhinweis verlinkt. Die bestehende Datenschutzerklärung unter `https://kusenberg.net/datenschutzerklaerung` sollte speziell für diese Verarbeitung und Supabase ergänzt und die passende Rechtsgrundlage geprüft werden. Bei einer verpflichtenden Übermittlung kann die Verarbeitung nicht einfach als freiwillige Einwilligung bezeichnet werden.
- Datenlöschung nach der Veranstaltung weiterhin **manuell** im SQL Editor: `TRUNCATE TABLE zodiac_private.votes;`
