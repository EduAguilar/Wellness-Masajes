var slideIndex = 0;
let slider = document.querySelector(".slideshow-container")
let sliderIndividual = document.querySelectorAll(".mySlides")
let dots = document.querySelectorAll(".dot")
showSlides();


function showSlides() {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}