// By Device
var options = {
	chart: {
		width: '100%',
		height: 185,
		type: 'pie',
	},
	series: [2000, 3000],
	labels: ["Returning", "New"],
	stroke: {
		width: 0,
	},
	colors: ['#2698e2', '#53ade8', '#434950', '#63686f', '#868a90'],
}
var chart = new ApexCharts(
	document.querySelector("#by-customer-type"),
	options
);
chart.render();