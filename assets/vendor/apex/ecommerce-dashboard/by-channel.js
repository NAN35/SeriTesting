var options = {
	chart: {
		height: 228,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
		}
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		data: [2000, 3000, 4000, 5000, 6000]
	}],
	xaxis: {
		categories: ["Organic", "Search", "TV Ads", "Social", "Video"],
	},
	colors: ['#2698e2', '#53ade8', '#434950', '#63686f', '#868a90'],
	tooltip: {
		y: {
			formatter: function(val) {
				return val + ' Visits'
			}
		}
	},
}

var chart = new ApexCharts(
	document.querySelector("#by-channel"),
	options
);

chart.render();