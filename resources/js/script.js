
/*------ For the sticky navigation ------ */
$(document).ready(function() {

    $('.js--section-specification').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
     });

      /*var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
    }) */


/* Scroll on button */

$('.js--button-signup').click(function(){
    $('html, body').animate({scrollTop: $('.js-section-plan').offset().top},1000);
});

$('.js--button-showmore').click(function(){
    $('html, body').animate({scrollTop: $('.js-section-testimonials').offset().top},1000)   
})

/* Scroll food delivery */

$('.js-food-delivery-button').click(function(){
    $('html, body').animate({scrollTop: $('.js-food-delivery').offset().top},1000);
});

/* Scroll our cities */
$('.js-buton-our-city').click(function(){

    $('html, body').animate({scrollTop: $('.js--section-city').offset().top},1000);

});

/* Scroll on How it works */

$('.js--button-app-screen').click(function(){

    $('html, body').animate({scrollTop: $('.js-section-steps').offset().top},1000);

});

/* Animations on scroll */
$('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-3').waypoint(
    (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );
  $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__backInUp');
    },
    {
      offset: '50%',
    }
  );

  /*Mobile nav */

$('.js-mobile-nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon =  $('js-mobile-nav-icon ion-icon');

    nav.slideToggle(200);
 
   


});

});


