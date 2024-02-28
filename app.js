// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const year = document.querySelector('.date')
year.innerHTML = new Date().getFullYear()
// ********** close links ************
const navtoggleBtn = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const navLinks = document.querySelector('.links')
// linksContainer.style.height = 0

navtoggleBtn.addEventListener('click', function () {
  // if (linkContainerHeight == 0) {
  //   linksContainer.style.height = `${linkHeight}px`
  // } else {
  //   linksContainer.style.height = 0
  // }
  // console.log(linkContainerHeight)
  // console.log(linkHeight)
  const linkContainerHeight = linksContainer.getBoundingClientRect().height
  const linkHeight = navLinks.getBoundingClientRect().height
  if (linkContainerHeight === 0) {
    linksContainer.style.height = `${linkHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})
// ********** fixed navbar ************
const nav = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const navHeight = nav.getBoundingClientRect().height
  // console.log(position)
  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
  if (scrollHeight > navHeight) {
    nav.classList.add('fixed-nav')
  } else {
    nav.classList.remove('fixed-nav')
  }
})
// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll('.scroll-link')

scrollLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1)
    // console.log(id)
    const element = document.getElementById(id)

    const navHeight = nav.getBoundingClientRect().height
    const linkContainerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = nav.classList.contains('fixed-nav')
    // console.log(fixedNav)
    let position = element.offsetTop - navHeight
    if (!fixedNav) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + linkContainerHeight
    }
    console.log(position)
    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0
  })
})
