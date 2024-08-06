$('.menu-btn').click(function(){
    $('.navbar .menu').togglerClass("active");
   $('menu-btn i').togglerClass("active");
});

var typed = new Typed(".typing",{
    strings:["web developer","web designer"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
});