let tabs = document.querySelectorAll('.tab')
let tabsContent = document.querySelectorAll('.tabContent')

for (let tab = 0; tab < tabs.length; tab++) {
  tabs[tab].addEventListener('click', () => {
    tabsContent.forEach((i) => {
      i.classList.add('hide')
    })
    tabs.forEach((i) => {
      i.classList.remove('whiteBorder')
    })
    tabs[tab].classList.add('whiteBorder')
    tabsContent[tab].classList.remove('hide')
    
  })
}