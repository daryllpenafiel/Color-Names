$(document).ready(function () {

    $(document).on("click", "#submit-button", function () {
        event.preventDefault();

        var colorName = $("#color-name").val().trim();
        var colorFamily = $("#color-family").val().trim();
        var hexInput = $("#hex-input").val().trim();
        var rInput = $("#r-input").val().trim();
        var gInput = $("#g-input").val().trim();
        var bInput = $("#b-input").val().trim();

        var hexOutput = "#" + hexInput;
        var rgbOutput = "RGB(" + rInput + "," + gInput + "," + bInput + ")";

        console.log(colorName);
        console.log(colorFamily);
        console.log(hexInput);
        console.log(rInput);
        console.log(gInput);
        console.log(bInput);
        console.log(hexOutput);
        console.log(rgbOutput);

        postNewColor({
            colorName: colorName,
            colorFamily: colorFamily,
            hex: hexOutput,
            rgb: rgbOutput,
            colorSource: "User"
        })
    })

    function postNewColor(newColorData) {
        $.post("api/colors", newColorData)
            .then(function () {
                console.log("new color posted");
                resetForm();
            });
    }

    function resetForm(){
        console.log("reset done!");
        $("#color-name").val("");
        $("#color-family").val("");
        $("#hex-input").val("")
        $("#r-input").val("")
        $("#g-input").val("")
        $("#b-input").val("")
    };
    
});