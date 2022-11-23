var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var x = document.getElementsByClassName("mySlides fade");
  var y = document.getElementsByClassName("dot");
  if(n > x.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = x.length;
  }
  for(var i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  for(var i = 0; i < y.length; i++){
    y[i].className = y[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].className += " active";
}