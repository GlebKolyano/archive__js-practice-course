let animBtn = document.querySelector('.animBtn')
let animBlock = document.querySelector('.animation-block')
let pos = 0;
animBtn.onclick = move


function move() {
  setInterval(() => {
    if (pos === 350) {
      clearInterval()
    } else {
      pos+=1
      animBlock.style.top = pos+'px'
      animBlock.style.left = pos+'px'
      console.log('hi')
    }
  }, 10) 
}