$(document).ready(function() {
    $(".clickable-image").click(function() {
      const divIndex = parseInt($(this).attr("data-div-index"));
      const divToShow = $(".hidden-div[data-div-index='" + divIndex + "']");
      
      // Toggle the visibility of the corresponding div
      divToShow.toggle();
    });
  });
  