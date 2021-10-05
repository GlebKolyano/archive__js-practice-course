// checkbox and radio inputs
let pElem3 = document.getElementById('p3')
const checkbox = document.getElementById('checkbox-1')
checkbox.onchange = () => {
  if (checkbox.checked) {
    pElem3.innerHTML = `Элемент: выбран` 
  } else {
    pElem3.innerHTML = `Элемент: не выбран` 
  }
}
const radios = document.getElementsByName('radio')
const radioBtn = document.querySelector('.button-radio')
let pElem4 = document.getElementById('p4')

radioBtn.onclick = (event) => {
  event.preventDefault()
  radios.forEach((radio) => {
    if (radio.checked) {
      pElem4.innerHTML = `Выбран элемент: ${radio.value}` 
    }
  })
}
// select input
const mySelect = document.getElementById('mySelect')

let pElem1 = document.getElementById('p1')
let pElem2 = document.getElementById('p2')

mySelect.onchange = () => {
  let index = mySelect.selectedIndex
  let option = mySelect.options
  pElem1.innerHTML = `Индекс выбранного элемента: ${index}`
  pElem2.innerHTML = `Значение выбранного элемента: ${option[index].text}`

}
// range input
let input_1 = document.getElementById('input1')
let range1 = document.getElementById('range1')
let divTest = document.getElementById('test')

range1.oninput = () => {
  input_1.value = `Значение: ${range1.value}`
  divTest.style.width = range1.value+'px'
}