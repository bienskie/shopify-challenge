(function ($, w, d, h, b) {

    var app = {

        bannerTestimonials: function () {
            $('.banner__content--testimonials--slider').flickity({
                cellAlign: 'center',   
                contain: true,         
                wrapAround: true,      
                autoPlay: 5000,        
                fade: true,            
                pageDots: false,       
                prevNextButtons: false  
            });
        },

        formulasTestimonials: function () {
            $('.formulas__testimonials--slider').flickity({
                cellAlign: 'center',   
                contain: true,         
                wrapAround: true,      
                autoPlay: 5000,        
                fade: true,            
                pageDots: false,       
                prevNextButtons: false 
            });
        },

        productVideos: function () {
            $('.product-videos__slider').flickity({
                cellAlign: 'left',   
                contain: true,         
                wrapAround: true,      
                autoPlay: 5000,        
                fade: false,            
                pageDots: false,       
                prevNextButtons: false 
            });
        },

    }


    jQuery(document).ready(function () {
        app.bannerTestimonials();
        app.formulasTestimonials();
        app.productVideos();
    });

    jQuery(window).on('load', function () {

        
    })


})(jQuery, window, document, 'html', 'body');
