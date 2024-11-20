var options = {
	chart: {
		height: 170,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	series: [{
		name: 'Claimed',
		data: [44, 55, 57, 56]
	}, {
		name: 'Expired',
		data: [76, 85, 101, 98]
	}],
	xaxis: {
		categories: ['Q1', 'Q2', 'Q3', 'Q4'],
	},
	fill: {
		opacity: 1
	},
	yaxis: {
		show: false,
	},
	legend: {
		show: false,
	},
	grid: {
		show: false,
	},
	colors: ['#2091d9', '#27b963'],
}
var chart = new ApexCharts(
	document.querySelector("#column-deals"),
	options
);
chart.render();