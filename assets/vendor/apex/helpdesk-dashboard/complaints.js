var options = {
	chart: {
		height: 135,
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
		name: 'Complaints',
		data: [150, 100, 120, 410, 550, 700]
	}],
	grid: {
		row: {
			colors: ['#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
		padding: {
			left: 10,
			right: 10,
		},
	},
	xaxis: {
		categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	},
	yaxis: {
		labels: {
			show: false,
		}
	},
	theme: {
		monochrome: {
			enabled: true,
			color: '#f23f3f',
			shadeIntensity: 0.1
		},
	},
	markers: {
		size: 0,
		opacity: 0.2,
		colors: ["#f23f3f"],
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
	document.querySelector("#complaints"),
	options
);

chart.render();
