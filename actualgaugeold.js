const createGauge = () => {
  var optsOne = {
    angle: 0, // The span of the gauge arc
    // From -0.5 (full circle) to 0.5 (invisible sliver). 0 is a perfect half-circle
    lineWidth: 0.2,
    // The gauge area thickness between 0.01 (perfect line) and 0.7 (full circle)
    radiusScale: 1,
    // Relative radius (0.5 to 1)
    pointer: {
      length: 0.5, // // Relative to gauge radius (0 to 1)
      strokeWidth: 0.03, // Point thickness (0 to 0.3)
      color: 'black' // Pointer color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: 'purple', // inner background color of full portion
    colorStop: 'red', // outer background color of full portion
    strokeColor: 'grey', // background color of empty portion
    generateGradient: true, // High resolution support
    highDpiSupport: true, // High resolution support
    // renderTicks is Optional
    renderTicks: {
      divisions: 5, // Number of ticks, from 0-20
      divWidth: 2, // Width of tick, from 0.1 to 10
      divLength: 0.75, // From 0 (no length) to 1 (full length of gauge area)
      divColor: 'black',
      subDivisions: 5, // Number of ticks between ticks, from 0-20
      subLength: 0.5, // From 0 (no length) to 1 (full length of gauge area)
      subWidth: 1,
      subColor: 'black'
    }

  };
  // var targetOne = document.getElementById('my-gauge-one'); // your canvas element
  var gaugeOne = new Gauge(document.getElementById('my-gauge-one')).setOptions(optsOne); // create sexy gauge!
  var gaugeTwo = new Gauge(document.getElementById('my-gauge-two')).setOptions(randomOptions()); // create sexy gauge!
  var gaugeThree = new Gauge(document.getElementById('my-gauge-three')).setOptions(randomOptions()); // create sexy gauge!
  var gaugeFour = new Gauge(document.getElementById('my-gauge-four')).setOptions(randomOptions()); // create sexy gauge!

  [gaugeOne.maxValue, gaugeTwo.maxValue, gaugeThree.maxValue, gaugeFour.maxValue] = [100, 100, 100, 100]; // set max gauge value
  gaugeOne.setMinValue(0);
  gaugeTwo.setMinValue(0);
  gaugeThree.setMinValue(0);
  gaugeFour.setMinValue(0); // Prefer setter over gauge.minValue = 0
  [gaugeOne.animationSpeed, gaugeTwo.animationSpeed, gaugeThree.animationSpeed, gaugeFour.animationSpeed] = [128, 128, 128, 128]; // set animation speed (32 is default value)
  gaugeOne.set(75)
  gaugeTwo.set(33)
  gaugeThree.set(67)
  gaugeFour.set(95)

}

// const setGauge = (gauge) => {
//   setInterval(() => gauge.set(Math.random() * 100), 2000); // set actual value
// }

const randomOptions = () => {
  const pointerLength = Math.random()
  return {
    angle: -0.5 + Math.random(), // The span of the gauge arc
    // From -0.5 (full circle) to 0.5 (invisible sliver). 0 is a perfect half-circle
    lineWidth: (Math.floor(Math.random() * 70) + 1) / 100,
    // The gauge area thickness between 0.01 (perfect line) and 0.7 (full circle)
    radiusScale: (Math.random() / 2 + 0.5),
    // Relative radius (0.5 to 1)
    pointer: {
      length: pointerLength, // // Relative to gauge radius (0 to 1)
      strokeWidth: 0.05, // Point thickness (0 to 0.3)
      color: pointerLength < 0.2 ? 'white' : getRandomColor() // Pointer color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: getRandomColor(), // inner background color of full portion
    colorStop: getRandomColor(), // outer background color of full portion
    strokeColor: getRandomColor(), // background color of empty portion
    generateGradient: true, // High resolution support
    highDpiSupport: true, // High resolution support
    // renderTicks is Optional
    renderTicks: {
      divisions: Math.floor(Math.random() * 20), // Number of ticks, from 0-20
      divWidth: Math.random() * 10, // Width of tick, from 0.1 to 10
      divLength: Math.random(), // From 0 (no length) to 1 (full length of gauge area)
      divColor: getRandomColor(),
      subDivisions: Math.floor(Math.random() * 20), // Number of ticks between ticks, from 0-20
      subLength: Math.random(), // From 0 (no length) to 1 (full length of gauge area)
      subWidth: 0.6,
      subColor: getRandomColor()
    }

  };
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
