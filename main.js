// Selecting DOM Elements
const sectionIn = document.querySelector('[sign-in-section]');
const sectionOut = document.querySelector('[sign-out-section]');

const mainInBox = document.querySelector('[main-in-box]');
const mainOutBox = document.querySelector('[main-out-box]');

const signUpText = document.querySelector("[para-sign-up]");
const signInText = document.querySelector("[para-sign-in]");

const btnIn = document.querySelector("[btn-input]");
const btnOut = document.querySelector("[btn-output]");
// Selecting DOM Elements


// Click Event on Sign in button
signUpText.addEventListener("click", () => {
    // .style.display = "none"
    sectionIn.style.display = "none"
    sectionOut.style.display = 'block';
})
// Click Event on Sign in button

// Click Event on Sign in Button //
signInText.addEventListener('click', () => {
    sectionOut.style.display = 'none';
    sectionIn.style.display = 'block';
})
// Click Event on Sign in Button //
