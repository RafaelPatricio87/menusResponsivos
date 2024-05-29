window.addEventListener('scroll', function(){
  let header = document.getElementById('header')
  header.classList.toggle('rolagem', window.scrollY > 4)
})