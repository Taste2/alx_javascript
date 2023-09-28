/*
Form Validation - Password Strength
*/

//retrieve values elements
const paragraphValue = document.getElementById("error");
const form = document.getElementById("emailForm");

//function to validate password value entered
function validateEmail () {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailValue = document.getElementById("email").value;
    if (emailValue.length  == 0) {
        paragraphValue.innerHTML = "Email cannot be empty";
        return false;
    }
    if (!emailValue.match(re)) {
        paragraphValue.innerHTML = "Please enter a valid email address";
        return false;
    }

    return true;
}

//Form not to submit if criteria not met
form.addEventListener('submit', (e) => {
    if (!validateEmail()) {
        e.preventDefault();
    }
})