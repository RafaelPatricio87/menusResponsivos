const hambuergerButton = document.getElementById('hambugerButton')
const closeMenu = document.getElementById('closeMenu')

const mobileMenu = document.getElementById('mobileMenu')

hambuergerButton.addEventListener('click',() => {
   mobileMenu.classList.add('flex')
})

closeMenu.addEventListener('click',() => {
  mobileMenu.classList.remove('flex')
})