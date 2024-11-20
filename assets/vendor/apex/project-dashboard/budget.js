var options = {
	chart: {
		height: 212,
		type: 'donut',
	},
	labels: ['Total Budget', 'Amount Used', 'Remaining Amount'],
	series: [600, 450, 150],
	legend: {
		show: false,
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		width: 0,
	},
	colors: ['#2091d9', '#262b31', '#434950', '#63686f', '#868a90'],
	tooltip: {
		y: {
			formatter: function(val) {
				return  "$" + val
			}
		}
	},
}
var chart = new ApexCharts(
	document.querySelector("#budget"),
	options
);
chart.render();