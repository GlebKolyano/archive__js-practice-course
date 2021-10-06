const inputFilter = document.querySelector('.filterInput')
let ul = document.querySelector('.myUL')
let li = ul.getElementsByTagName('li')

inputFilter.addEventListener('keyup', filterNames)


function filterNames() {
  let filterValue = inputFilter.value.toLowerCase();
  for (let i=0; i < li.length; i++) {
    let a = li[i].querySelector('a')
    a.innerHTML.toLowerCase().indexOf(filterValue) > -1 ? a.style.display = "" : a.style.display = "none"

  }
}