const plusBtn = document.querySelector('.plusBtn')
const minusBtn = document.querySelector('.minusBtn')
const multBtn = document.querySelector('.multBtn')
const divBtn = document.querySelector('.divBtn')
const clearBtn = document.querySelector('.clearBtn')


plusBtn.onclick = () => {
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  
  document.getElementById('calcOut').innerHTML = "Ответ: "+(num1+num2); 
}

minusBtn.onclick = () => {
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  
  document.getElementById('calcOut').innerHTML = "Ответ: "+(num1-num2); 
}

multBtn.onclick = () => {
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  
  document.getElementById('calcOut').innerHTML = "Ответ: "+(num1 * num2); 
}

divBtn.onclick = () => {
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  
  document.getElementById('calcOut').innerHTML = "Ответ: "+(num1/num2); 
}


clearBtn.onclick = () => {
  document.getElementById('num1').value = ""
  document.getElementById('num2').value = ""
}
