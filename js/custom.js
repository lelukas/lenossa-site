window.onload = function(){
    var screenWidth = $(window).width();
    setBackgrounds();

    

    $(window).resize(function (){
 
      // setTimeout(function() {
              setBackgrounds();
      // }, 400);

      // $(".tes").position({
      //   my: "bottom",
      //   at: "right bottom",
      //   of: "#section-1"
      // })
    })

    // Fab button scale animation
    var controllerButton = new ScrollMagic.Controller();
    var tweenButton1 = TweenLite.from(".fab", 0.3, {scale: 0, ease: Power4.easeOut});
    var sceneButton = new ScrollMagic.Scene({
      triggerElement: "#section-2"
    }).setTween(tweenButton1).addTo(controllerButton);


    

    //GAMBIARRA. ARRUMAR DEPOIS
    for(i = 1; i < 7; i++){
      anim = new ScrollFactory("#background-"+i, "#section-"+i)
    }


    // mouse interactions
    $(".images>div").on({
      mouseenter: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#022630"})
      }, mouseleave: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#00485E"})
      }
    })


    // media query change
    if (matchMedia) {
      var mq = window.matchMedia("(min-width: 64em)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }
    
    function WidthChange(mq) {
      if (!mq.matches) {
        $(".images>div").unbind();
      } else {
        
      }
    }

    // Side menu
    $('#menu').click(function(){
        TweenLite.to(".fab-menu", 0.3, {right: 0});
        TweenLite.to(".menu-overlay", 0.4, {opacity: 1, ease: Power4.easeOut, onStart: 
          function(){
            $("body").css("overflow-y", "hidden");
            $(".menu-overlay").css("visibility", "visible")}
          })    
    })

    $(".menu-overlay, .fab-menu li>a").click(function(){
      TweenLite.to(".fab-menu", 0.3, {right: "-400px"});
      TweenLite.to(".menu-overlay", 0.4, {opacity: 0, ease: Power4.easeIn, onComplete: 
          function(){
            $("body").css("overflow-y", "visible");
            $(".menu-overlay").css("visibility", "hidden")}
          })
    })

    $("#backToTop").click(function(){
      TweenLite.to(window, 1, {scrollTo:0, ease: Power4.easeOut });
    })


    // Methods
    function setBackgrounds(){
        $(".background-title").each(function (){
          var title = $(this).prev().children()
          $(this).css("height", title.height() + 20 + "px")
          $(this).position({
            my: "center",
            at: "center",
            of: title
          })
      })
    }


    function ScrollFactory(background, section){
      this.controller = new ScrollMagic.Controller();
      this.tween = TweenLite.from(background, 0.7, {left: -screenWidth, ease: Power4.easeInOut});

      this.scene = new ScrollMagic.Scene({
        triggerElement: section
      })
      .setTween(this.tween)
      // .addIndicators({name: "1 (duration: 0)"})
      .addTo(this.controller);
    };


    //Slider  
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true, 
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })

  mySwiper.once('SetTranslate', function(){
    // setBackgrounds();
    // alert(1)
  });       





  // var controller4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// // build scenes
	// new ScrollMagic.Scene({triggerElement: "#parallax1"})
	// 				.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
	// 				.addIndicators()
	// 				.addTo(controller4);
 
}

