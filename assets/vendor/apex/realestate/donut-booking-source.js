var options = {
  chart: {
    height: 270,
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
  labels: ['Agoda', 'Expedia', 'Booking', 'Direct'],
  series: [985, 670, 540, 435],
  stroke: {
    width: 0,
  },
  colors: ['#f23f3f', '#2091d9', '#ffa63e', '#2d333c', '#868a90'],
}
var chart = new ApexCharts(
  document.querySelector("#booking-source"),
  options
);
chart.render();