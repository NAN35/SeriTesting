var options = {
	chart: {
		height: 200,
		type: 'area',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'smooth',
		width: 3
	},
	series: [{
		name: 'Gold',
		data: [3100, 4000, 2800, 2100, 4500, 3300, 2200]
	}],
	grid: {
		row: {
			colors: ['#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5,
		},
	},
	colors: ['#f23f3f'],
	xaxis: {
		labels: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		categories: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		]
	},
	yaxis: {
		tickAmount: 2,
		labels: {
			show: false,
		},
	},
	markers: {
		size: 0,
		opacity: 0.2,
		colors: ["#2091d9"],
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
	document.querySelector("#trading-area-spline"),
	options
);

chart.render();
































var options = {
	chart: {
		height: 200,
		type: 'area',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'smooth',
		width: 3
	},
	series: [{
		name: 'Silver',
		data: [3100, 4000, 3300, 2200, 2800, 2100, 4500]
	}],
	grid: {
		row: {
			colors: ['#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5,
		},
	},
	colors: ['#2091d9'],
	xaxis: {
		labels: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		categories: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		]
	},
	yaxis: {
		tickAmount: 2,
		labels: {
			show: false,
		},
	},
	markers: {
		size: 0,
		opacity: 0.2,
		colors: ["#2091d9"],
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
	document.querySelector("#trading-area-spline2"),
	options
);

chart.render();












var options = {
	chart: {
		height: 200,
		type: 'area',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'smooth',
		width: 3
	},
	series: [{
		name: 'Platinum',
		data: [2100, 4500, 3300, 2200, 3100, 4000, 2800]
	}],
	grid: {
		row: {
			colors: ['#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5,
		},
	},
	colors: ['#2091d9'],
	xaxis: {
		labels: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		categories: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		]
	},
	yaxis: {
		tickAmount: 2,
		labels: {
			show: false,
		},
	},
	markers: {
		size: 0,
		opacity: 0.2,
		colors: ["#2091d9"],
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
	document.querySelector("#trading-area-spline3"),
	options
);

chart.render();








// var options = {
// 	chart: {
// 		height: 100,
// 		type: 'area',
// 		toolbar: {
// 			show: false,
// 		},
//
// 	},
// 	dataLabels: {
// 		enabled: false,
// 	},
// 	stroke: {
// 		curve: 'smooth',
// 		width: 3
// 	},
// 	series: [{
// 		name: 'Palladium',
// 		data: [1700, 3800, 2900, 1800, 2700, 3500, 2800]
// 	}],
// 	grid: {
// 		row: {
// 			colors: ['#ffffff'], // takes an array which will be repeated on columns
// 			opacity: 0.5,
// 		},
// 	},
// 	colors: ['#2091d9'],
// 	xaxis: {
// 		labels: {
// 			show: false,
// 		},
// 		axisBorder: {
// 			show: false,
// 		},
// 		categories: [
// 			"Sunday",
// 			"Monday",
// 			"Tuesday",
// 			"Wednesday",
// 			"Thursday",
// 			"Friday",
// 			"Saturday",
// 		]
// 	},
// 	yaxis: {
// 		tickAmount: 2,
// 	},
// 	markers: {
// 		size: 0,
// 		opacity: 0.2,
// 		colors: ["#2091d9"],
// 		strokeColor: "#fff",
// 		strokeWidth: 2,
// 		hover: {
// 			size: 7,
// 		}
// 	},
// 	tooltip: {
// 		x: {
// 			format: 'dd/MM/yy'
// 		},
// 	}
// }

// var chart = new ApexCharts(
// 	document.querySelector("#trading-area-spline4"),
// 	options
// );

// chart.render();

