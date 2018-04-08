const createChart = () => {
  myChart = document.getElementById('my-chart').getContext('2d');
  lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: labels,
    // Array
    datasets:
    [
      {
        // http://www.chartjs.org/docs/latest/charts/line.html
        data: googleJS,
        // data: [1,4,7],
        // data: [{x: 10, y: 20}, {x: 15, y:30}, {x:20,y:36}],

        label: 'JavaScript',
        // Type: String
        // The label for the dataset which appears in the legend and tooltips.

        xAxisID: '',
        // Type: String
        // Default: ''
        // The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis
        yAxisID: '',
        // Type: String
        // Default: ''
        // The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis.
        backgroundColor: 'black',
        // // Type: Color as string
        // // Default:
        // // The fill color under the line.
        //
        borderColor: 'black',
        // Type: Color as string
        // Default:
        // The color of the line.
        borderWidth: 5,
        // Type: Number
        // "The width of the line in pixels."
        borderDash: [6,100,50],
        // Type: Array of numbers
        // "Length and spacing of dashes"
        // See more: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
        borderDashOffset: 1,
        // Type: Number
        // "Offset for line dashes."
        borderCapStyle: 'round',
        // Type: String
        // Options: 'butt', 'round', 'square'
        // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
        borderJoinStyle: 'bevel',
        // Type: String
        // Options: 'bevel', 'round', 'miter'
        // See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
        cubicInterpolationMode: 'default',
        // Algorithm used to interpolate a smooth curve from the discrete data points.
        // Options: 'default', 'monotone'

        fill: false,
        // Whether or not there should be filled (backgroundColor) between x-axis and the line
        // Type
        // Default: true
        lineTension: 5,
        // Type: Number
        // "Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used."
        pointBackgroundColor: 'black',
        // Type: Color
        // Fill color of points
        pointBorderColor: 'red',
        // Type: Color
        // Border color of points
        pointBorderWidth: 5,
        pointRadius: 5,
        pointStyle: 'circle',
        // Options: http://www.chartjs.org/docs/latest/configuration/elements#point-styles
        // If it's an image: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
        pointHitRadius: 1,
        // Type: Number
        // "The pixel size of the non-displayed point that reacts to mouse events."
        // Should probably be <= pointBorderWidth + pointRadius
        // pointHoverBackgroundColor: 'purple',
        pointHoverBorderColor: 'maroon',
        pointHoverBorderWidth: 10,
        pointHoverRadius: 10,
        showLine: true,
        // "If false, the lines between points are not drawn."
        // Type: Boolean
        // Default: true
        spanGaps: true,
        // "If false, NaN data causes a break in the line."
        // Type: Boolean
        // Default: false

        steppedLine: false,
        // Options:
        //   false: no step interpolation (default)
        //   true or before: step-before interpolation
        //   after: step-after interpolation
      },
      // {
      //   data: googleP,
      //   label: "Python",
      //   // xAxisID: '',
      //   // yAxisID: '',
      //   // backgroundColor: 'deepskyblue',
      //   borderColor: 'deepskyblue',
      //   // borderWidth: ,
      //   borderDash: [12,24],
      //   // borderDashOffset: ,
      //   borderCapStyle: 'square',
      //   borderJoinStyle: 'miter',
      //   cubicInterpolationMode: 'monotone',
      //   fill: true,
      //   // lineTension: ,
      //   // pointBackgroundColor: ,
      //   // pointBorderColor: ,
      //   // pointBorderWidth: ,
      //   // pointRadius: ,
      //   // pointStyle: ,
      //   // pointHitRadius: ,
      //   // pointHoverBackgroundColor: ,
      //   // pointHoverBorderColor: ,
      //   // pointHoverBorderWidth: ,
      //   // pointHoverRadius: ,
      //   // showLine: ,
      //   spanGaps: true,
      //   steppedLine: true,
      // },
      // {
      //   data: googleR,
      //   label: "Ruby",
      //   // xAxisID: '',
      //   // yAxisID: '',
      //   // backgroundColor: 'powderblue',
      //   borderColor: 'powderblue',
      //   // borderWidth: ,
      //   borderDash: [18,36],
      //   // borderDashOffset: 50,
      //   borderCapStyle: 'round',
      //   borderJoinStyle: 'round',
      //   // cubicInterpolationMode: ,
      //   fill: true,
      //   lineTension: 5,
      //   // pointBackgroundColor: ,
      //   // pointBorderColor: ,
      //   // pointBorderWidth: ,
      //   // pointRadius: ,
      //   // pointStyle: ,
      //   // pointHitRadius: ,
      //   // pointHoverBackgroundColor: ,
      //   // pointHoverBorderColor: ,
      //   // pointHoverBorderWidth: ,
      //   // pointHoverRadius: ,
      //   // showLine: ,
      //   spanGaps: false,
      //   steppedLine: 'after',
      // }
    ],
  },
  // options: {
  //   title: {
  //     // http://www.chartjs.org/docs/latest/configuration/title.html#position
  //     display: true, // Boolean (default false) is the title shown?
  //     position: 'bottom', // Default top, options are top, left, bottom, right
  //     fontSize: 24, // default 12
  //     fontFamily: 'Helvetica', // default "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  //     fontColor: 'red', // String: font color. Default: '#666'
  //     fontStyle: 'bold', // String: font style. Defaut: 'bold'
  //     padding: 20, // Number of pixels to add above and below the title text. Default: 10
  //     lineHeight: 1.5, // Number/String - Number of pixels to add above and below the title text. Default: 1.2
  //     text: 'Google Searches', // String/Array of Strings - Title text to display. If specified as an array, text is rendered on multiple lines. Default: ""
  //   },
  //   hover: {
  //     mode: 'index',
  //   },
  //   layout: {
  //     padding: {
  //       left: 50,
  //       right: 150,
  //       top: 0,
  //       bottom: 0,
  //     }
  //   },
  //   legend: {
  //     display: true,
  //     labels: {
  //       fontColor: 'green',
  //     }
  //   },
  //
  //
  // }
});
}
