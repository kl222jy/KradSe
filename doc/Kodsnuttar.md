fungerar men dåligt, kanske hade sett bra ut om jquery och denna kod flyttats till header, vilket innebär 75kb extra innehåll att ladda innan något syns i webbläsaren

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



fungerar inte

window.onload = function(e){
    document.getElementById('main').className = 'in';
}

window.addEventListener("load", function(e){
document.getElementById('main').className = 'in';

})




fungerar inte

window.onbeforeunload = function(e){
    setTimeout(exit(), 500);
};
function exit(e){
    document.getElementById('main').className = 'out';
}
