window.onload = function(){

  // var elem = new Foundation.Magellan(element, options);

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


    var screenWidth = $(window).width();
    setBackgrounds();  
    setMapsDimensions();
    $(window).resize(function (){
 
      // setTimeout(function() {
              setMapsDimensions();
              setBackgrounds();
      // }, 400);
    })

    var tl = new TimelineLite();
    var shrinkBar = TweenLite.to(".top-bar:first-child", 0.2, {height: "4em"})
    var shrinkLogo = TweenLite.to(".top-bar:first-child>div>img", 0.2, {y: "-=10",scale: 0.9, opacity: 0})
    tl.add(shrinkBar).add(shrinkLogo);

    var topBarController = new ScrollMagic.Controller();

    var sceneBar = new ScrollMagic.Scene({
      triggerElement: "#section-inovacao"
    }).setTween(tl).addTo(topBarController);

    var sceneBar2 = new ScrollMagic.Scene({
      triggerElement: "#section-inovacao"
    }).setTween(shrinkLogo).addTo(topBarController);

    // Fab button scale animation
    var controllerButton = new ScrollMagic.Controller();
    var tweenButton1 = TweenLite.from(".fab", 0.3, {scale: 0, ease: Power4.easeOut});
    var sceneButton = new ScrollMagic.Scene({
      triggerElement: "#section-inovacao"
    }).setTween(tweenButton1).addTo(controllerButton);


    // Background Slide effect
    $(".background-title").each(function(){
      new ScrollFactory(this, this.parentElement)
      //Doesn't accept JQuery objects as triggerElement
    })

    // mouse hover interactions
    $(".images>div").on({
      mouseenter: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#022630"})
      }, mouseleave: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#00485E"})
      }
    })

    $("svg").on({
      mouseenter: function(){
        TweenLite.to( $(this).children("g").children("g:first-child"), 0.4, {x: "2px", y: "2px", scale: 0.8, ease: Power2.easeOut})
        TweenLite.to( $(this).children("g").children("g:last-child"), 0.4, {x: "9px", y: "9px", scale: 0.9, ease: Power2.easeOut})
      },
      mouseleave: function(){
        TweenLite.to( $(this).children("g").children("g:first-child"), 0.4, {x: "-=2px", y: "-=2px", scale: 1, ease: Power2.easeOut})
        TweenLite.to( $(this).children("g").children("g:last-child"), 0.4, {x: "-=9px", y: "-=9px", scale: 1 , ease: Power2.easeOut})
      }
    })

    // Side menu
    $('#menu').click(function(){
        TweenLite.to(".fab-menu", 0.3, {right: 0});
        TweenLite.to(".menu-overlay", 0.4, {opacity: 1, ease: Power4.easeOut, onStart: 
          function(){
            $("body").css("overflow-y", "hidden");
            $(".menu-overlay").css("visibility", "visible")}
          })    
    })


    // SLIDING HTMLMenuElement. CONTNUAR DEPOIS. //TODO DEMAIS

    // var sideMenu = $("#side-menu");
    // var menuPuller = document.getElementById("menu-puller");

    // var manager = new Hammer.Manager(menuPuller);
    // var panner = new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 });
    
    // manager.add(panner);
    // manager.on("panleft", function(e) {
    //   if( parseFloat(sideMenu.css("right")) >= 300 || parseFloat(sideMenu.css("right")) <= 0){
    //     console.log(sideMenu.css("right"))
    //     $("#side-menu").css("right", parseFloat($("#side-menu").css("right")) +4 + "px");
    //   }else{
        
    //   }
        
    // });

    // manager.on("panright", function(e) {
    //     // sideMenu.style.right = e.distance + "px";
    // });


    $(".menu-overlay, .fab-menu li>a").click(function(){
      TweenLite.to(".fab-menu", 0.3, {right: "-400px"});
      TweenLite.to(".menu-overlay", 0.4, {opacity: 0, ease: Power4.easeIn, onComplete: 
          function(){
            $("body").css("overflow-y", "visible");
            $(".menu-overlay").css("visibility", "hidden")}
          })
    })

    // Navigation
    //bugado, arrumar
    // $(".menu-navigation").click(function(event){
    //   var offset= $("#section-"+$(this).parent().attr("id")).offset().top;
    //   TweenLite.to(window, 1, {scrollTo:{y: {offset}}, ease: Power4.easeOut });
      
    // })


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

    function setMapsDimensions(screen){
      // while(mq){
        if(mq.matches){
          $("#gmap_canvas").height($("form").outerHeight());
        }else{
          $("#gmap_canvas").height("200px").width($("form").outerWidth());
        }
      // }  
    }

    //Slider  
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true, 
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })      

}

