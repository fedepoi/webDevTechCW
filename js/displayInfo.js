// JavaScript Document

function displayInfo(event){
var info =  event.target.value;
console.log(info);
	
$(function() {
	
    var req = $.ajax({
        url: "http://api.lmiforall.org.uk/api/v1/soc/code/"+ info,
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
		console.log(data);
		/*need to print all the info from here*/
		
		$("<p>"+data.description+"</p>").appendTo($(".descP")).hide().slideDown("slow");
		$("<p>"+data.qualifications+"</p>").appendTo($(".qualP")).hide().slideDown("slow");
		$("<p>"+data.tasks+"</p>").appendTo($(".taskP")).hide().slideDown("slow");
		
    })
});	
	
	
}
