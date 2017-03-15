/*

    Droga5 Banner JS
    Adrian Velazquez
    --------------------
    avelazquez@droga5.com

*/


(function() {

    /**

    Initialize banner elements

    */
    var banner = document.getElementById('banner'),
        search = document.getElementsByClassName('search')[0],
        cursor = document.getElementsByClassName('cursor')[0],
        phone = document.getElementsByClassName('phone')[0],
        hit = document.getElementsByClassName('hit')[0],
        cta = document.getElementsByClassName('cta-container')[0],
        ctaBg = document.getElementsByClassName('cta-bg')[0],
        logoContainer = document.getElementsByClassName('logo-container')[0],
        logo = document.getElementsByClassName('logo')[0],
        headline = document.getElementsByClassName('headline')[0],
        ripple = document.getElementsByClassName('ripple-effect'),
        radius = 100,
        btn_defaultColor = "#2196F3",
        btn_hoverColor = "#42A5F5",
        btn_defaultShadow = "0px 1px 5px rgba(0,0,0,0.25)",
        btn_hoverShadow = "1px 2px 5px rgba(0,0,0,0.25)";
        split = {
          splitPhones : document.getElementsByClassName('splitPhones')[0],
          leftPhone : document.getElementsByClassName('left')[0],
          midPhone : document.getElementsByClassName('mid')[0],
          rightPhone : document.getElementsByClassName('right')[0],

          // video images
          rightIMG : document.getElementsByClassName('rightIMG')[0],
          midIMG : document.getElementsByClassName('midIMG')[0],
          leftIMG : document.getElementsByClassName('leftIMG')[0]
        },

        // constants for banner dimensions
        WIDTH = 970,
        HEIGHT = 250,

        ctaDefaultColor = "#4093d0";

    var mainTl = new TimelineMax();
    var mouseX, mouseY;

    /**

    Main animation function

    */

    // initialize banner visibility
    mainTl.set(banner, {autoAlpha:1});
    TweenMax.set(ripple, {autoAlpha: 0});
    TweenMax.set(logo, {scale:0.35});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.5)

        // animate cursor
        .fromTo(cursor, 1, {opacity:1, repeat:1}, {opacity:0, repeat:2}, "start")

        // animate search bar
        .to(search, 2.5, {borderRadius:12, x:203, y:-82, width:99, height:204, ease: Sine.easeOut})

        // hide search bar
        .to(search, .25, {opacity:0, ease: Sine.easeIn}, "+=.5")

        // reveal pixel
        .to(phone, .75, {autoAlpha:1, ease: Sine.easeIn}, "-=.5")

        // reveal phones
        .set(split.splitPhones, {autoAlpha:1, onComplete:endFrame}, "+=1.35")

        // split phones
        .to(split.leftPhone, .75, {x:-137, ease: Sine.easeOut})
        .to(split.rightPhone, .75, {x:137, ease: Sine.easeOut}, "-=.75")

        // reveal video image
        .to(split.midIMG, .25, {autoAlpha:1}, "-=.75");


        function endFrame(){
          var end = new TimelineMax();

          end
          // show headline
          .from(headline, 1, {autoAlpha:0, ease: Sine.easeOut}, "-=.2")

          // play logo animation
          .to(logo, 1, {backgroundPosition:"-8358px", ease:SteppedEase.config(42)}, "-=1")

          // show cta
          .fromTo(cta, 1, {scale:1.05, autoAlpha:0}, {scale:1, autoAlpha:1, ease:Back.easeInOut.config(0.8)}, "-=2");
        }

    /**

    CTA and clickthrough event listeners

    */

    cta.addEventListener('mouseover', function(event) {
      // change the background color
      TweenMax.to(ctaBg, 0.4, {
        backgroundColor: btn_hoverColor
      });
      // animate the drop shadow
      TweenMax.to(cta, 0.4, {
        boxShadow: btn_hoverShadow
      });
    });

// roll out
cta.addEventListener('mouseout', function(event) {
  //   resets background color
  TweenMax.to(ctaBg, 0.4, {
    backgroundColor: btn_defaultColor
  });
  //   resets drop shadow
  TweenMax.to(cta, 0.4, {
    boxShadow: btn_defaultShadow
  });
});

// mouse down
cta.addEventListener('mousedown', function(event) {
  // get mouse x and y
  var pos = getMousePos(event);

  // position ripple container
  TweenMax.set(ripple, {
     left: pos.x - 62,
     top: pos.y - 20
    // need to figure out how to center the ripple based on mouse x/y
  });
  // fade in and grow the ripple
  TweenMax.fromTo(ripple, 1, {
    autoAlpha: 0,
    scale: 0
  }, {
    autoAlpha: 1,
    scale: 4
  });
  // start fading out the ripple
  TweenMax.to(ripple, 0.8, {
    autoAlpha: 0,
    delay: 0.4,
    ease: Sine.easeOut
  })
  Enabler.exit('CTA Exit');
  mainTl.progress(1);
});

// video image clickThroughs
split.leftPhone.addEventListener('mousedown', function(){
  Enabler.exit('left EXIT');
});

split.rightPhone.addEventListener('mousedown', function(){
  Enabler.exit('right EXIT');
});

split.midPhone.addEventListener('mousedown', function(){
  Enabler.exit('mid EXIT');
});

banner.addEventListener('mousedown', function(){
  mainTl.progress(1);
})

hit.addEventListener('mousedown', function(){
  mainTl.progress(1);
})

function getMousePos(evt) {
    var doc = document.documentElement || document.body;
    var pos = {
        x: evt ? evt.pageX : window.event.clientX + doc.scrollLeft - doc.clientLeft,
        y: evt ? evt.pageY : window.event.clientY + doc.scrollTop - doc.clientTop
    };
    return pos;

}

})();

// sprite animation
/*
    elem: the <img> tag of the element you're animating
    distX: the x-position of the last frame of the animation on the sprite sheet
    distY: the y-position of the last frame of the animation on the sprite sheet
    dur: the duration of the animation
    steps: how many frames make up the animation
    repeat: the number of times the animation should loop. Defaults to 1. -1 loops forever.
*/
function spriteAnim(elem, dist, dur, steps, reps) {
    // make a new TimelineMax to hold the animation
    var _tl = new TimelineMax();
    // congfigure an instance of SteppedEase with the number of animation frames
    var steppedEase = new SteppedEase(steps);
    // set the number of loops
    var repeat = (reps === undefined) ? 0 : reps;
    // animate!
    _tl.to(elem, dur, {
        x:dist,
        repeat:repeat,
        ease:steppedEase});

    return _tl;
}
