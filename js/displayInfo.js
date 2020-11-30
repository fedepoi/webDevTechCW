// JavaScript Document
var soc = "";
function displayInfo(event){
    $(".descP").html("");
	$(".qualP").html("");
	$(".taskP").html("");
	
	
    $(".col-sm-2").css("height", "calc(100vh - 162px)");
    $(".col-sm-4").css("height", "calc(100vh - 162px)");
	
/*	
	var canPie = document.getElementById("pieChart");
   var canLine = document.getElementById("lineChart");
	var canBar = document.getElementById("barChart");
	
	var conPie = canPie.getContext("2d");
var conLine = canLine.getContext("2d");
	var conBar = canBar.getContext("2d");
	
	conPie.clearRect(0, 0, canvas.width, canvas.height);
    conLine.clearRect(0, 0, canvas.width, canvas.height);
	conBar.clearRect(0, 0, canvas.width, canvas.height);
	*/
	
    
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
	displayLineChart()
    	
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


function displayLineChart(){
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
            label: 'Weekly estimate pay',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor: '#FFAF03',
            data: items
        }]
    },
		 options: {
               layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
               
                }

            
				
               
            
        })
		
				
		
    });
});
	
}
