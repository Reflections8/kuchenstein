document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form')
  forms.forEach(form => {
    const thisSubmitBtn = form.querySelector('button[type="submit"]')
    thisSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault()
    })
  })
})
