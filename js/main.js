$('.portfolio-gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  
    gallery:
    {
        enabled:true,
        preload: [0,2], // read about this option in next Lazy-loading section

        navigateByImgClick: true,
    
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
    
        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)', // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    },
    
    zoom: 
    {
        enabled: true, // By default it's false, so don't forget to enable it
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function 
    }
});

window.onbeforeunload = function(e){
    setTimeout(exit(), 500);
};
function exit(e){
    document.getElementById('main').className = 'out';
}