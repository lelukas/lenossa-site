window.onload = function(){

    setBackgrounds();

    var screenWidth = $(window).width();

    $(window).resize(function (){
      setBackgrounds();
      // $(".tes").position({
      //   my: "bottom",
      //   at: "right bottom",
      //   of: "#section-1"
      // })
    })


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

    //The first For can't be used once not all .background-title are properly positioned
    for(i = 1; i < 7; i++){
      anim = new ScrollFactory("#background-"+i, "#section-"+i)
    }

    $("#backToTop").click(function(){
      $("body").animate({scrollTop: 0}, "slow")
    })

    // mouse interactions
    $(".fab" ).on({
      mouseenter: function() {
        TweenLite.to( $(this).children(), 0.2, {scale: 1.07, ease: Power3.easeOut})
      }, mouseleave: function() {
        TweenLite.to( $(this).children(), 0.2, {scale: 1, ease: Power3.easeOut})
      }
    })

    $(".images>div").on({
      mouseenter: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#022630"})
      }, mouseleave: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#00485E"})
      }
    })

    if (matchMedia) {
      var mq = window.matchMedia("(min-width: 64em)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }

    // media query change
    function WidthChange(mq) {
      if (!mq.matches) {
        $(".images>div").unbind();
      } else {
        
      }

    }

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

    // $(".tes").position({
    //   my: "center bottom",
    //   at: "center bottom",
    //   of: "#section-1"
    // })
}


// "footer>div:first-child>img



// var offset = parseFloat($(".background-title").css("left"));
// console.log(parseFloat(offset))
// var test = offset-screenWidth;
// console.log(test)



