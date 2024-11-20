var options = {
  series: [{
  name: "Male",
  data: [
  [44, 25], [10, 14], [19, 11], [32, 3], [27, 12], [17, 12], [22, 15], [9, 4], [14, 39], [22, 10], [8, 13], [31, 29], [15, 1], [33, 25], [16, 10]]
},{
  name: "Female",
  data: [
  [33, 22], [15, 29], [4, 32], [14, 29], [2, 11], [8, 13], [12, 29], [15, 12], [3, 35], [16, 10], [34, 10], [14, 19], [11, 2], [23, 27], [23, 37]]
}],
 chart: {
  height: 170,
  type: 'scatter',
  zoom: {
    enabled: true,
    type: 'xy'
  },
  toolbar: {
			show: false,
		},
},
dataLabels: {
	enabled: false
},
xaxis: {
  tickAmount: 10,
  labels: {
    show: false,
  }
},
yaxis: {
	show: false,
},
legend: {
	show: false,
},
grid: {
	show: false,
},
colors: ['#2091d9', '#27b963'],
};

var chart = new ApexCharts(document.querySelector("#scatter-visitors"), options);
chart.render();