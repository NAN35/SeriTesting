var options = {
  series: [{
  name: 'Direct',
  type: 'area',
  data: [440, 505, 415, 670]
}, {
  name: 'Online',
  type: 'line',
  data: [25, 42, 10, 30]
}],
  chart: {
  height: 268,
  type: 'line',
  zoom: {
    enabled: false
  },
  toolbar: {
    show: false
  },
},
stroke: {
  width: [0, 4]
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['Q1', 'Q2', 'Q3', 'Q4'],
colors: ['#2091d9', '#f23f3f', '#80c3ee', '#f23f3f'],
xaxis: {
  type: 'day'
},
yaxis: [{
  title: {
    text: 'Direct',
  },

}, {
  opposite: true,
  title: {
    text: 'Online'
  }
}]
};

var chart = new ApexCharts(document.querySelector("#mixed-line-column"), options);
chart.render();