// JavaScript Document

$( document ).ready(function() {

$(function() {
	
    var req = $.ajax({
        url: "http://universities.hipolabs.com/search?country=United%20Kingdom",
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
		console.log(data);
		
		$(".uniListDiv").append('<ul class="uniListUl"></ul>');
		
		
		
    })
});
	
	
});
	
    

