const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

let slideActiveIndex = 0;

prevBtn.addEventListener('click', () => {
  changeSlides('prev')
})

nextBtn.addEventListener('click', () => {
  changeSlides('next')
})

function changeSlides(direction) {
  if (direction === 'next') {
    slideActiveIndex++ 
    if (slideActiveIndex === slides.length) {
      slideActiveIndex = 0
    }
  } else if (direction === 'prev') {
    slideActiveIndex--
    if (slideActiveIndex < 0) {
      slideActiveIndex = slides.length - 1
    }
  }
  for (let slide of slides) {
    slide.style.display = 'none'
    slide.classList.remove('fade')
  }
  slides[slideActiveIndex].style.display = 'block'
  slides[slideActiveIndex].classList.add('fade') 
  
  for (let dot of dots) {
    dot.classList.remove('active')
  }
  dots[slideActiveIndex].classList.add('active') 

  

}

