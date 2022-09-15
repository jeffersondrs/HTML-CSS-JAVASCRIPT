'use strict'
// slide pagina portifolio
const indexContainer = document.querySelector('.slider-container')
const indexRight = document.querySelector('.right-slide')
const indexLeft = document.querySelector('.left-slide')
const indexUp = document.querySelector('.up-button')
const indexDown = document.querySelector('.down-button')
const slidesLength = indexRight.querySelectorAll('div').length
let activeSlideIndex = 0

indexLeft.style.top = `-${(slidesLength - 1) * 100}vh`

indexUp.addEventListener('click', () => changeSlide('up'))
indexDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const slideHeight = indexContainer.clientHeight
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }
  indexRight.style.transform = `translateY(-${
    activeSlideIndex * slideHeight
  }px)`
  indexLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`
}
