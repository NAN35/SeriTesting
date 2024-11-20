var options = {
	chart: {
		height: 320,
		type: 'radialBar',
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '14px',
				},
				value: {
					fontSize: '20px',
				},
				total: {
					show: true,
					label: 'Tasks',
					formatter: function (w) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return '45'
					}
				}
			}
		}
	},
	series: [90, 80, 70],
	labels: ['Completed', 'Ongoing', 'New'],
	colors: ['#2698e2', '#53ade8', '#f23f3f'],
}

var chart = new ApexCharts(
	document.querySelector("#tasks"),
	options
);
chart.render();