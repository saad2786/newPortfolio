Shery.mouseFollower()
Shery.makeMagnet('.magnet')

let wave1 = document.getElementById('wave1')
let wave2 = document.getElementById('wave2')
let wave3 = document.getElementById('wave3')
let wave4 = document.getElementById('wave4')
let wave5 = document.getElementById('wave5')
let wave6 = document.getElementById('wave6')
let wave7 = document.getElementById('wave7')
let wave8 = document.getElementById('wave8')
let bwave1 = document.getElementById('bwave1')
let bwave2 = document.getElementById('bwave2')
let bwave3 = document.getElementById('bwave3')
let bwave4 = document.getElementById('bwave4')

window.addEventListener('scroll', function () {
  let value = window.scrollY

  bwave1.style.backgroundPositionX = 400 + value * 4 + 'px'
  bwave2.style.backgroundPositionX = 300 + value * -4 + 'px'
  bwave3.style.backgroundPositionX = 200 + value * 2 + 'px'
  bwave4.style.backgroundPositionX = 100 + value * -2 + 'px'

  wave1.style.backgroundPositionX = 400 + value * 4 + 'px'
  wave2.style.backgroundPositionX = 300 + value * -4 + 'px'
  wave3.style.backgroundPositionX = 200 + value * 2 + 'px'
  wave4.style.backgroundPositionX = 100 + value * -2 + 'px'
  wave5.style.backgroundPositionX = 400 + value * 4 + 'px'
  wave6.style.backgroundPositionX = 300 + value * -4 + 'px'
  wave7.style.backgroundPositionX = 200 + value * 2 + 'px'
  wave8.style.backgroundPositionX = 100 + value * -2 + 'px'
})

let skill = document.querySelectorAll('.skillel')
let level = document.querySelectorAll('.level')

skill.forEach(function (s, index) {
  s.addEventListener('mouseover', function () {
    level[index].style.visibility = 'visible'
  })
  s.addEventListener('mouseout', function () {
    level[index].style.visibility = 'hidden'
  })
})

let view = document.querySelector('.fbutton button')
let projects = document.querySelector('#fprojects')
view.addEventListener('click', function () {
  projects.style.overflow = 'visible'
  projects.style.height = 'fit-content'
})

let menu = document.querySelector('.menu')
let navs = document.querySelectorAll('#right a')
let display = 0
menu.addEventListener('click', function () {
  display = !display
  navs.forEach(function (nav) {
    if (display) {
      nav.style.visibility = 'hidden'
    } else {
      nav.style.visibility = 'visible'
    }
  })
})
