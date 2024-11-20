var options = {
  chart: {
    height: 240,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: true
  },
  series: [{
    name: 'Product A',
    data: [44, 55, 41, 67, 22, 43]
  },{
    name: 'Product B',
    data: [13, 23, 20, 8, 13, 27]
  },{
    name: 'Product C',
    data: [11, 17, 15, 15, 21, 14]
  }],
  xaxis: {
    type: 'day',
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  legend: {
    position: 'top',
    offsetY: 0
  },
  fill: {
    opacity: 1
  },
  colors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
}
var chart = new ApexCharts(
  document.querySelector("#basic-column-stack-graph"),
  options
);
chart.render();


