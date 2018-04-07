document.addEventListener('DOMContentLoaded', () => {

  const sampleX = ['1/1 - 1/7','1/8-1/14', '1/15-1/21', '1/22-1/28', '1/29-2/24']
  const sampleY = [100000, 105000, 99000, 92000, 101000]
  // Create the create chart form
  let createChartForm = $('<form id="create-chart-form"><form/>')
  createChartForm.append(`
    <input type="text" placeholder="Chart name">
    <input type="text" placeholder="X axis label">
    <input type="text" placeholder="Y axis label">
    <input type="submit" value="Create Chart">
  `)
  $('#create-chart-div').append(createChartForm)

  // Submit the create chart form
  $('#create-chart-form').submit((event) => {
    chartName = event.target.children[0].value
    xAxisLabel = event.target.children[1].value
    yAxisLabel = event.target.children[2].value
    createChart(chartName, xAxisLabel, yAxisLabel)
    createAddDataForm()
    $('#create-chart-form').remove()
  })


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
