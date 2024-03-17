document.addEventListener('DOMContentLoaded', () => {
  const headerWrapper = document.querySelector('.headerWrapper')
  const burgerIconOpen = document.querySelector('[data-burger-icon="open"]')
  const burgerIconClose = document.querySelector('[data-burger-icon="close"]')

  const burgerMenuBg = document.querySelector('.burgerMenuBg')
  const burgerMenu = document.querySelector('.burgerMenu')

  function openBurgerMenu() {
    burgerMenuBg.classList.remove('hidden')
    burgerMenu.classList.remove('hidden')
    burgerIconClose.classList.remove('d-none')
    burgerIconOpen.classList.add('d-none')
  }

  function closeBurgerMenu() {
    burgerMenuBg.classList.add('hidden')
    burgerMenu.classList.add('hidden')
    burgerIconClose.classList.add('d-none')
    burgerIconOpen.classList.remove('d-none')
  }


  burgerIconOpen.addEventListener('click', openBurgerMenu)
  burgerIconClose.addEventListener('click', closeBurgerMenu)
  headerWrapper.addEventListener('click', e => {
    if (e.target.classList.value === 'burgerMenuBg') {
      closeBurgerMenu()
    }
  })
})
