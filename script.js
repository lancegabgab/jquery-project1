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


//see more
$(function () {

  $("#seemore1").click(()=>{
    $("#start").slideToggle(1000);

  })
  $("#seemore2").click(()=>{
      $("#where").slideToggle(1000);

  })
  $("#seemore3").click(()=>{
      $("#love").slideToggle(1000);

  })

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


