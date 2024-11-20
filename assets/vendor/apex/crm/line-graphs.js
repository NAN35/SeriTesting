var options = {
  series: [{
    name: "Orders",
    data: [10, 41, 35, 51, 49]
  }],
    chart: {
      height: 237,
      type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: [3, 3, 3],
    dashArray: [0, 8, 5]
  },
  colors: ['#2698e2', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
  grid: {
    row: {
      colors: ['#ffffff', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#line-chart-orders"), options);
chart.render();









var options = {
  series: [{
    name: "Reviews",
    data: [10, 41, 35, 51, 27]
  }],
    chart: {
    height: 237,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: [3, 3, 3],
    dashArray: [0, 8, 5]
  },
  colors: ['#f23f3f', '#53ade8', '#80c3ee', '#63686f', '#868a90'],
  grid: {
    row: {
      colors: ['#ffffff', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#line-chart-reviews"), options);
chart.render();








