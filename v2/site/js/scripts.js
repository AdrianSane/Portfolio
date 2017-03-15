/*
- Adrian Velazquez
- www.adriansane.com
- www.riotmind.nyc
- 2016 / 2017 / 2018
  ----------------------
  hire_adrianV@yahoo.com
  admin@riotmind.nyc
  ----------------------
  index page scripts
*/
$(function(){

  // -------------------------------------------------------------------------headline animation
  function headLine(){
    // banner headline animation
    TweenMax.staggerFrom($(".title"), 3, {opacity:0, delay:0.5, ease: Expo.easeOut, force3D:true}, 1);
    TweenMax.from($("#headline p"), 2.75, {x:100, opacity:0, ease: Expo.easeOut});
  };// end headline function

  // -------------------------------------------------------------------------scale project events
  function boast(){
    // project image scale animation
    $(".project").hover(function(){// scale project bg images up on mouseover
      TweenMax.to(this, 2, {scale:1.005,ease: Expo.easeOut, transformOrigin:"center center", rotationZ: 0.01});
    },
    function(){// scale project bg images down on moseleave
      TweenMax.to(this, 2, {scale:1, ease: Expo.easeOut, transformOrigin:"center center", rotationZ: 0.01});
    });
  };// end boast function

// -------------------------------------------------------------------------main nav functions
function navigation(){
 // top nav to body smooth Scroll effect
 $('ul.topNav').find('a').click(function(){
   var $href = $(this).attr('href'),
       $anchor = $('#'+$href).offset();
   $('body').animate({scrollTop: $anchor.top}, 1200, "easeInOutCubic");
 return false;
 });

 // top nav bg effect on scroll
 $(window).scroll(function(e){
   var a = $('#mainNav'),
       b = $(window).scrollTop(),
       //using clientWidth for IE8 and earlier
       c = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

   /*
    Responsive mainNav effects conditional
    add a bg effect to main nav depending on users device and current scroll position
   */
   if(c > 1024 && b >= 50){//expanded
     $(a).addClass("scrolled");
   }else if(c == 1024 && b >= 355){//full width
     $(a).addClass("scrolled");
   }else if(c == 768 && b >= 320){//iPad
     $(a).addClass("scrolled");
   }else if(c == 750 && b >= 320){//mobile
     $(a).addClass("scrolled");
   }else{//remove class
     $(a).removeClass("scrolled");
   };
 });

};// end navigation function

// -------------------------------------------------------------------------skill sets animations
function showSkills(){
  var d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // responsive skills expanding animations
  if(d <= 1024){
    TweenMax.set($("#dev1"), {height: 140});
    TweenMax.set($("#dev2"), {height: 140});
    TweenMax.set($("#dev3"), {height: 110});
    TweenMax.set($("#dev4"), {height: 90});
    TweenMax.set($("#des1"), {height: 145});
    TweenMax.set($("#des2"), {height: 90});
    TweenMax.set($("#des3"), {height: 110});
    TweenMax.set($("#des4"), {height: 90});
  }else if(d <= 768){
    TweenMax.set($("#dev1"), {height: 95});
    TweenMax.set($("#dev2"), {height: 95});
    TweenMax.set($("#dev3"), {height: 75});
    TweenMax.set($("#dev4"), {height: 60});
    TweenMax.set($("#des1"), {height: 105});
    TweenMax.set($("#des2"), {height: 90});
    TweenMax.set($("#des3"), {height: 80});
    TweenMax.set($("#des4"), {height: 70});
  };

 // html
 $("#dev1").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:230, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

 // css
 $("#dev2").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:230, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

 // javascript
 $("#dev3").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:180, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

 // wordpress
 $("#dev4").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:195, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

 // photoshop
 $("#des1").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:240, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

 // illustrator
 $("#des2").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:180, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

 // animation
 $("#des3").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:215, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

 // design
 $("#des4").hover(function(){// mouseover
   TweenMax.to(this, 1, {height:180, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:1});
 },
 function(){// mouseout
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
   TweenMax.set($(this).children("ul"), {autoAlpha:0});
 });

};// end showskills function

// -------------------------------------------------------------------------initialize all functions
function setItOff(){
  navigation();
  headLine();
  boast();
  showSkills();
  $('.slider').unslider();
};
setItOff();

});// end document ready function
