let rtl = document.getElementById('rtl')
let ttl = document.getElementById('ttl')
let rtr = document.getElementById('rtr')
let ttr = document.getElementById('ttr')
let rbl = document.getElementById('rbl')
let tbl = document.getElementById('tbl')
let rbr = document.getElementById('rbr')
let tbr = document.getElementById('tbr')

let $block = document.getElementById('view-block')

rtl.oninput = () => {
  let value = rtl.value
  $block.style.borderTopLeftRadius = value+'px'
  ttl.value = value
}
rtr.oninput = () => {
  let value = rtr.value
  $block.style.borderTopRightRadius = value+'px'
  ttr.value = value
}
rbl.oninput = () => {
  let value = rbl.value
  $block.style.borderBottomLeftRadius = value+'px'
  tbl.value = value
}
rbr.oninput = () => {
  let value = rbr.value
  $block.style.borderBottomRightRadius = value+'px'
  tbr.value = value
}