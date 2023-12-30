//Intro Pictures
$(function () {

  //zoomin
   $(".mygfphotos").mouseenter(function(){
    $(this).removeClass("w-75").addClass("w-100 p-3");
  })
   //zoomout
   $(".mygfphotos").mouseleave(function(){
   $(this).removeClass("w-100").addClass("w-75");
  })

});


     // Slide element up to hide (over 2s)
  //$(".blue-box").slideUp(2000);

  // Slide back down to show element
  //$(".blue-box").slideDown(2000);

//see more
$(function () {

  $("#seemore1").click(() => {
      $("#start").slideToggle(1000, function () {
          // Check if the element is visible after toggle
          if ($(this).is(":visible")) {
              $("#seemore1").text("See less");
          } else {
              $("#seemore1").text("See more");
          }
      });
  });

  $("#seemore2").click(() => {
      $("#where").slideToggle(1000, function () {
          // Check if the element is visible after toggle
          if ($(this).is(":visible")) {
              $("#seemore2").text("See less");
          } else {
              $("#seemore2").text("See more");
          }
      });
  });

  $("#seemore3").click(() => {
      $("#love").slideToggle(1000, function () {
          // Check if the element is visible after toggle
          if ($(this).is(":visible")) {
              $("#seemore3").text("See less");
          } else {
              $("#seemore3").text("See more");
          }
      });
  });

});



//fadeIn when hovered
$(function () {

  var galleryItems = $(".gallery").find("img")
  galleryItems.css("width", "33%").css("opacity", "0.7");

  galleryItems.mouseenter(function(){
    $(this).stop().fadeTo(500, 1)
  })
  galleryItems.mouseleave(function(){
    $(this).stop().fadeTo(500, 0.7)
  })
});


//glow when mouseenter and returns to normal when mouseleave
$(document).ready(function () {
    // Mouseenter event
    $(".card").mouseenter(function () {
        $(this).addClass("glow");
    });

    // Mouseleave event
    $(".card").mouseleave(function () {
        $(this).removeClass("glow");
    });
});