Testat 119 browsers på browsershots.org (var därefter en timmes väntetid tills de sista 13 hade körts)
Ser ok ut på de flesta, dock fungerar det inte i ie6,7 och 8
Genomgående fel där det inte fungerar är att main inte får den vita bakgrundsfärgen (inte så snyggt, men tvinga in det med html eller kanske javascript?)
de andra där det blivit obrukbart verkar det snarare som sidan inte laddats alls, kan vara antingen fel hos dem eller att koden fastnar på något script.
Misstänker att det är betydligt fler av dessa webbläsare där menyn för 1400px och uppåt inte fungerar.. men jag gör samtidigt antagandet att de få som använder en skärm som är ny nog för att se denna version också har en dator som då skeppats med vista/win7 och därmed ie9 och uppåt, och om de har skiftat system är de tillräckligt tekniska användare för att ha brytt sig om att hålla sina webbläsare uppdaterade.


ie6, 7 och 8 som skulle behöva lösas.. på dessa är det bakgrundsfärgen som måste ordnas.
trodde modernizr skulle lösa grundläggande saker på de nya html5 elementen..

anledningen till att det inte fungerar är att modernizr inte lyckas få <main> att omsluta de element det innehåller..
main fanns inte med i modernizr, lade till det själv och nu är sidan åtminstone brukbar med ie7 och ie8
nöjer mig där tills vidare och lägger helt enkelt meddelandet om utdaterad browser för samtliga med mindre än ie9


mkt av resterande problem beror på att jag använder mig av max-width ganska frikostigt och ev. att mediaqueries inte fungerar
menyn borde ses över en aning, annars är det brukbart