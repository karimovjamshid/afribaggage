jQuery(function ($) {
    

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