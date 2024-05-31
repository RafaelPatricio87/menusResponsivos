const menuItem = document.querySelectorAll('.item-menu');


function selectLink() {
  menuItem.forEach((item) =>
    item.classList.remove('ativo')

 )
  this.classList.add('ativo')
}

menuItem.forEach((item) => {
  item.addEventListener('click', selectLink)
})


const menuHamburger = document.querySelector('#menu-hamburger')


menuHamburger.addEventListener('click', () => {
  const menuLateral = document.querySelector('.menu-lateral')

  menuLateral.classList.toggle('abrir')
})