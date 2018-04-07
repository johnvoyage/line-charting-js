document.addEventListener('DOMContentLoaded', () => {
  let submitInfoForm = document.createElement('form')
  submitInfoForm.id = 'submit-form'
  submitInfoForm.innerHTML =
  `
    <input type="number" placeholder="X axis data">
    <input type="text" placeholder="Y axis data">
    <input type="submit">
  `
  $('#submit-form-div').append(submitInfoForm)

})
