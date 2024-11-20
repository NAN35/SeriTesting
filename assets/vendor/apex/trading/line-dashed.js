var options = {
	chart: {
		height: 114,
		type: 'line',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		width: [3],
		curve: 'smooth',
		dashArray: [5]
	},
	series: [{
			name: "Value",
			data: [21, 35, 21, 35, 21, 35, 21]
		}
	],
	markers: {
		size: 0,
		hover: {
			sizeOffset: 6
		}
	},
	colors: ['#2091d9'],
	xaxis: {
		categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	},
	yaxis: {
		show: false,
	},
	grid: {
		borderColor: '#ffffff',
	}
}

var chart = new ApexCharts(
	document.querySelector("#dashed-line-chart"),
	options
);

chart.render();	