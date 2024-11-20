$(function () {

	var data = [
		{ label: "Series 0", data: 1, color: '#2698e2' },
		{ label: "Series 1", data: 3, color: '#53ade8' },
		{ label: "Series 2", data: 9, color: '#80c3ee' },
		{ label: "Series 3", data: 20, color: '#63686f' }
	];	

	var plotObj = $.plot($("#flotDonutChart"), data, {
		series: {
			pie: {
				show: true,
				innerRadius: 0.4,
				label: {
					show: true,
					radius: 3/4,
					// formatter: labelFormatter,
					background: {
						opacity: 0.8,
						color: '#ffffff'
					}
				}
			}
		},
		grid: {
			hoverable: true
		},
		tooltip: {
			show: true,
			content: "%p.0%, %s, n=%n",
			shifts: {
				x: 20,
				y: 0
			},
			defaultTheme: false
		}
	});
	
});