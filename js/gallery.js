var enlarged = document.getElementById("image_show");
var images = [];
var tagline = $(".tagline")
var nameInput

if (location.search) {
    nameInput = location.search.slice(1).replace(/%20/g, ' ');
    tagline.text("develop something beautiful, " + nameInput + "!");
}


var buildImages = function () {
	for (var i = 1; i < 60; i++){
		if (i < 10){
			images.push("<li><img src=images/pdxcg_0" + i + ".jpg /></li>");
		}
		else {
			images.push("<li><img src=images/pdxcg_" + i + ".jpg /></li>");
		}		
	}
}
buildImages();

$.each(images, function(i, v) {
	$('#gallery').append(v)
})

$(document).click(function( event ) {
 	if ($(event.target).is('img')) {
 		enlarged.className = 'display_img';
 		enlarged.firstChild.src = event.target.src
 	}
 	else {
 		enlarged.className = 'display_none';
	}})
 	
 	
