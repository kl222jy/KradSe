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

window.onload = function(e){
    document.getElementById('main').className = 'in';
}

window.onbeforeunload = function(e){
    document.getElementById('main').className = 'out';
}

setTimeout

ev. enbart out, effekt: fade och skjut ut åt sidan EXPERIMENTERA!
absolut max 500ms, troligen 250ms

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
######fre:
######lör:
######sön:

#####v44
######mån:
######tis:
######ons:
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