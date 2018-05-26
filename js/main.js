function ready() {
	function responsiveBgImg(){
		var imgs = document.getElementsByClassName("img");
		Array.prototype.forEach.call(imgs,function(value,key){
				console.log(arguments);

				var img = value;
				var srcStr = img.getAttribute('data-img-src');
				var srcAr = srcStr.match(/[0-9]+ [a-z :\/0-9.]+/g);
				console.log(srcAr);
				Array.prototype.forEach.call(srcAr,function(v,k){
						srcAr[k] = v.split(/ /);
				});
				for (var i = 0; i < srcAr.length; i++) {
					if ((srcAr[i][0]*1) >= window.innerWidth ) {
						var imgTmp = new Image();
						imgTmp.src = srcAr[i][1];
						 imgTmp.onload = function() {
							 	img.style['backgroundImage'] = "url(" + srcAr[i][1]+")";
						 }
							break;
					}
				}
		});
	}
	responsiveBgImg();
	window.onresize = function(event) {
  	responsiveBgImg();
	};
}
document.addEventListener("DOMContentLoaded", ready);
