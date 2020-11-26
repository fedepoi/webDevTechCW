// JavaScript Document


function requestSoc(){
var selectedTitle = document.getElementById("selectedTitle").value;
$(function() {
	
    var req = $.ajax({
        url: "http://api.lmiforall.org.uk/api/v1/soc/search?q="+ selectedTitle,
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
		console.log(data);
    })
});
}