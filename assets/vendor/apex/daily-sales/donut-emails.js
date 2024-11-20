var options = {
	chart: {
		height: 212,
		type: 'donut',
	},
	plotOptions: {
		pie: {
			donut: {
				labels: {
					show: false,
				}
			}
		}
	},
	legend: {
		show: false,
	},
	labels: ['Sent', 'Opened'],
	series: [70, 30],
	stroke: {
		width: 0,
	},
	colors: ['#2091d9', '#27b963'],
}
var chart = new ApexCharts(
	document.querySelector("#donut-emails"),
	options
);
chart.render();