$(document).ready(function(){
    //Define array of images and set up an index to keep track of the currently dsiplayed images.
    var images = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg", "inage-5.jpg"];
    var index = 0

    function displayImage(){
        var currentImage = images[index];
        console.log(currentImage);
        $("#imageContainer").attr("<img" + "src" + currentImage + ">");
    }

    //add click event handlers on the next button
    $("#nextButton").on("click", function(){
        index = (index + 1) % images.length;
        displayImage()
    })

    //add click event handlers on the prev button
    $("#prevButton").on("click", function(){
        index = (index - 1 + images.length) % images.length;
        displayImage();
    })



});