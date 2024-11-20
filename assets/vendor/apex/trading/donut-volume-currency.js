var options = {
	chart: {
		type: 'donut',
		height: 202,
	},
	legend: {
		position: "bottom",
		offsetY: 10,
	},
	dataLabels: {
		enabled: false
  },
	labels: ['Buy', 'Sell', 'Keep'],
	series: [20, 70, 30],
	stroke: {
		width: 0,
	},
	colors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
}
var chart = new ApexCharts(
	document.querySelector("#donut-volume-currency"),
	options
);
chart.render();