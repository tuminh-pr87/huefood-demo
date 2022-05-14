
var index = 1;
		changeImage = function(){
		var imgs = ["images/banner0.png","images/banner1.png"];
		document.getElementById('banner-fade').src = imgs[index];
		index++;
		if (index == 2){
			index = 0;
		}
	} 
