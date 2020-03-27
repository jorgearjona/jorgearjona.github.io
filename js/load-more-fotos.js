$(document).ready(function(){
    $(".load2").slice(0, 5).show();
    $("#loadMore2").on("click", function(e){
      e.preventDefault();
      $(".load2:hidden").slice(0, 5).slideDown();
      if($(".load2:hidden").length == 0) {
        $("#loadMore2").text("No Content").addClass("noContent");
      }
    });
    
  })