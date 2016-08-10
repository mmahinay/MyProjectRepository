$(function(){
	
	topWidgetCall();


	function topWidgetCall(){

		var url = 'json/topWidgetData0.json';


		var objs = [],
		title = [],
		prev_value = [],
		prev_date = [],
		current_value = [],
		i = 0;
		j = 0,
		l = 0,
		m = 0;


		$.getJSON(url, function(data) {

				$.each(data, function() {

					objs = title.length;
					title[i++] = this.title; 
		    		prev_value[j++]= this.prev_value;
		    		prev_date[l++] = " last " + this.prev_date;
		    		current_value[m++]= this.current_value;

				}); //each

				for(var x=0; x<objs+1; x++){
					$(".widget-title"+x).html(title[x]);


				} //for

		}); //getJSON


		setTimeout(topWidgetCall, 3000);

	} // topWidgetCall


	/***highchart**/
	$('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    }); //end of highcharts


});