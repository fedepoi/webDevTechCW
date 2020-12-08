// JavaScript Document
var soc = "";
function displayInfo(event){
	
    $(".descP").html("");
	$(".qualP").html("");
	$(".taskP").html("");
	
	
    $(".col-sm-2").css("height", "calc(100vh - 162px)");
    $(".col-sm-4").css("height", "calc(100vh - 162px)");
	
    $(".pieChartDiv").html("");
    $(".lineChartDiv").html("");
    $(".barChartDiv").html("");


    
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
		$(".col-sm-3").css("border-right"," 1px solid #707070");
        $(".col-sm-12").css("border-bottom"," 1px solid #dea912");
        $(".2ndCenter div").css("padding", "15px 15px 15px 15px");
        $(".col-sm-2").css("height", "auto");
        $(".col-sm-3").css("height", "auto");
        
       
        
		$("<h3>Description:</h3>"+"<p>"+data.description+"</p>").appendTo($(".descP")).hide().slideDown("slow");
		$("<h3>Qualification:</h3>"+"<p>"+data.qualifications+"</p>").appendTo($(".qualP")).hide().slideDown("slow");
		$("<h3>Tasks:</h3>"+"<p>"+data.tasks+"</p>").appendTo($(".taskP")).hide().slideDown("slow");
		
    })
});
	
	displayPieChart();
	displayLineChart();
	displayBarChart();
    checkScreenSize();
    	
}


function displayPieChart(){
	$(".pieChartDiv").append(' <canvas id="pieChart"></canvas>');
	
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
                        '#dea912',
                        '#3E805F',
                        '#5B7671',
                        '#00594C',
                        '#64CC98',
                        '#dea912',
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
					  fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 12,
                    },

                },
				
                title: {
                    display: true,
                    text: 'People working in this field studied:',
					fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 16,
                }

            }
        })
		
				
		
    });
});
	
}

function displayLineChart(){
    $(".lineChartDiv").append(' <canvas id="lineChart"></canvas>');
	$(function() {
    var req = $.ajax({
        url: "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc="+ soc,
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
     console.log(data);
	 console.log(data.series);
		
     var dataItem =data;
	 var items = dataItem.series.map(item => item.estpay);
     var label = dataItem.series.map(item => item.year);	
	 items = items.slice(0, 10);
     label = label.slice(0, 10);
	 console.log('***************************************************');
     console.log(items);
     console.log(label);
     console.log('***************************************************');	
		
	  var ctx = document.getElementById('lineChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',

            data: {labels : label ,
				    datasets: [{
            label: 'pay £',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor: '#dea912',
		    borderWidth: 3 , 
			hoverBackgroundColor: '#707070',
			pointHoverBorderWidth: 5,
						
			fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 16,
						
            data: items
        }]
    },
		 options: {
               layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 50,
                        bottom: 0
                    }
                },
			     legend: {
                     position: 'left',
                    labels: {
                      usePointStyle: true,
						fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 12,					 
                    }

                },
             title: {
                    display: true,
                    text: 'Weekly estimate pay',
					fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 16,
                }
               
                }
        })
		
				
		
    });
});
	
}


function displayBarChart(){
    $(".barChartDiv").append(' <canvas id="barChart"></canvas>');
	$(function() {
    var req = $.ajax({
        url: "http://api.lmiforall.org.uk/api/v1/ashe/estimateHours?soc="+ soc,
        type: "get",
        dataType: "json"
    });
    req.done(function(data) {
     console.log(data);
	 console.log(data.series);
		
     var dataItem =data;
	 var items = dataItem.series.map(item => item.hours);
     var label = dataItem.series.map(item => item.year);	
	 items = items.slice(0, 10);
     label = label.slice(0, 10);
	 console.log('***************************************************');
     console.log(items);
     console.log(label);
     console.log('***************************************************');	
		
	  var ctx = document.getElementById('barChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',

            data: {labels : label ,
				   
				    datasets: [{
            label: 'hours h',
            backgroundColor: '#00594C',
            borderColor: '#00594C',
		    borderWidth: 3 , 
			hoverBackgroundColor: '#707070',
			pointHoverBorderWidth: 5,
			fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 16,
				
            data: items
        }]
    },
		 options: {
               layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 50,
                        bottom: 0
                    }
                },
			     legend: {
                     position: 'left',
                    labels: {
                      usePointStyle: true,
						fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 12,
					 
                    }

                },
             title: {
                    display: true,
                    text: 'weekly avarage hours',
					fontColor: 'black',
					  fontFamily: 'lato',
					  fontSize: 16,
                }
               
                }
        })
		
				
		
    });
});
	
	
	
}


function checkScreenSize(){
     if ($(window).width() <= 768 ){
        
          $(".goTopJob").css("display","block");
          $(".jobPExpand").css("display","block");
         $(".lineChartDiv").hide();
         $(".barChartDiv").hide();
         $(".pieChartDiv").hide();
          $(".arrowDown").hide();
            $(".arrowRight").show();
         
         /* $(".chart").hide();*/
          /**/
         $(".jobPExpand").click(function(){
            $(".arrowDown").hide();
            $(".arrowRight").show();
             $(this).find(".arrowDown").show();
             $(this).find(".arrowRight").hide();
            
           
             $(".chart").slideUp("slow");
             $(this).next(".chart").slideDown("slow");
             
             
         });

         

       }
           
       
}
