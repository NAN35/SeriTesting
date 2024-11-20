var options = {
  chart: {
    height: 267,
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
    curve: 'smooth',
    width: 5,
  },
  series: [{
    name: "Visitors",
    data: [10, 41, 35, 51, 49]
  }],
  grid: {
    row: {
      colors: ['transparent', '#ffffff'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir'],
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#2698e2',
      shadeIntensity: 0.1
    },
  },
  fill: {
    type: 'solid',
  },
  markers: {
    size: 0,
    opacity: 0.2,
    colors: ["#2698e2"],
    strokeColor: "#fff",
    strokeWidth: 2,
    hover: {
      size: 7,
    }
  },
}

var chart = new ApexCharts(
  document.querySelector("#line-customers"),
  options
);

chart.render();









