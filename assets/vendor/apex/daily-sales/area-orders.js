var options = {
	chart: {
		height: 170,
		type: 'area',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 3
	},
	series: [{
		name: 'Online',
		data: [600, 4000, 2800, 2100, 4200, 1090]
	}, {
		name: 'Direct',
		data: [1100, 3200, 4500, 3200, 3400, 2100]
	}],
	legend: {
		show: false,
	},
	grid: {
		show: false,
	},
	xaxis: {
		type: 'day',
		categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	},
	yaxis: {
		show: false,
	},
	colors: ['#2091d9', '#27b963'],
	markers: {
		size: 0,
		opacity: 0.2,
		colors: ['#2091d9', '#27b963'],
		strokeColor: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7,
		}
	},
	tooltip: {
		x: {
			format: 'dd/MM/yy'
		},
	}
}

var chart = new ApexCharts(
	document.querySelector("#area-orders"),
	options
);

chart.render();
