// JavaScript Document
var soc = "";
function displayInfo(event){
 $(".descP").html("");
	$(".qualP").html("");
	$(".taskP").html("");
    $(".col-sm-2").css("height", "calc(100vh - 162px)");
    $(".col-sm-4").css("height", "calc(100vh - 162px)");
    
    
var info =  event.target.value;
console.log(info);
soc=info;	
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
	
	displayPieChart();
    	
}





function displayPieChart(){
	$(function() {
    var req = $.ajax({
        url: "http://api.lmiforall.org.uk/api/v1/hesa/courses/"+ soc,
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
     console.log(data);
	 console.log(data.years[3]);
		
     var dataItem =data.years[3];
	 var items = dataItem.courses.map(item => item.percentage);
     var label = dataItem.courses.map(item => item.name);
		
	 items = items.slice(0, 10);
     label = label.slice(0, 10);
		
	 console.log('***************************************************');
     console.log(items);
     console.log(label);
     console.log('***************************************************');	
		
	  var ctx = document.getElementById('pieChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'pie',

            data: {
                labels: label,
                datasets: [{
                    data: items,
                    backgroundColor: [
                        '#64CC98',
                        '#FFAF03',
                        '#3E805F',
                        '#5B7671',
                        '#00594C',
                        '#64CC98',
                        '#FFAF03',
                        '#3E805F',
                        '#5B7671',
                        '#00594C'
                    ],
                    hoverBackgroundColor: '#707070',


                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        top: 50,
                        bottom: 0
                    }
                },
                legend: {
                    position: 'right',
                    labels: {
                      usePointStyle: true,
					 
                    },

                },
				
                title: {
                    display: true,
                    text: 'People working in this field studied:'
                }

            }
        })
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
    });
});
	
}
