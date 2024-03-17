document.addEventListener('DOMContentLoaded', () => {
  const hiddenClass = 'callModalBg--Hidden'

  const modalBg = document.querySelector('.callModalBg')
  const closeIcon = modalBg.querySelector('.callModal__closeIcon')
  const openButtons = document.querySelectorAll('[data-button-event="callModal"]')


  /* Close modal logic */
  closeIcon.addEventListener('click', () => {
    modalBg.classList.add(hiddenClass)
  })

  modalBg.addEventListener('click', (e) => {
    if (!e.target.closest('.callModal')) {
      modalBg.classList.add(hiddenClass)
    }
  })

  /* Open modal logic */
  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modalBg.classList.remove(hiddenClass)
    })
  })
})
