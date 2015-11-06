var jumbo = $('.jumbotron');
var images = [];
var x = 0; 

var buildImages = function () {
	//builds array of image location strings
	for (var i = 1; i < 60; i++){
		if (i < 10){
			images.push('url("images/pdxcg_0' + i + '.jpg")');
		}
		else {
			images.push('url("images/pdxcg_' + i + '.jpg")');
		}		
	}
}

var changeImage = function () {
	//cycles through background image
    $('.jumbotron').css("background-image", images[x]);
    x++;
    x = (x % 60); // cycles back to zero when x = 60
}

buildImages()
setInterval("changeImage()", 20000);



// var changeImage = function () { 
// 	var time = 20000;
// 	$.each(images, function(index, value) {
// 	setTimeout(function() {
// 		if(index == images.length -1){
//         	changeImage() 
//     	}   
// 		$("#jumbotron").css("background-image", value);
// 		console.log(value)
// 	}, time);
// 	time += 20000;  //last picture has 40000 delay
// });
// }

//check out how disgusting this thing is