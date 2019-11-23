$(document).ready(function(){
  $(".navigation__icon__bars").click(function(e){
    e.preventDefault()
    $(".navigation").css("display","flex");
    $(".navigation__menu__close").fadeIn(1000);
    $(".navigation__icon").fadeOut(500);
  });

  $(".navigation__menu__close").click(function(){
    $(".navigation").css("display","none");
    $(".navigation__menu__close").fadeOut(500);
    $(".navigation__icon").fadeIn(1000);
  })

})