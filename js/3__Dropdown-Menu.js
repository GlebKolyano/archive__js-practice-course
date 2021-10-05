const nav = document.getElementById('nav')
let menus = document.getElementsByClassName('menu__item')


for (let menu of menus) {
  let submenu = menu.querySelector('.submenu')
  menu.addEventListener('mouseover', ()=> {
    submenu.style.display = 'block'
  },
  menu.addEventListener('mouseleave', ()=> {
    submenu.style.display = 'none'
  }  
))}