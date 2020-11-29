let slideIndex = 1

showSlides(slideIndex)

function nextSlide () {
  showSlides(slideIndex += 1)
}

function previousSlide () {
  showSlides(slideIndex -= 1)
}
function currentSlide (n) {
  showSlides(slideIndex = n)
}
function showSlides (n) {
  const slides = document.getElementsByClassName('item')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (const slide of slides) {
    slide.style.display = 'none'
  }
  slides[slideIndex - 1].style.display = 'block'
}
