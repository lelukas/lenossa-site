window.onload = function(){

    var screenWidth = $(window).width();

    for(var i = 1; i < 7; i++){
      $( "#background-" + i ).position({
        my: "center",
        at: "center",
        of: "#title-" + i,
      });
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

    //The first For can't be used once not all .background-title are properly positioned
    for(i = 1; i < 7; i++){
      anim = new ScrollFactory("#background-"+i, "#section-"+i)
    }

    // mouse interactions
    $("footer>div:first-child>img").on({
      mouseenter: function() {
        TweenLite.to(this, 0.6, {scale: 1.15, ease: Power3.easeOut})
      }, mouseleave: function() {
        TweenLite.to(this, 0.6, {scale: 1, ease: Power3.easeOut})
      }
    })

    $(".images>div").on({
      mouseenter: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#022630"})
      }, mouseleave: function() {
        TweenLite.to(this, 0.2, {backgroundColor: "#00485E"})
      }
    })
}



// var offset = parseFloat($(".background-title").css("left"));
// console.log(parseFloat(offset))
// var test = offset-screenWidth;
// console.log(test)



