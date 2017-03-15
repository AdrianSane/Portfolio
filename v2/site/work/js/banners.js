// -------------------------------------------------------------------------loadUp loader


//try: https://www.developphp.com/video/JavaScript/Page-Loading-Screen-Document-Preloader-Tutorial
function loadUp(){
  var loading = setTimeout(killLoader, 1000);
};

// -------------------------------------------------------------------------kill loader
function killLoader() {

  var a = $("#container"),
      //b = $("#loader"),
      //c = $("#loaderImg"),
      d = $("#load_screen");


  //document.body.removeChild(load_screen);

  TweenMax.set(a, {scale:.955, autoAlpha:0, transformOrigin:"top center"});
  TweenMax.to(d, 0.5, {autoAlpha:0, scale:0, transformOrigin:"top center"});
  TweenMax.to(a, 1.5, {scale:1, autoAlpha:1, display:"block", ease: Expo.easeOut}, "-=1.5");

  $("#mainNav").addClass("getSticky");

};
loadUp();




// banners showcase animation
function showCase(){
  var banners = $(".banner");
  $("#showCase").hover(
    function(){
      TweenMax.set(banners, {autoAlpha:0, transformOrigin: "center right", rotationZ: 0.01, x:1000});
      TweenMax.staggerTo(banners, 1, {autoAlpha:1, ease: Expo.easeOut, x:0}, 0.25);
    },
    function(){
      TweenMax.staggerTo(banners, 1, {autoAlpha:0, ease: Expo.easeOut, x:1000}, 0.25);
    }
  );
};
showCase();






// -------------------------------------------------------------------------nav scroll
$(window).scroll(function(e){
  var d = $('#mainNav'),
      e = $(window).scrollTop();
  if(e >= 400){
    $(d).addClass("scrolled");
  }else{
    $(d).removeClass("scrolled");
    //console.log("nav bg scroll fired");
  };
});
