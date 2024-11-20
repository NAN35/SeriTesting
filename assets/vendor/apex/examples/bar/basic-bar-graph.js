var options = {
	chart: {
		height: 300,
		type: 'bar',
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
	series: [{
		data: [400, 430, 448, 470, 540, 1200, 1380]
	}],
	xaxis: {
		categories: ['Canada', 'Netherlands', 'Italy', 'France', 'Japan', 'USA', 'India'],
	},
	theme: {
		monochrome: {
			enabled: true,
			colors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
			shadeIntensity: 0.1
		},
	},
}

var chart = new ApexCharts(
	document.querySelector("#basic-bar-graph"),
	options
);

chart.render();