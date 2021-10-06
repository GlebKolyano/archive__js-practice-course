let modalPicture = document.querySelector('.modal__picture')
let imgMain = document.getElementById('modal-img1')
let modalImg = document.querySelector('.modal__content')

let src = document.getElementById('modal-img1').src


imgMain.onclick = () => {
  
  modalPicture.style.display = 'block'
  modalImg.src = src
  
}

