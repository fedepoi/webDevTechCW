// JavaScript Document

function displayInfo(event){
 $(".descP").html("");
	$(".qualP").html("");
	$(".taskP").html("");
    $(".col-sm-2").css("height", "calc(100vh - 162px)");
    $(".col-sm-4").css("height", "calc(100vh - 162px)");
    
    
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
		$(".col-sm-4").css("border-right"," 1px solid #707070");
        $(".2ndCenter div").css("padding", "15px 15px 15px 15px");
        $(".col-sm-2").css("height", "auto");
        $(".col-sm-4").css("height", "auto");
        
		$("<h3>Description:</h3>"+"<p>"+data.description+"</p>").appendTo($(".descP")).hide().slideDown("slow");
		$("<h3>Qualification:</h3>"+"<p>"+data.qualifications+"</p>").appendTo($(".qualP")).hide().slideDown("slow");
		$("<h3>Tasks:</h3>"+"<p>"+data.tasks+"</p>").appendTo($(".taskP")).hide().slideDown("slow");
		
    })
});
    

$(function() {
	
    var req = $.ajax({
        url: "http://api.lmiforall.org.uk/api/v1/soc/code/"+ info,
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
		
		
    })
});
    

	
	
}
