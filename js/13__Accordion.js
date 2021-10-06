let accordBtn = document.querySelectorAll('.accordBtn')


accordBtn.forEach( (btn) => {
  btn.onclick = () => {
    btn.classList.toggle('active')
    btn.nextElementSibling.classList.toggle('show')
  }
})
