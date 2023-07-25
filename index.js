$(".closebutton").on("click", function(){
    $(".nav__bar").slideUp()
})
$(".open_menu").on("click", function(){
    if($(".nav__bar").hide()){
        $(".nav__bar").slideDown();
        $(".nav__bar").css("display", "flex")
    }
})
   
let currentImageIndex = 0;
const totalImages = $(".content").length;

// Function to show the current image
function showImage() {
  $('.content').hide();
  $('.content').eq(currentImageIndex).show();
}

// Event listener for the "next" button click
$('.next').on("click",function() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage();
});

// Event listener for the "previous" button click
$('.previous__container').on ("click", function() {
  currentImageIndex = (currentImageIndex - 1) % totalImages;
  showImage();
});

// Show the initial image
showImage();

$("a").on("click",function(e){
   e.preventDefault()
})
