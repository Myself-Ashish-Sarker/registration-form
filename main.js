// Selecting DOM Elements
const sectionIn = document.querySelector("[sign-in-section]")
const sectionOut = document.querySelector("[sign-out-section]")
const successBox = document.querySelector("[successful-box]")
const completeBox = document.querySelector("[complete-box]")

const mainInBox = document.querySelector("[main-in-box]")
const mainOutBox = document.querySelector("[main-out-box]")

const userInBox = document.querySelector("[user-in-box]")
const passInBox = document.querySelector("[pass-in-box]")
const userOutBox = document.querySelector("[user-out-box]")
const passOutBox = document.querySelector("[pass-out-box]")

const signUpText = document.querySelector("[para-sign-up]")
const signInText = document.querySelector("[para-sign-in]")
const signBack = document.querySelector("[sign-back]")

const btnIn = document.querySelector("[btn-input]")
const btnOut = document.querySelector("[btn-output]")

// Selecting DOM Elements

// Click Event on Sign in button
signUpText.addEventListener("click", () => {
    // .style.display = "none"
    sectionIn.style.display = "none"
    sectionOut.style.display = "block"
})
// Click Event on Sign in button

// Click Event on Sign in Button //
signInText.addEventListener("click", () => {
    sectionOut.style.display = "none"
    sectionIn.style.display = "block"
})

signBack.addEventListener("click", () => {
    sectionIn.style.display = "block"
    sectionOut.style.display = "none"
    completeBox.style.display = "none"
})

btnIn.addEventListener("click", () => {
    let inPutUser = userInBox.value
    let inPutPass = passInBox.value

    let outPutUser = userOutBox.value
    let outPutPass = passOutBox.value

    console.log("Input User:", inPutUser);
    console.log("Input Pass:", inPutPass);
    console.log("Output User:", outPutUser);
    console.log("Output Pass:", outPutPass);

    if (outPutUser === inPutUser && outPutPass === inPutPass) {
        successBox.style.display = "block"
        sectionIn.style.display = "none";
        console.log("ok!");
    } else {
        console.log("not ok!");
    }
});

btnOut.addEventListener("click", () => {
    if (userOutBox.value !== "" && passOutBox.value !== "") {
        completeBox.style.display = "block"

        sectionIn.style.display = "none"
        sectionOut.style.display = "none"

    } else {
        completeBox.style.display = "none"
    }
})


// Click Event on Sign in Button //
