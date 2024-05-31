const navBar = document.querySelector('.navbar')
const menu = document.querySelector('#menu')



menu.addEventListener('click',() => {
  navBar.classList.toggle('ativo')
  console.log('oiiii')
})
