jquery fade in/out load/click

$(document).ready(function() {
    $("body").css("display", "none");
 
    $("body").fadeIn(250);
 
    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(250, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});
