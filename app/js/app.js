// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

// require('./scrollreveal.min.js')

document.addEventListener('DOMContentLoaded', () => {

	// const navMenu = document.getElementById('nav-menu'),
	// 			navToggle = document.getElementById('nav-toggle'),
	// 			navClose = document.getElementById('nav-close')

	// if(navToggle) {
	// 	navToggle.addEventListener('click', () => {
	// 		navMenu.classList.add('show-menu')
	// 	})
	// }

	// if(navClose) {
	// 	navClose.addEventListener('click', () => {
	// 		navMenu.classList.remove('show-menu')
	// 	})
	// }

	// const navLink = document.querySelectorAll('.nav__link')
	// function linkAction() {
	// 	const navMenu = document.getElementById('nav-menu')
	// 	// When we click on each nav__link, we remove the show-menu class
	// 	navMenu.classList.remove('show-menu')
	// }
	// navLink.forEach(n => n.addEventListener('click', linkAction))

	// function scrollHeader() {
	// 	const header = document.getElementById('header')
	// 	// When the scroll is greater that 50 viewport height, add the scroll-header class to the header tag
	// 	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
	// }
	// window.addEventListener('scroll', scrollHeader)

	// function scrollUp() {
	// 	const scrollUp = document.getElementById('scroll-up');
	// 	if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
	// }
	// window.addEventListener('scroll', scrollUp)

	// const sections = document.querySelectorAll('section[id]')

	// function scrollActive() {
 //    const scrollY = window.pageYOffset

 //    sections.forEach(current => {
 //        const sectionHeight = current.offsetHeight
 //        const sectionTop = current.offsetTop - 50;
 //        sectionId = current.getAttribute('id')

 //        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
 //            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
 //        } else{
 //            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
 //        }
 //    })
	// }
	// window.addEventListener('scroll', scrollActive)

	// const sr = ScrollReveal({
	// 	distance: '60px',
	// 	duration: 2500,
	// 	delay: 400,
	// 	// reset: true
	// })

	// sr.reveal('.home__header .section__title', {delay: 600})
	// sr.reveal('.home__footer', {delay: 700})
	// sr.reveal('.home__img', {delay: 900, origin: 'top'})

	// sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy', {origin: 'top', interval: 100})
	// sr.reveal('.specs__data, .discount__animate', {origin: 'left', interval: 100})
	// sr.reveal('.specs__img, .discount__img', {origin: 'right'})
	// sr.reveal('.case__img', {origin: 'top'})
	// sr.reveal('.case__data', {origin: 'right'})

		/*=============== SHOW MENU ===============*/
	const navMenu = document.getElementById('nav-menu'),
	      navToggle = document.getElementById('nav-toggle'),
	      navClose = document.getElementById('nav-close')

	/*===== MENU SHOW =====*/
	/* Validate if constant exists */
	if(navToggle){
	    navToggle.addEventListener('click', () =>{
	        navMenu.classList.add('show-menu')
	    })
	}

	/*===== MENU HIDDEN =====*/
	/* Validate if constant exists */
	if(navClose){
	    navClose.addEventListener('click', () =>{
	        navMenu.classList.remove('show-menu')
	    })
	}

	/*=============== REMOVE MENU MOBILE ===============*/
	const navLink = document.querySelectorAll('.nav__link')

	function linkAction(){
	    const navMenu = document.getElementById('nav-menu')
	    // When we click on each nav__link, we remove the show-menu class
	    navMenu.classList.remove('show-menu')
	}
	navLink.forEach(n => n.addEventListener('click', linkAction))

	/*=============== CHANGE BACKGROUND HEADER ===============*/
	function scrollHeader(){
	    const header = document.getElementById('header')
	    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
	}
	window.addEventListener('scroll', scrollHeader)

	/*=============== SHOW SCROLL UP ===============*/ 
	function scrollUp(){
	    const scrollUp = document.getElementById('scroll-up');
	    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
	    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
	}
	window.addEventListener('scroll', scrollUp)

	/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
	const sections = document.querySelectorAll('section[id]')

	function scrollActive(){
	    const scrollY = window.pageYOffset

	    sections.forEach(current =>{
	        const sectionHeight = current.offsetHeight
	        const sectionTop = current.offsetTop - 50;
	        sectionId = current.getAttribute('id')

	        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
	            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
	        }else{
	            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
	        }
	    })
	}
	window.addEventListener('scroll', scrollActive)

	/*=============== SCROLL REVEAL ANIMATION ===============*/
	const sr = ScrollReveal({
	    distance: '60px',
	    duration: 2500,
	    delay: 400,
	    // reset: true
	})

	sr.reveal(`.home__header, .section__title`,{delay: 600})
	sr.reveal(`.home__footer`,{delay: 700})
	sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

	sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
	sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
	sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
	sr.reveal(`.case__img`,{origin: 'top'})
	sr.reveal(`.case__data`)

})
