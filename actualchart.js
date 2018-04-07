const createChart = (chartName, xAxisLabel, yAxisLabel, sampleX, sampleY) => {
  console.log('here')
  myChart = document.getElementById('my-chart').getContext('2d');
  lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    // X axis label(s) or blank array
    labels: sampleX,
    datasets: [{
      // http://www.chartjs.org/docs/latest/charts/line.html
      data: sampleY,
      ////
      label: chartName,
      // Type: String
      // The label for the dataset which appears in the legend and tooltips.
      xAxisID: 'xAxisID',
      // Type: String
      // Default: ''
      // The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis
      yAxisID: 'yAxisID',
      // Type: String
      // Default: ''
      // The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis.
      backgroundColor: 'red',
      // Type: Color as string
      // Default:
      // The fill color under the line.

      borderColor: 'red',
      // Type: Color as string
      // Default:
      // The color of the line.
      borderWidth: 2,
      borderDash: 5,
      borderDashOffset: 5,
      borderCapStyle: 'square',
      // Type: String
      // Options: 'butt', 'round', 'square'
      // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
      borderJoinStyle: 'bevel',
      // Type: String
      // Option:
      // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
      cubicInterpolationMode: 'monotone',
      // Algorithm used to interpolate a smooth curve from the discrete data points.
      // Options: 'default', 'monotone'

      fill: false,
      // Whether or not there should be filled (backgroundColor) between x-axis and the line
      // Type
      // Default: true
      lineTension:
      // Type: Number
    }],
  },
  options: {
    title: {
      // http://www.chartjs.org/docs/latest/configuration/title.html#position
      display: true, // Boolean (default false) is the title shown?
      position: 'bottom', // Default top, options are top, left, bottom, right
      fontSize: 24, // default 12
      fontFamily: 'Helvetica', // default "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
      fontColor: 'red', // String: font color. Default: '#666'
      fontStyle: 'bold', // String: font style. Defaut: 'bold'
      padding: 20, // Number of pixels to add above and below the title text. Default: 10
      lineHeight: 1.5, // Number/String - Number of pixels to add above and below the title text. Default: 1.2
      text: 'performance of stock portfolio by week', // String/Array of Strings - Title text to display. If specified as an array, text is rendered on multiple lines. Default: ""
    },
    hover: {
      mode: 'index',
    },
    layout: {
      padding: {
        left: 50,
        right: 150,
        top: 0,
        bottom: 0,
      }
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'green',
      }
    },

    // color: 'red',
    // fill: false,
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
