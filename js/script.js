/*
==========================================================
            |PRE LOADER|
==========================================================
*/ 

$(window).on('load',() => {
	$('#status').fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
});


/*
===========================================================
          |carousel slider|
===========================================================
*/ 

$(function(){
 $('.owl-carousel').owlCarousel({
 	items:2,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
          items:1
        },
        480:{
            items:2
        }
    }
 });
});

 /*
===========================================================
          |pop up|
===========================================================
*/ 

$(function(){
    $('#portfolio-wrapper').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
});



 /*
===========================================================
          |show hide nav|
===========================================================
*/ 


$(function(){
          

     showHide();
    
    $(window).scroll(function(){
    showHide();
    });



   function showHide(){
     if($(window).scrollTop() >0){
         
       $("nav").addClass("navbar-white");

       $(".navbar a img").attr("src","logos/olive.png");

       $("#back-to-top").fadeIn();


     }
     else{

        $("nav").removeClass("navbar-white");
        $(".navbar a img").attr("src","logos/olive-white.png");
        $("#back-to-top").fadeOut();
     }
   }


});

 /*
===========================================================
          |smooth scrolling effect|
===========================================================
*/ 

$(function(){
    $("smooth-scroll").click(function(event){
        
        event.preventDefault();

        var sectionId = $(this).attr("href");

        $("html,body").animmate({
            scrollTop:$(sectionId).offset().top
        },4000,"easeInOutShine");
    });
});


 /*
===========================================================
          |mobile nav|
===========================================================
*/ 


$(function(){
    $('#button-for-navbar').click(function(){
       $('#mobile-nav').css('display','block');
    });
    $('#cancel-button,#mobile-nav #contents a').click(function(){
        $('#mobile-nav').css('display','none');
    });
});



 /*
===========================================================
             |ANIMATIONS|
===========================================================
*/ 


$(function(){
new WOW().init();
});


$(window).on('load',function(){
$('#home-heading').addClass('fadeInDown');
$('#paragraph').addClass('fadeInLeft');
$('#home-button').addClass('zoomIn');
$('#arrow-down i').addClass('fadeInDown');
});



























