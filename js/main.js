document.addEventListener('DOMContentLoaded', () => {

jQuery(function ($) {

    const timer = $('.timer').FlipClock({
        autoStart: false,

    })
    timer.setTime(5000);
    timer.setCountdown(true);
    timer.start();

        $('.about-slider__content').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [{
                    breakpoint: 1130,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.testimonials__slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });


// ======== Filter ========

let filter = $("[data-filter]");
let sectionsIcon = $(".sections__icon");

filter.on('click', function(event){
    event.preventDefault();
    let category = $(this).data("filter");
    $("[data-type]").each(function(){
        let currentType = $(this).data("type");
        
        if(currentType != category){
            $(this).addClass("hidden");
        }else{
            $(this).removeClass("hidden");
        }
    })
    
    

})
sectionsIcon.on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
})

// ======== End Filter ========


    
    
    
    

})

});