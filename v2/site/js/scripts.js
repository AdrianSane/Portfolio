$(function(){

// -------------------------------------------------------------------------loadUp loader
function loadUp(){
  var loading = setTimeout(killLoader, 2200)
      a = $("#container"),
      b = $("#loader"),
      c = $("#loaderImg");
};

// -------------------------------------------------------------------------kill loader
function killLoader() {
  TweenMax.to([b,c], .5, {scale:0, autoAlpha:0, display:"none", ease: Expo.easeIn});
  TweenMax.set(a, {scale:.955, autoAlpha:0, transformOrigin:"top center"});
  TweenMax.to(a, 1.5, {scale:1, autoAlpha:1, display:"block", ease: Expo.easeOut});
};

// -------------------------------------------------------------------------headline animation
function headLine(){
  TweenMax.staggerFrom($(".title"), 3, {opacity:0, delay:0.5, ease: Expo.easeOut, force3D:true, delay:3.25}, 1);
  TweenMax.from($("#headline p"), 2.75, {x:100, opacity:0, delay:6.5, ease: Expo.easeOut});
}

// -------------------------------------------------------------------------scale project events
function boast(){
  // scale projects up on hover
  $(".project").mouseover(function(){
    TweenMax.to(this, 2, {scale:1.005,ease: Expo.easeOut, transformOrigin:"center center", rotationZ: 0.01});
  });
  // scale projects down on mouse out
  $(".project").mouseout(function(){
    TweenMax.to(this, 2, {scale:1, ease: Expo.easeOut, transformOrigin:"center center", rotationZ: 0.01});
  });
};

// -------------------------------------------------------------------------main nav functions

function navigation(){
 // smooth Scroll
 $('ul.topNav').find('a').click(function(){
   var $href = $(this).attr('href');
   var $anchor = $('#'+$href).offset();
   $('body').animate({scrollTop: $anchor.top}, 2000, "easeInOutCubic");
   console.log("smooth fired");
   return false;
 });

 // navigation scroll bg effect
 $(window).scroll(function(e){
   var d = $('#mainNav'),
       e = $(window).scrollTop();
   if(e >= 550){
     $(d).addClass("scrolled");
   }else{
     $(d).removeClass("scrolled");
     console.log("nav bg scroll fired");
   };
 });

 // active menu link
 $('#mainNav').find("a").click(function () {
   $(this).removeClass('active');
   $(this).addClass('active');
   console.log("active link fired");
  });


};

// -------------------------------------------------------------------------main nav functions
function showSkills(){
 //var set = [$(".set"), $(".set").find("4")];
 //var ssd = [$("#dev"), $("#des")];
 //var wsa = TweenMax.set([$("#dev"), $("#des")], {css:{backgroundImage:"none"}});
 var sets = [$("#dev1"),$("#dev2"),$("#dev3"),$("#dev4"),$("#des1"),$("#des2"),$("#des3"),$("#des4")];


 $(".set").mouseover(function(){

   for(i=0; i<sets.length; i++){
     TweenMax.to(sets[0], 1, {height:65, ease: Expo.easeOut}); // html
   };


 });

 $(".set").mouseout(function(){
   TweenMax.to(this, 1, {height:35, ease: Expo.easeOut});
 });


};








// initialize functions
function setItOff(){
  //loadUp();
  navigation();
  headLine();
  showSkills();
  boast();
  $('.slider').unslider();
}
setItOff();






});
