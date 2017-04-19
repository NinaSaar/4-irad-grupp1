
# 4-irad-grupp1

Fredag 7 april gick vi igenom hur man kör sin webbplats i webbservern node.js. Efter genomgången har vi ändrat strukturen för gruppens sida och kompletterat med de filer som krävs för node.js. Hädanefter ska du alltid köra den i webbservern.

Läs igenom artiklarna "Installera Node.js" och "En enkel webbserver med Node.js och Express" på plus-bloggen.

Installera Node.js enligt instruktionerna på bloggen.

Gå in i Tower och gör Pull på gruppens projekt.

I ditt operativsystem/File Explorer: Leta reda på katalogen där du har din kopia av gruppens projekt. Öppna ett windows-kommandofönster på din dator. Skriv "cd " i kommandofönstret och dra in katalogen. Tryck därefter return.

Skriv npm install och tryck därefter return. (Detta installerar alla node moduler som finns angivna i package.json)

Starta webbservern genom att skriva node app i kommandofönstret och därefter trycka return. (Du stänger av den genom att trycka Ctrl+C).

Gå till en webbläsare (t.ex. Chrome) och skriv localhost:3000 för att köra gruppens sida.


Nytt 2017-04-19:

Ändringar har gjorts för att vi ska kunna använda en databas. Det innebär att alla måste ha installerat MariaDB m.m. och lagt upp databasen på sin dator för att kunna köra. Följ instruktionerna nedan.

OBS! Om du inte har installerat databasen - följ instruktionerna i "Installera MariaDB/MySQL + phpMyAdmin" på PLUS-bloggen
Annars gör du följande:
1. Hitta XAMPP i Windows startmeny, expandera den och öppna XAMPP Control Panel
2. Klicka på start för Apache och MySQL. Se till att de startas som de ska (d.v.s. blir gröna)
3. Öppna en webbläsare (t.ex. Chrome) och skriv localhost/dashboard
4. Klicka på phpMyAdmin upptill i menyn

Så här lägger du upp databasen (gäller alla):

1. Klicka på Ny för att skapa en ny databas
2. Ange connect_four som databasnamn och klicka på Skapa
3. Skapa en tabell. Ange high_scores som tabellnamn och klicka på Kör
4. Lägg till följande kolumner:
   - high_score_id, typ: INT, kryssa i A_I och godkänn att den är PRIMARY Index
   - high_score_date, typ: DATETIME
   - score, typ: INT
   - player_name, typ: VARCHAR, Längd: 100
5. Klicka på Spara

Glöm inte att starta om node.js om du har den i gång (Ctrl+c och "node app")

