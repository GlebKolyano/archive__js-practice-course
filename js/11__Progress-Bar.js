function move() {
  let barBtn = document.querySelector('barBtn')
  let bar = document.getElementById('bar__block')
  let width = 10;
  
  setInterval(()=> {
    if (width>=100) {
      clearInterval();
    } else {
      width++
      bar.style.width = width + '%'
      document.getElementById('precent__block').innerHTML = width + '%';
    }
  }, 10)
}
