$( document ).ready(function() {

	$("#direct").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 78,
		fontColor: '#000000',
		foregroundColor: '#2091d9',
		backgroundColor: '#e1e4f4',
		multiPercentage: 1,
		percentages: [10, 20, 30],
	});
	$("#referrals").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 43,
		fontColor: '#000000',
		foregroundColor: '#eb5052',
		backgroundColor: '#e1e4f4',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});
	$("#search-engines").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 29,
		fontColor: '#000000',
		foregroundColor: '#444444',
		backgroundColor: '#e1e4f4',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});
	

	$("#overallSales").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 92,
		textStyle: 'font-size: 12px;',
		fontColor: '#000000',
		foregroundColor: '#2091d9',
		backgroundColor: '#e1e4f4',
		multiPercentage: 1,
		percentages: [10, 20, 30],
	});
	$("#overallExpenses").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 78,
		fontColor: '#000000',
		foregroundColor: '#2091d9',
		backgroundColor: '#e1e4f4',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});
	$("#overallIncome").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 80,
		fontColor: '#000000',
		foregroundColor: '#f23f3f',
		backgroundColor: '#e1e4f4',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});





	// With Icons
	$("#overallProgress").circliful({
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 78,
		fontColor: '#000000',
		foregroundColor: '#2091d9',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea63',
		iconColor: '#2091d9',
		iconPosition: 'middle',
		text: 'Project',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,		
	});


	$("#projectPlanning").circliful({
		animationStep: 5,
		foregroundBorderWidth: 18,
		backgroundBorderWidth: 10,
		percent: 90,
		fontColor: '#000000',
		foregroundColor: '#424850',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea1b',
		iconColor: '#424850',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,		
	});
	

	$("#projectDesign").circliful({
		animationStep: 5,
		foregroundBorderWidth: 18,
		backgroundBorderWidth: 10,
		percent: 90,
		fontColor: '#000000',
		foregroundColor: '#2091d9',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea40',
		iconColor: '#2091d9',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,
	});


	$("#projectDevelopment").circliful({
		animationStep: 5,
		foregroundBorderWidth: 18,
		backgroundBorderWidth: 10,
		percent: 80,
		fontColor: '#000000',
		foregroundColor: '#f23f3f',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea01',
		iconColor: '#f23f3f',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,
	});


	$("#projectTesting").circliful({
		animationStep: 5,
		foregroundBorderWidth: 18,
		backgroundBorderWidth: 10,
		percent: 3,
		fontColor: '#000000',
		foregroundColor: '#8796af',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea71',
		iconColor: '#8796af',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,
	});

});

