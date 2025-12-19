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

    }


    jQuery(document).ready(function () {
        app.bannerTestimonials();;

    });

    jQuery(window).on('load', function () {

        
    })


})(jQuery, window, document, 'html', 'body');
