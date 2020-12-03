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
		
		$.each( data, function( key, value ) {
	$(".uniListUl").append('<li class="uniListLi"> <a href="'+value.web_pages + '" >'+ value.name +'</a> </li>');      	
});
        var liHeight = $(".uniListDiv" ).find( "li" ).outerHeight(true);
    $(".uniListDiv" ).find( "ul" ).height(liHeight*12);   
        $(".uniListUl").css("overflow","hidden");   	
        
        $(".uniListDiv").append(' <a class="showMoreBtn">Show more</a>'); 
        toggleInit();
        searchFilterInit();
          $(".uniListUl").listnav();
	
    })
});

    
});
	
    
function toggleInit(){
  
    var toggle=0;
    
    $(".showMoreBtn").click( function(){
        if(toggle==0){
       $(".uniListDiv" ).find( "ul" ).css("height","100%").slideDown("slow");
        
         $(".showMoreBtn").text("show less");
        toggle=1;
    } else {
        var liHeight = $(".uniListDiv" ).find( "li" ).outerHeight(true);
        $(".uniListDiv" ).find( "ul" ).animate({ 'height': (liHeight * 12) + 'px' });
         $(".showMoreBtn").text("show more");
        toggle=0;
    }
        
    });
       
}

function searchFilterInit(){
    $("#uniSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".uniListLi").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
}


