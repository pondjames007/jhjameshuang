
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
showSlides();

function showSlides() {
    $('.slide').hide();
    $('.slider-dot').removeClass('active');
    // $(`.slide:eq(${slideIndex})`).show();
    
    $(`.slide:eq(${slideIndex})`).fadeIn(1000);
    
    $(`.slider-dot:eq(${slideIndex})`).addClass('active');
    slideIndex++;
    if (slideIndex >= $('.slide').length) {slideIndex = 0} 

    setTimeout(showSlides, 4000);
}

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
    
    if($(this).hasClass("nav-link")){
        $('.nav-link').removeClass('current');
        $(this).addClass('current');
        
        $.when($('.nav-menu').slideUp("slow")).then(()=>{
            $('.nav-menu').removeClass("nav-overlay");
            $('.nav-menu').removeClass("nav-menu-open");
            $('.nav-link').removeClass("nav-link-open");
        });
    }

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )

    

  })