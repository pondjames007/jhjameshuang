
// Dropdown Menu
$('.hamburger-icon.icon-nav-menu').click(()=>{
    if($('.nav-menu').is(":hidden")){
        $('.nav-menu').slideDown("slow");
        $('.nav-menu').addClass("nav-overlay");
        $('.nav-menu').addClass("nav-menu-open");
        $('.nav-link').addClass("nav-link-open");
    }
    else{
        $.when($('.nav-menu').slideUp("slow")).then(()=>{
            $('.nav-menu').removeClass("nav-overlay");
            $('.nav-menu').removeClass("nav-menu-open");
            $('.nav-link').removeClass("nav-link-open");
        });
        
    }
});


// Slide Show
let slideIndex = 0;
let clicked = false;
let number = 0;
showSlides();

function showSlides(clicked) {
    // if(clicked){
    //     clicked = false;
    //     slideIndex = number;
        
    // }
    // console.log(slideIndex);
    $('.slide').hide();
    $('.slider-dot').removeClass('active');
    // $(`.slide:eq(${slideIndex})`).show();
    
    $(`.slide:eq(${slideIndex})`).fadeIn(1000);
    
    $(`.slider-dot:eq(${slideIndex})`).addClass('active');
    slideIndex++;
    if (slideIndex >= $('.slide').length) {slideIndex = 0} 

    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// $('.slider-dot').click((event)=>{
//     $('.slider-dot').removeClass('active');
//     console.log(event.target.id)
//     $(`.slider-dot:eq(${event.target.id})`).addClass('active');
//     $('.slide').hide();
//     $(`.slide:eq(${event.target.id})`).show();
//     clicked = true;
//     number = event.target.id;
// });