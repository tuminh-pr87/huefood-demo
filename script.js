// Ẩn logo-nav-icons
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
// Chuyển slide <>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
	
  }
  x[slideIndex-1].style.display = "block";  
}
//Thông báo login
function myfunction(){
	alert("Bạn đã đăng nhập vào Huế Foody!\n(You are logged in to Hue Foody!)");
} 
function myFunction(){
	alert("Bạn đã đăng xuất!\n(You are logged out!)");
}
