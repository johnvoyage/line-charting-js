document.addEventListener('DOMContentLoaded', () => {

  // const sampleX = ['Week1','Week2', 'Week3', 'Week4', 'Week5']
  // const sampleY = [100, 105, 99, 92, 101]
  // const chartName = "Chart Name!"
  // const xAxisLabel = "X Axis Label"
  // const yAxisLabel = "Y Axis Label"
  // Create the create chart form
  // let createChartForm = $('<form id="create-chart-form"><form/>')
  // createChartForm.append(`
  //   <input type="text" placeholder="Chart name">
  //   <input type="text" placeholder="X axis label">
  //   <input type="text" placeholder="Y axis label">
  //   <input type="submit" value="Create Chart">
  // `)
  // $('#create-chart-div').append(createChartForm)
  //
  // // Submit the create chart form
  // $('#create-chart-form').submit((event) => {
  //   event.preventDefault()
  //   chartName = event.target.children[0].value
  //   xAxisLabel = event.target.children[1].value
  //   yAxisLabel = event.target.children[2].value
    createChart()
    createGauge()
    // createGauge()


    // createAddDataForm()
  //   $('#create-chart-form').remove()
  // })


  // Create the update chart form
  const createAddDataForm = () => {
    let addDataForm = document.createElement('form')
    addDataForm.id = 'add-data-form'
    addDataForm.innerHTML =
    `
      <input type="text" placeholder="X axis data">
      <input type="number" placeholder="Y axis data">
      <input type="submit" value="Add Data">
    `
    $('#add-data-div').append(addDataForm)
    addDataForm.addEventListener('submit', dataSubmitted)
    // Add remove data button
    let removeDataButton = document.createElement('button')
    removeDataButton.innerText = "Remove Last Datapoint"
    removeDataButton.addEventListener('click', removeButtonClicked)
    $('#add-data-div').append(removeDataButton)

  }

  const dataSubmitted = (event) => {
    event.preventDefault()
    const xAxisData = event.target.children[0].value
    const yAxisData = event.target.children[1].value
    addData(lineChart, xAxisData, yAxisData)
    event.target.reset()
  }

  const addData = (chart, label, data) => {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
  }

  const removeButtonClicked = (event) => {
    removeData(lineChart)
  }

  const removeData = (chart) => {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

})
