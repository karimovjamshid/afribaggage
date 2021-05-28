document.addEventListener('DOMContentLoaded', () => {

jQuery(function ($) {

    

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
                    breakpoint: 545,
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
let miniNavLink = $(".mini-nav__link");

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
miniNavLink.on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
})

// ======== End Filter ========

    const modal = document.querySelectorAll('.modal');
    const weightCardCounter = document.querySelectorAll('.weight-card__counter');
    const modalWindow = document.querySelectorAll('.modal-window');
    const modalWindowClose = document.querySelectorAll('.modal-window__close');

    const insuranceModal = document.getElementById('insurance-modal');
    const ratesModal = document.getElementById('rates-modal');
    const customizedModal = document.getElementById('customized-modal');
    const customModal = document.getElementById('custom-modal');
    const bagsModal = document.getElementById('bags-modal');

    const insuranceTitle = document.getElementById('insuranceTitle');
    const ratesTitle = document.getElementById('ratesTitle');
    const customizedTitle = document.getElementById('customizedTitle');
    const customTitle = document.getElementById('customTitle');
    
    modal.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.remove('active');
        })
    })
    insuranceTitle.addEventListener('click', function (w) {
        w.preventDefault();
        insuranceModal.closest('.modal').classList.add('active');
    })
    ratesTitle.addEventListener('click', function (w) {
        w.preventDefault();
        ratesModal.closest('.modal').classList.add('active');
    })
    customizedTitle.addEventListener('click', function (w) {
        w.preventDefault();
        customizedModal.closest('.modal').classList.add('active');
    })
    customTitle.addEventListener('click', function (w) {
        w.preventDefault();
        customModal.closest('.modal').classList.add('active');
    })
    modalWindow.forEach(function (item) {
        item.addEventListener('click', function (e) {
         e.stopPropagation();
        })
    })
    modalWindowClose.forEach(function (item) {
        item.addEventListener('click', function (e) {
         this.closest('.modal').classList.remove('active');
        })
    })
    
weightCardCounter.forEach(function (item) {
        item.addEventListener('click', function () {
            bagsModal.closest('.modal').classList.add('active');
        })
    })
    

})
    
    

});