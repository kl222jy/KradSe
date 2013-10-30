#Egna Noteringar
favicon och apple-touch-icon kommer inte att fungera förrän filerna hamnat på krad.se (utelämnat länkningen till filerna)
krad logo vertikalt i vänsterkanten?
färgklick i form av någon bakgrundsgrafik i nedre höger hörn?
perspektivändring vid scroll på acko.net effektfull
font-size 0 eller annan lösning behövs för att komma undan problem med whitespace till all layout
koden för gallery-popup väldigt onödigt avancerad och tung.. köra någon annorlunda lösning? (http://dimsemenov.com/plugins/magnific-popup/documentation.html)
ensidesapplikation gömmer ju gärna innehåll.. risk för svartlistning?
effekten av jquery för page transition blev inte särskilt bra.. blir en lätt blinkande effekt eftersom sidan laddat färdigt innan effekten körs
köra ren js samt en css klass för att snabba upp det och kunna ha det tidigare i laddningen kanske fungerar
med allt detta experimenterande finns det viss risk för att webbplatsen blir väl tung att ladda(just nu 171kb vid laddning av startsidan, 1.07s med hygglig uppkoppling, dock 200-400ms latens till c9)
möjligen bör history bytas ut till att stödja enbart webbläsare med html5, effekten är inte värd de dåliga urlerna.. ev. går det att modifiera koden eller göra någon url rewrite i htaccess
frågan är också om det är något fel i den komprimerade versionen av history eftersom det fungerar med den okomprimerade versionen.
komprimerade versionen av enbart html5 fungerade inte heller, skiftat till okomprimerad html för history.js
innehållet är i behov av en hel del arbete samt ev. byta till semantic.gs ändå..
sätta mått på bilder?
magnific popup används inte förrän vid andra anropet..


window.onload = function(e){
    document.getElementById('main').className = 'in';
}

window.onbeforeunload = function(e){
    document.getElementById('main').className = 'out';
}

setTimeout

ev. enbart out, effekt: fade och skjut ut åt sidan EXPERIMENTERA!
absolut max 500ms, troligen 250ms

##Tillgänglighet
x-markeringen för aktuell sida fungerar inte i ajax implementationen
x-behov av bättre markering av aktivt objekt vid användning av tangentbordet
x-fade effekt på markeringen för rätt/fel på formuläret(så att den inte lyser rött direkt när man markerat för att börja skriva)
x-pattern för namn blir fel om man skriver mer än ett namn
x-e-post adresser till länkar
x-se över title på sidorna
x-se över språktaggar
x-förkortningar? hover med beskrivning
lägga till knappar för ändring av typsnittsstorlek(borde det inte duga med webbläsarens ctrl +/- egentligen?)
aaa - ändra färg på text/bakgrundsfärg
role?



##Anmärkningar på kod
* kravet på att sidan ska se ok ut utan css kräver divar i formuläret, hade gärna tagit bort dem, alternativt kan <br /> användas men det känns ännu mer fel.
** Tog bort div elementen, det ser någorlunda ok utan
* dålig funktionalitet och stöd för css3 columns gör att <div class="column"> fått användas på alla sidor

####Vad som faktiskt hänt:
#####v42
######tors:
påbörjade projektbeskrivning
######fre: 
avslutade projektbeskrivning och gantt
######lör: 
börjat lite lätt på projektstruktur
######sön: 
projektstruktur färdig, vävt in html5boilerplate css i sass(dock inte normalize, tror det förstör hacks för äldre browsers)

#####v43
######mån:
projektstruktur uppdaterad, sidstruktur på god väg, påbörjat arbete med stilmallar     (dålig synk mot c9 hela dagen, samt 1-2h förlust vid fel)
######tis:
arbetat vidare med stilmallar och innehåll, lagt till magnificent-popup för galleri, experimenterat en del med js/jquery utan önskvärt resultat
######ons:
about.html och contact.html färdiga, stilmall för forms ordnad, projektet är nu i grova drag redo för redovisning, kompabilitet kontrollerat med alla nyaste versioner av webbläsare(en liten fix behövdes för att få det att fungera i ie)
implementerat och fått layout att fungera med semantic.gs, håller dock förmodligen mig till nuvarande implementation för att slippa justera alla detaljer, dock helt klart något jag kommer att använda mig av i många framtida projekt.
######tors:
Undersökt kompabilitetsproblem, kom fram till att avsaknad av main i modernizr var det största problemet.
######fre:
Fixade stöd för main i modernizr, lade även till respond.js för att få media queries att fungera. Ändrat browsehappy till att visas även för ie7 och 8. Webbplatsen är nu klart brukbar även i dessa webbläsare.
Lagt till och försökt få history och ajaxify att fungera..
######lör:
fått history och ajaxify att fungera med okomprimerad version av history, klasserna in och out används och har modifierats en aning(frågan är om animationstiden inte ska kortas ner ännu mer), gallerilänkar har uteslutits från systemet.
######sön:
tagit bort ajax effekten på galleri och bilder, gjort och lagt till en bakgrundsbild
#####v44
######mån:
Läst igenom wcag och sett över vad som behöver ändras, försökt lösa problemet med flyttandet av klassen current i menyn vid sidbyte
######tis:
Löst problemet med visning av aktiv sida, gått igenom listan med tillgänglighetsproblem 
######ons:
bearbetat innehåll och konverterat layout till semantic.gs
######tors:
######fre:
######lör:
######sön:

#####v45
######mån:
######tis:
######ons:


Upphittat:
* http://www.tomsplanner.com/     gantt
* http://gantter.com/             gantt
* http://dimsemenov.com/plugins/magnific-popup/documentation.html
* http://stackoverflow.com/questions/18873574/css-transition-property-on-page-exit
* http://www.onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/

semantic.gs

Kommandon att lägga på minnet:
sass --watch sass:css --style compressed
             input:output               nested
                                        expanded
                                        compact