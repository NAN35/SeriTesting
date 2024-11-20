var options = {
  chart: {
    height: 210,
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
    name: 'Completed Projects',
    data: [44, 55, 41, 67, 22, 43]
  },{
    name: 'On Going Projects',
    data: [25, 32, 30, 43, 13, 35]
  },{
    name: 'Upcoming Projects',
    data: [18, 21, 24, 29, 21, 22]
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
  document.querySelector("#projects-status"),
  options
);
chart.render();


