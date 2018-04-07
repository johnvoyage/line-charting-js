const createChart = (chartName, xAxisLabel, yAxisLabel) => {
  console.log('here')
  myChart = document.getElementById('my-chart').getContext('2d');
  lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    // X axis "labels":
    // labels: ['1/1 - 1/7','1/8-1/14', '1/15-1/21', '1/22-1/28', '1/29-2/24'],
    labels: [],
    datasets: [{
      // Name of line(s)
      label: chartName,
      // Y axis datapoint
      // data: [100000, 105000, 99000, 92000, 101000],
      data: [],
    }],
  },
  options: {
    color: red
    // legend: {
    //   // display: false,
    // },
    // scales: {
    //   xAxes: [{
    //     // display: false,
    //
    //     // ticks: {
    //     //     beginAtZero: true,
    //     //     min: -12,
    //     //     max: -1,
    //     //     stepSize: 1,
    //     }
    //   }],
    //   yAxes: [{
    //     ticks: {
    //       beginAtZero: true,
    //       fontColor: 'black',
    //       fontFamily: 'Arial',
    //       fontSize: 30,
    //
    //     },
    //     position: 'right',
    //   }]
    // },
    // responsive: false,
    // maintainAspectRatio: false
  }
});
}
