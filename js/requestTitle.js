// JavaScript Document


function requestSoc(){
var selectedTitle = document.getElementById("selectedTitle").value;
	$("#resultTitle").html("");
$(function() {
	
    var req = $.ajax({
        url: "http://api.lmiforall.org.uk/api/v1/soc/search?q="+ selectedTitle,
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
		console.log(data);
		
	$.each( data, function( key, value ) {
        
          if ($(window).width() <= 768 ){
          
               $(".resTitleSelect").append('<option value="'+value.soc+'">'+value.title+'</option>')
            

       }else{$("#resultTitle").append('<button  id="resButton'+key+'" value= '+value.soc+' onclick="displayInfo(event)" >'+value.title+'</button> <br>').hide().slideDown("slow");}
	
        
  
		return (key !== 4);
});
	
    })
});
   /*$("#jobPageImg").css("margin-top", "5%");*/
}