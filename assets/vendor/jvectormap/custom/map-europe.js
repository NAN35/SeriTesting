// Europe
$(function(){
	$('#mapEurope').vectorMap({
		map: 'europe_mill',
		zoomOnScroll: false,
		series: {
			regions: [{
				values: gdpData,
				scale: ['#2091d9'],
				normalizeFunction: 'polynomial'
			}]
		},
		backgroundColor: 'transparent',
	});
});