const createChart = (chartName, xAxisLabel, yAxisLabel, sampleX, sampleY) => {
  myChart = document.getElementById('my-chart').getContext('2d');
  lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    // X axis label(s) or blank array
    // labels: sampleX,
    datasets:
    [
      {
        // http://www.chartjs.org/docs/latest/charts/line.html
        data: googleJS,
        ////
        label: 'JavaScript Search',
        // Type: String
        // The label for the dataset which appears in the legend and tooltips.
        // xAxisID: sampleY,
        // // Type: String
        // // Default: ''
        // // The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis
        // yAxisID: 'yAxisID',
        // // Type: String
        // // Default: ''
        // // The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis.
        // backgroundColor: 'red',
        // // Type: Color as string
        // // Default:
        // // The fill color under the line.
        //
        // borderColor: 'red',
        // Type: Color as string
        // Default:
        // The color of the line.
        // borderWidth: 2,
        // borderDash: 5,
        // borderDashOffset: 5,
        // borderCapStyle: 'square',
        // Type: String
        // Options: 'butt', 'round', 'square'
        // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
        // borderJoinStyle: 'bevel',
        // Type: String
        // Option:
        // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
        // cubicInterpolationMode: 'monotone',
        // Algorithm used to interpolate a smooth curve from the discrete data points.
        // Options: 'default', 'monotone'

        // fill: false,
        // Whether or not there should be filled (backgroundColor) between x-axis and the line
        // Type
        // Default: true
        // lineTension: 0,
        // Type: Number
        // "Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used."
        // pointBackgroundColor: 'green',
        // pointBorderColor: 'blue',
        // pointBorderWidth: 5,
        // pointRadius: 10,
        // pointStyle: 'triangle',
        // Options: http://www.chartjs.org/docs/latest/configuration/elements#point-styles
        // If it's an image: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
        // pointHitRadius: 3,
        // pointHoverBackgroundColor: 'purple',
        // pointHoverBorderColor: 'grey',
        // pointHoverBorderWidth: 7,
        // pointHoverRadius: 6,
        // showLine: false,
        // "If false, the lines between points are not drawn."
        // Type: Boolean
        // Default: true
        // spanGaps: true,
        // "If false, NaN data causes a break in the line."
        // Type: Boolean
        // Default: false

        // steppedLine: 'after',
        // Options:
        //   false: no step interpolation (default)
        //   true or before: step-before interpolation
        //   after: step-after interpolation
      }
    ],
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


  }
});
}
