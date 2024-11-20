var options = {
	chart: {
		height: 320,
		type: 'line',
		stacked: false,
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		name: 'Graduates',
		type: 'column',
		data: [4, 2, 2, 5, 6, 8, 8, 7]
	},{
		name: 'Undergraduates',
		type: 'column',
		data: [2, 3, 1, 4, 5, 9, 5, 8]
	},{
		name: 'Revenue',
		type: 'line',
		data: [20, 10, 15, 36, 44, 45, 50, 58]
	}],
	stroke: {
		width: [1, 1, 3]
	},
	title: {
		text: 'Overall branches income in millon dollors form graduates and undergraduates 2010 to 2018.',
		align: 'center',
	},
	colors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
	xaxis: {
		categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
	},
	yaxis: [{
		axisTicks: {
			show: true,
		},
		axisBorder: {
			show: true,
			color: '#2091d9'
		},
		labels: {
			style: {
				color: '#2091d9',
			}
		},
		title: {
			text: "Graduates (in thousands)",
			style: {
				color: '#2091d9',
			}
		},
		tooltip: {
			enabled: true
		}
	},{
			seriesName: 'Graduates',
			opposite: true,
			axisTicks: {
				show: true,
			},
			axisBorder: {
				show: true,
				color: '#88cdfb'
			},
			labels: {
				style: {
					color: '#88cdfb',
				}
			},
			title: {
				text: "Undergraduates (in thousand)",
				style: {
					color: '#88cdfb',
				}
			},
		},{
			seriesName: 'Revenue',
			opposite: true,
			axisTicks: {
				show: true,
			},
			axisBorder: {
				show: true,
				color: '#f23f3f'
			},
			labels: {
				style: {
					color: '#f23f3f',
				},
			},
			title: {
				text: "Revenue (in crores)",
				style: {
					color: '#f23f3f',
				}
			}
		},
	],
	legend: {
		horizontalAlign: 'center',
		offsetY: 10
	}
}

var chart = new ApexCharts(
	document.querySelector("#multiple-yaxis"),
	options
);
chart.render();