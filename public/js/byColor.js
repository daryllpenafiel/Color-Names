$(document).ready(function(){ 

    function getColors() {
      $.get("/api/filter-by-color/:colorFamily", function (colorData) {
  
        for (i = 0; i < colorData.length; i++) {
          var colorDiv = $("<div class='color-block col-md-6'>").css({"background-color": (colorData[i].rgb !== "RGB(,,)") ? colorData[i].rgb : colorData[i].hex});
          colorDiv.addClass(colorData[i].colorName);
          var colorP = $("<p>").text(colorData[i].colorName).css({"color": (colorData[i].colorFamily === "Yellow" || colorData[i].colorFamily === "White" || colorData[i].colorFamily === "Brown") ? "darkslategray" : "white"});
          colorDiv.append(colorP);
          $(".colors-go-here").append(colorDiv);
      }
      });
    };
  
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.text("No colors in the database.");
      colorsLiust.append(alertDiv);
    }
    
    getColors();
  
  });
  
  