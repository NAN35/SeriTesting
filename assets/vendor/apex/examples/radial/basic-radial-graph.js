var options = {
	chart: {
		height: 300,
		type: 'radialBar',
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'Overall',
					formatter: function (w) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return '2500'
					}
				}
			}
		}
	},
	series: [90, 80, 70, 60],
	labels: ['Overall', 'Grade A', 'Grade B', 'Grade C'],
	colors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
}

var chart = new ApexCharts(
	document.querySelector("#basic-radial-graph"),
	options
);
chart.render();