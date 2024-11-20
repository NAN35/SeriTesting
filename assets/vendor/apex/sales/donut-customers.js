var options = {
  chart: {
    height: 188,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: false,
        }
      }
    }
  },
  legend: {
    show: false,
  },
  labels: ['New', 'Returned'],
  series: [450, 900],
  stroke: {
    width: 10,
  },
  colors: ['#2091d9', '#27b963'],
}
var chart = new ApexCharts(
  document.querySelector("#donut-customers"),
  options
);
chart.render();