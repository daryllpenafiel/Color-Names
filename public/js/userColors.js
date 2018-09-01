$(document).ready(function(){

  
    function getColors() {
      $.get("/api/colors/user", function (colorData) {
  
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
  
    ///------OLD FUNCTIONS FOR GENERATING A TABLE------------------------//
  
      // var colorsList = $("tbody");
     
      // function createColorRow(colorData) {
      //     var newTr = $("<tr>");
          
      //     newTr.data("color", colorData);
      //     newTr.append("<td>" + colorData.id + "</td>");
      //     newTr.append("<td>" + colorData.colorName + "</td>");
      //     newTr.append("<td>" + colorData.hex + "</td>");
      //     newTr.append("<td>" + colorData.rgb + "</td>");
      //     newTr.append("<td>" + colorData.colorFamily + "</td>");
      //     newTr.append("<td>" + colorData.colorSource + "</td>");
      //     newTr.append("<td>" + colorData.likes + "</td>");
  
      //     return newTr;
      //   }
  
      
   
      // function getColors() {
      //     $.get("/api/colors", function (data) {
  
      //       var rowsToAdd = [];
      //       for (var i = 0; i < data.length; i++) {
      //         rowsToAdd.push(createColorRow(data[i]));
      //         //console.log(data[i]);
      //       }
      //       renderColorList(rowsToAdd);
      //     });
      //   };
  
      //   getColors();
  
      //   function renderColorList(rows) {
      //     if (rows.length) {
      //       console.log(rows);
      //       colorsList.prepend(rows);
      //     } else {
      //       renderEmpty();
      //     }
      //   }
  
       
      //   function createColors(colorData) {
      //     for (i = 0; i < colorData.length; i++) {
      //         var colorDiv = $("<div class='color-block col-md-6'>").css("background-color", colorData[i].colorName);
      //         colorDiv.addClass(colorData[i].colorName);
      //         var colorP = $("<p>").text(colorData[i].colorName);
      //         colorDiv.append(colorP);
      //         $(".colors-go-here").append(colorDiv);
      //     }
      // }
  
      // createColors();
  
  });
  
  