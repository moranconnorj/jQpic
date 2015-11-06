var form = $("#signup");
var text = $("input[type=text]");
var email = $("input[type=email]");
var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form[0]["noValidate"] = "novalidate";

function checkInput() {
	$.each(text, function(i, v) {
		if (!text[i].value) {
			alert("FILL IN " + (text[i]["name"]).toUpperCase());
		}
	})
	if (!reg.test(email[0].value)) {
		alert("EMAIL IN FORMAT xxxx@xxxx.xxx");
	} else {
		navigateName(); //create
	}
}

function navigateName() {
	window.location.href = "gallery.html?" + text.val();
}

$(document).click(function( event ) {
	if (event.target.type === "submit") {
		event.preventDefault();
		checkInput();
	}
})