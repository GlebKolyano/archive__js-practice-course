let modalBtn = document.querySelector('.modalBtn')
let closeBtn = document.querySelector('.closeBtn')
let modal = document.querySelector('.modal')


modalBtn.onclick = () => {
  modal.classList.remove('hide')
}
closeBtn.onclick = () => {
  modal.classList.add('hide')
}
