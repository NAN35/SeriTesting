// Morris Days
var day_data = [
	{"period": "2016-10-01", "licensed": 3213, "Bluemoon": 887},
	{"period": "2016-09-30", "licensed": 3321, "Bluemoon": 776},
	{"period": "2016-09-29", "licensed": 3671, "Bluemoon": 884},
	{"period": "2016-09-20", "licensed": 3176, "Bluemoon": 448},
	{"period": "2016-09-19", "licensed": 3376, "Bluemoon": 565},
	{"period": "2016-09-18", "licensed": 3976, "Bluemoon": 627},
	{"period": "2016-09-17", "licensed": 2239, "Bluemoon": 660},
	{"period": "2016-09-16", "licensed": 3871, "Bluemoon": 676},
	{"period": "2016-09-15", "licensed": 3659, "Bluemoon": 656},
	{"period": "2016-09-10", "licensed": 3380, "Bluemoon": 663}
];
Morris.Line({
	element: 'dayData',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'Bluemoon'],
	labels: ['Licensed', 'Bluemoon'],
	resize: true,
	hideHover: "auto",
	gridLineColor: "#e1e5f1",
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
	lineColors:['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
});