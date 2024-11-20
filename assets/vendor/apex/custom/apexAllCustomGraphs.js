// Apex Over All Rating
var options = {
	chart: {
		height: 280,
		type: 'area',
		toolbar: {
			show: false, 
		},
	},
	dataLabels: {
		enabled: true
	},
	stroke: {
		curve: 'smooth',
		width: 3,
		dashArray: [0, 3],
	},
	grid: {
		show: false,
	},
	colors: ['#2091d9', '#f23f3f'],
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			inverseColors: false,
			opacityFrom: 0.5,
			opacityTo: 0,
			stops: [0, 90, 100]
		}
	},
	series: [{
		name: 'Ratings',
		data: [15, 20, 30, 40, 30, 45, 55]
	}, {
		name: 'Reviews',
		data: [5, 10, 10, 15, 10, 20, 15],
	}],
	legend: {
		show: true,
		position: 'bottom',
		horizontalAlign: 'center', 
		markers: {
			width: 10,
			height: 10,
			radius: 20,
		},
		itemMargin: {
			horizontal: 15,
			vertical: 10
		},
	},
	xaxis: {
		categories: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		]
	},
}
var chart = new ApexCharts(
	document.querySelector("#overAllRating"),
	options
);
chart.render();
























// Apex Orders
var options2 = {
	chart: {
		height: 280,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			columnWidth: '50%',
		},
	},
	dataLabels: {
		enabled: false
	},
	colors: ['#2091d9', '#f23f3f',],
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	series: [{
		name: 'Online',
		data: [33, 47, 35, 65, 72]
	}, {
		name: 'Offline',
		data: [28, 41, 27, 47, 58]
	}],
	legend: {
		show: true,
		position: 'bottom',
		horizontalAlign: 'center', 
		markers: {
			width: 10,
			height: 10,
			radius: 20,
		},
		itemMargin: {
			horizontal: 15,
			vertical: 12
		},
	},
	xaxis: {
		categories: [
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
		],
	},
	yaxis: {
		title: {
			text: '$ (thousands)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return "$" + val + " thousands"
			}
		}
	}
}
var chart = new ApexCharts(
	document.querySelector("#apexOrders"),
	options2
);
chart.render();






























// Apex Customers
var options3 = {
	chart: {
		height: 280,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: false,
		},
	},
	colors: ['#2091d9', '#76beec'],
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '40%',
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 0,
		colors: ["#ffffff"]
	},
	series: [{
		name: 'Male',
		data: [10, 20, 30, 40, 50, 60]
	},{
		name: 'Female',
		data: [-10, -20, -30, -40, -50, -60],
	}],
	grid: {
		show: false,
		xaxis: {
			showLines: false
		}
	},
	yaxis: {
		min: -60,
		max: 60,
		title: {
			text: 'Age',
		},
	},
	tooltip: {
		shared: false,
		x: {
			formatter: function(val) {
				return val
			}
		},
		y: {
			formatter: function(val) {
				return Math.abs(val) + "%"
			}
		}
	},
	legend: {
		show: true,
		position: 'bottom',
		horizontalAlign: 'center',
		markers: {
			width: 10,
			height: 10,
			radius: 20,
		},
		itemMargin: {
			horizontal: 15,
			vertical: 10
		},
	},
	xaxis: {
		categories: ['60+', '50-59', '40-49', '30-39', '20-29', '15-19'],
		labels: {
			formatter: function(val) {
				return Math.abs(Math.round(val)) + "%"
			}
		}
	},
}
var chart = new ApexCharts(
	document.querySelector("#customers"),
	options3
);
chart.render();






























// Apex Traffic
var options4 = {
	chart: {
		height: 325,
		type: 'radialBar',
		toolbar: {
			show: false, 
		},
	},
	colors: ['#2091d9', '#76beec', '#b3dbf5'],
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '.8rem',
				},
				value: {
					fontSize: '1.4rem',
				},
				total: {
					show: true,
					label: 'Traffic',
					formatter: function (w) {
						return 5000
					}
				}
			}
		}
	},
	fill: {
		type: 'solid',
	},
	series: [50, 60, 70],
	labels: ['Others', 'Direct', 'Referrals'],
}
var chart = new ApexCharts(
	document.querySelector("#traffic"),
	options4
);
chart.render();























// Apex Sales
var options5 = {
	chart: {
		height: 280,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '35%',
		}
	},
	dataLabels: {
		enabled: false
	},
	colors: ['#2091d9', '#444444'],
	fill: {
		gradient: {
			color: '#80bcdc',
			shadeIntensity: 1,
			inverseColors: false,
			opacityFrom: 0.8,
			opacityTo: 0,
			stops: [0, 90, 100]
		}
	},
	series: [{
		name: 'Orders',
		data: [1000, 2000, 3500, 5500, 2500, 3500, 4000]
	}],
	xaxis: {
		categories: [
			"Bakery",
			"Bevarages",
			"Beauty",
			"Clothing",
			"Electronics",
			"Fruits",
			"Groceries",
		],
	},
}
var chart = new ApexCharts(
	document.querySelector("#apexSales"),
	options5
);
chart.render();

























// Apex Deals
var options6 = {
	chart: {
		height: 280,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: false,
		},
	},
	colors: ['#2091d9', '#f23f3f'],
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '35%',
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 0,
		colors: ["#ffffff"],
	},
	series: [{
		name: 'Deals Open',
		data: [700, 1400, 2100, 2800, 3500, 2800, 2100, 1400, 700]
	},{
		name: 'Deals Claimed',
		data: [-550, -1100, -1500, -2100, -2700, -2100, -1500, -1100, -550],
	}],
	grid: {
		show: false,
		xaxis: {
			showLines: false
		}
	},
	tooltip: {
		shared: false,
		x: {
			formatter: function(val) {
				return val
			}
		},
		y: {
			formatter: function(val) {
				return Math.abs(val)
			}
		}
	},
	legend: {
		show: true,
		position: 'bottom',
		horizontalAlign: 'center',
		markers: {
			width: 10,
			height: 10,
			radius: 20,
		},
		itemMargin: {
			horizontal: 15,
			vertical: 10
		},
	},
	xaxis: {
		categories: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ],
		labels: {
			formatter: function(val) {
				return Math.abs(Math.round(val))
			}
		}
	},
}
var chart = new ApexCharts(
	document.querySelector("#deals"),
	options6
);
chart.render();

