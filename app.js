document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById('menu-toggle')
	const navItems = document.querySelector('.nav-items')
	const bodyToggle = document.querySelector('body')
	menuToggle.addEventListener('change', function () {
		navItems.classList.toggle('active', this.checked)
	})
	bodyToggle.addEventListener('click', function () {
		if ((navItems.classList.contains = 'active')) {
			navItems.classList.remove('active')
		}
	})
})
const currentYear = document.querySelector('.current-year')
// Using Date constructor to get the current year
let year = new Date()
currentYear.innerHTML = `&copy; ${year.getFullYear()} by Eyuel`
AOS.init()

//validate user message
// const contactForm = document.querySelector(".contact-form")
// const userMessage = document.querySelector("#userMessage")
// let errorMessage = document.querySelector("#errorMsg")
// contactForm.addEventListener("submit", validateForm)

// function validateForm(event){
// 	event.preventDefault()
// if (!userMessage.value){
// 	errorMessage.textContent = `*Message can't be empty`
// 	userMessage.focus()
// }else{
// 	errorMessage.textContent = ''
// }
// }

