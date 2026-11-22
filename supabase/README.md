# DDC Night Session – Live-Statistik einrichten

Das Quiz läuft unverändert auf https://leprechaun91.github.io/zodiac-security-score/
Das separate Moderatoren-Board liegt unter https://leprechaun91.github.io/zodiac-security-score/live.html

Wichtig: Die Statistik startet NICHT automatisch. Erst nach der Einrichtung und dem Eintrag des Supabase-Project-URL und des **Publishable** Keys in `stats-config.js` erscheint nach dem Quiz der freiwillige Teilnahmebutton.

## 1. Supabase-Projekt erstellen

1. Öffne https://supabase.com/dashboard und melde dich an.
2. Erstelle ein neues Projekt, etwa `zodiac-security-score-ddc`, mit einer Region in der EU (z. B. Frankfurt) und einem starken Datenbankpasswort.
3. Bewahre das Datenbankpasswort sicher auf. Es gehört **nicht** in GitHub oder Chat.
4. Im Supabase-Dashboard: **SQL Editor > New Query** öffnen.
5. Kopiere den vollständigen Inhalt von `supabase/setup.sql` und klicke **Run**. Das Skript erstellt die private Tabelle und zwei streng begrenzte REST-RPC-Funktionen.

## 2. Moderationskonto für das Live-Board

1. In Supabase unter **Authentication > Users** einen eigenen Moderations-User mit E-Mail und Passwort anlegen. Diesen Account verwendest nur du. Besucher des Quiz brauchen KEIN Konto.
2. Kopiere die UUID des Moderations-Users aus der Benutzerübersicht.
3. Gehe erneut zum SQL Editor und führe aus:

```sql
INSERT INTO zodiac_private.admins (user_id)
VALUES ('HIER-DIE-UUID-DES-MODERATORS-EINTRAGEN')
ON CONFLICT DO NOTHING;
```

4. Prüfe, dass das Sign-up im Supabase-Auth-Bereich nicht für beliebige Personen geöffnet ist, wenn nur du den Moderatorzugriff benötigst.
5. Die Moderatorenliste schützt `zodiac_get_stats` zusätzlich zum Login. Die Rohdaten bleiben in `zodiac_private` und sind nicht direkt lesbar.

## 3. Quiz-App mit Supabase verbinden

1. Öffne im Supabase-Projekt den **Connect**-Dialog oder **Project Settings > API Keys**.
2. Kopiere **Project URL** (Format `https://<projekt>.supabase.co`) und **Publishable key** (Format `sb_publishable_...`).
3. Trage nur diese beiden Werte in `stats-config.js` in deinem GitHub-Repository ein:

```js
window.ZODIAC_STATS_CONFIG = {
  projectUrl: "https://DEIN-PROJEKT.supabase.co",
  publishableKey: "sb_publishable_DEIN-OEFFENTLICHER-KEY"
};
```

4. Klicke **Commit changes**. GitHub Pages aktualisiert sich danach automatisch.
5. **Niemals** einen Secret Key, `sb_secret_...`, `service_role`-Key oder ein Datenbankpasswort in Browser-Code, GitHub oder Chat kopieren.

## 4. Testlauf

1. Öffne die Quiz-URL im privaten Browserfenster und spiele fünf Fragen.
2. Unter der Ergebniskarte erscheint `JA, MEIN ERGEBNIS MITZÄHLEN`. Vor dem Klick werden keine Antwortcodes übertragen.
3. Klicke einmalig auf den Button und prüfe die Erfolgsmeldung samt Teilnehmerzahl.
4. Öffne `/live.html`, logge dich mit dem Moderationskonto ein und prüfe, ob eine Teilnahme im Live-Dashboard erscheint.
5. Versuche einen zweiten Klick oder wiederhole das Quiz im gleichen Browser: Eine bereits übermittelte Abstimmung darf nicht doppelt gezählt werden.
6. Teste mindestens ein iPhone/Android-Gerät. Ohne WLAN kannst du die JSON-Zusammenfassung des Boards als Backup sichern.

## 5. Vor dem Event: Testdaten löschen

Im SQL Editor ausführen:

```sql
TRUNCATE TABLE zodiac_private.votes;
```

Achtung: Bereits für Tests verwendete Browser speichern die zufällige Abstimm-ID und markieren sich als teilgenommen. Für den Konferenztest daher neuen Browser / Inkognito-Fenster nutzen oder bei Testgeräten die Site-Daten entfernen.

## 6. Im Vortrag

- Zeige direkt zu Beginn den gewohnten Quiz-QR-Code, die Quiz-URL bleibt gleich.
- Das Quiz bleibt vollständig nutzbar, wenn niemand freiwillig Statistik übermittelt.
- Das Live-Board `/live.html` öffnest du als Moderator in einem separaten Tab, am besten VOR der Bildschirmprojektion anmelden.
- Das Board aktualisiert sich ca. alle 10 Sekunden, zeigt ausschließlich aggregierte Statistiken und funktioniert auf 16:9-Projektoren.
- **Security Score** (höher = besser) und **Zodiac Risk Index** (100 minus durchschnittlicher Security Score; höher = riskanter) sind bewusst getrennt.
- Bei kleinen Stichproben Rankings als satirisch, nicht repräsentativ erklären.
- `Snapshot speichern` sichert einen JSON-Stand als WLAN-/Vortrags-Backup.

## Datenschutz und Grenzen

- **Freiwillige aktive Einwilligung:** Erst durch Klick nach dem Quiz werden 12er-Sternzeichen-ID, fünf Antwortindizes (0–3) und ein zufälliger Browser-Abstimm-Token über HTTPS übertragen.
- Keine Namen, Firmen, E-Mail-Adressen oder per App gespeicherte IP-Adressen in `votes`.
- Technische Infrastruktur-/Zugriffslogs des Cloud-Anbieters können technische Kennungen/IPs verarbeiten. Das Quiz sollte auf eine aktuelle Datenschutzerklärung verlinken; Datenschutzpflichten bestehen auch ohne Namen.
- Die zufällige ID schützt gegen versehentliches doppeltes Abstimmen in einem Browser. Sie verhindert **keinen absichtlichen Missbrauch** durch Skripte, mehrere Browser oder das Löschen von Site-Daten. Die Zahlen bleiben ein spielerisches Publikumssignal, keine belastbare Umfrage.
- Im Backend wird der Security Score aus den fünf Antwortcodes und aktuellen Sternzeichenattributen erneut berechnet; manipulierte clientseitige Score-Werte werden nicht akzeptiert.
- Supabase-SQL und Quiz-Logik sind versioniert. Bei künftigen Änderungen an Fragen/Scoring müssen die SQL-Konstanten ebenfalls aktualisiert werden.
- Nach der Veranstaltung die temporären Daten entfernen: `TRUNCATE TABLE zodiac_private.votes;`.

## Dateien

- `supabase/setup.sql` – Datenbank mit privaten Rohdaten, serverseitiger Auswertung und Moderations-Zugriff.
- `stats-config.js` – **nur** Project URL + Publishable Key.
- `stats.js` – freiwilliger Statistik-Client und Moderations-Login.
- `live.html`, `live.css`, `live.js` – geschütztes Live-Board.
- `app.js` und `style.css` – Quiz mit Einwilligungs-Button, nur bei konfiguriertem Backend sichtbar.

