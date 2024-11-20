var options = {
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '24px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Source',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return '2500'
          }
        }
      }
    }
  },
  series: [90, 80, 70],
  labels: ['Source A', 'Source B', 'Source C'],
  colors: ['#2091d9', '#53ade8', '#80c3ee', '#f23f3f'],
}

var chart = new ApexCharts(
  document.querySelector("#radial-top-source"),
  options
);
chart.render();