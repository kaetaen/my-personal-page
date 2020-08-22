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


window.onload = function () {
  menuResponsiveBehavior()
}

