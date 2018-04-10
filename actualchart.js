const createChart = () => {
  myChart = document.getElementById('my-chart').getContext('2d');
  lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: labels,
    datasets:
    [
      {
        data: googleJS,
        // label: 'JavaScript',
        // borderColor: 'green',
        // fill: false,
        // borderDash: [5,10,5],
        // pointRadius: 1,

      },
      {
        data: googleP,
        // label: 'Python',
        // borderColor: 'blue',
        // fill: false,
        // pointRadius: 1,
        // steppedLine: true,

      },
      {
        data: googleR,
        // label: 'Ruby',
        // borderColor: 'red',
        // fill: false,
        // lineTension: 5,
        // pointRadius: 1,
      }
    ],
  },
  // options: {
  //   scales: {
  //     yAxes: [{scaleLabel: {display: true, labelString: 'Searches as % of Peak'}}],
  //     xAxes: [{scaleLabel: {display: true, labelString: 'Date'}}],
  //   },
  //   title: {
  //     display: true,
  //   },
  // }
});
}
