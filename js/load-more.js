$(document).ready(function(){
    $(".load").slice(0, 4).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".load:hidden").slice(0, 4).slideDown();
      if($(".load:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })