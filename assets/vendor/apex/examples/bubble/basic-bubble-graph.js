function generateData(baseval, count, yrange) {
	var i = 0;
	var series = [];
	while (i < count) {
        var x = getRandomSecureInt(1, 15);
        var y = getRandomSecureInt(yrange.min, yrange.max);
        var z = getRandomSecureInt(5, 55);
        
        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var options = {
	chart: {
		height: 220,
		type: 'bubble',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		name: 'ETH',
		data: generateData(new Date('25 May 2019 GMT').getTime(), 20, {
			min: 10,
			max: 60
		})
	},{
		name: 'BTC',
		data: generateData(new Date('25 May 2019 GMT').getTime(), 20, {
			min: 10,
			max: 60
		})
	}],
	fill: {
		opacity: 0.9
	},
	xaxis: {
		tickAmount: 10,
		type: 'category',
	},
	yaxis: {
		max: 50,
		tickAmount: 5,
	},
	colors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
}

var chart = new ApexCharts(
	document.querySelector("#basic-bubble-graph"),
	options
);

chart.render();


