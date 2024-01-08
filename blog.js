// image slider
const slides = document.querySelectorAll(".slides img")
let slideIndex = 0
let intervalId = null

initalizeSlider()

function initalizeSlider(){
    if (slides.length > 0){
	slides[slideIndex].classList.add('displaySlide')
    intervalId = setInterval(nextSlide, 3000)
    }
}

function showSlide(index){
    if (index >= slides.length){
        slideIndex = 0
    }
    else if (index < 0){
        slideIndex = slides.length - 1
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide(){
    slideIndex--
    showSlide(slideIndex)
}

function nextSlide(){
    slideIndex++
    showSlide(slideIndex)
}

//access the username input value
const userName = document.querySelector("#username")
//access the email from the input value
const email = document.querySelector("#email")
//get the submit button
const emailForm = document.querySelector(".email-newsletter")
let nameError = document.querySelector(".name-error")
let emailError = document.querySelector(".email-error")
// validate form

emailForm.addEventListener("submit", validateForm)
function validateForm(event){
    event.preventDefault()
    if (!email.value){
        emailError.innerHTML = '*Email can not be empty'
        email.focus()
    }else{
        emailError.innerHTML = ''
    }
    if (!userName.value){
        nameError.innerHTML = '*Name can not be empty'
        userName.focus()
    }else{
        nameError.innerHTML = ''
    }
}