let toDoTask = document.querySelector('.toDo__tasks')
let nodeList = toDoTask.getElementsByTagName('LI')

// creating close buttons
addCloseBtn()

function addCloseBtn() {
  for (i=0; i<nodeList.length; i++) {
  let closeTask = document.createElement('span')
  closeTask.classList.add('closeTask')
  closeTask.innerHTML = '\u00D7'
  if (!nodeList[i].querySelector('.closeTask')) {
    nodeList[i].appendChild(closeTask);
  } 
  }
}


// function deleting for the close button
closeFunction()

function closeFunction() {
let closeTaskBtns = document.getElementsByClassName('closeTask')
for (i=0; i<closeTaskBtns.length; i++) {
  closeTaskBtns[i].onclick = function() {
    this.parentElement.style.display = 'none'
  }
}
}
let listUl = document.querySelector('.toDo__tasks')
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI'){
    
    event.target.classList.toggle('toDoChecked')
  }
}, false)

// creating tasks
function newToDoElem() {
  let liElem = document.createElement('li')
  let titleInput = document.querySelector('.toDoInput').value
  
  liElem.innerText = titleInput;
  
  let ul = document.querySelector('.toDo__tasks')
  if (titleInput === '') {
    alert('Поле не может быть пустым!')
  } else {
    ul.appendChild(liElem)
    addCloseBtn()
    closeFunction()
  }
}