$(document).ready(function(){
    
    const headerSlider = $('.owl-carousel');
    headerSlider.owlCarousel({
        items: 1,
        dots: false,
        lazyLoad: true,
    });

    $('#headerSliderLeft').click(function() {
        console.log('Left');
        headerSlider.trigger('prev.owl.carousel');
    })
    
    $('#headerSliderRight').click(function() {
        console.log('Right');
        headerSlider.trigger('next.owl.carousel');
    })

});