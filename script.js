// Chuyển slide của banner
var index = 1;
changeImage1 = function(){
	var imgs = ["images/banner0.png","images/banner1.png"];
	document.getElementById('banner-click').src = imgs[index];
	index++;
	if (index == 2){
		index = 0;
	}
} 
// Chuyển slide của img .about
var index = 1;
	changeImage2 = function(){
		var imgs = ["images/about-slide1.png","images/about-slide2.jpg","images/about-slide3.jpg"];
		document.getElementById('info-click').src = imgs[index];
		index++;
		if (index == 3){
			index = 0;
		}
	}

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
