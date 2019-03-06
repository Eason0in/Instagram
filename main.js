'use strict'
let header = document.querySelector('#header')
let container_header = document.querySelector('.container_header')

window.onscroll = () => {
  const currentY = window.pageYOffset || document.documentElement.scrollTo
  if (currentY >= 52) {
    header.classList.add('shrink')
    container_header.classList.add('shrink')
  } else {
    header.classList.remove('shrink')
    container_header.classList.remove('shrink')
  }

}