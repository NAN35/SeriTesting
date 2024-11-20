var options = {
	series: [{
		name: 'Sales',
	data: [400, 430, 448, 470, 540, 580, 690, 1100, 1380]
}],
	chart: {
	type: 'bar',
	height: 245,
	toolbar: {
		show: false,
	},
},
plotOptions: {
	bar: {
		horizontal: true,
	}
},
dataLabels: {
	enabled: false
},
colors: ['#2091d9', '#27b963'],
xaxis: {
	categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
		'United States', 'Germany'
	],
}
};

var chart = new ApexCharts(document.querySelector("#bar-sales"), options);
chart.render();