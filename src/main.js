function menuResponsiveBehavior() {
  const menuTitle = document.querySelector('.menu h1')
  const menuDiv = document.querySelector('.menu')
  const nav = document.querySelector('.menu nav')
  const deviceWidth = menuDiv.clientWidth
  const minWidth = 400

  if (deviceWidth < minWidth) {
    menuTitle.onclick = function () {
      const displayMenu = window.getComputedStyle(nav, null).display
      if (displayMenu === 'none') {
        nav.style.display = 'flex'
      } else {
        nav.style.display = 'none'
      }
    }
  }
}

function typewriterEffect (elem) {
  const text = document.querySelector(elem)
  const textArray = text.innerHTML.split('')
  text.innerHTML = ''

  textArray.forEach((letter, index) => {
    setTimeout(() => text.innerHTML += letter, 25 * index)
  })
}

function carousel() {
  const time = 3000, images = document.querySelectorAll('.img')
  let currentImageIndex = 0, max = images.length;

  function nextImage () {
    images[currentImageIndex].classList.remove('selected')
    
    currentImageIndex++
    
    if (currentImageIndex >= max)
      currentImageIndex = 0

    images[currentImageIndex].classList.add('selected')
  }

  setInterval(nextImage, time)
}

window.addEventListener('load', () => {
  typewriterEffect('#initial-cover p')
  menuResponsiveBehavior()
  carousel()
})

