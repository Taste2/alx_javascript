/*
Form Validation - Password Strength
*/

//retrieve values elements
const paragraphValue = document.getElementById("error");
const form = document.getElementById("passwordForm");

//function to validate password value entered
function validatePassword () {
    const passwordValue = document.getElementById("password").value;
    if (passwordValue.length < 8) {
        paragraphValue.innerHTML = "Password must be more than 8 characters";
        return false;
    }
    if (!passwordValue.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
        paragraphValue.innerHTML = "Password incorrect";
        return false;
    }

    paragraphValue.innerHTML = "Password format correct";
    return true;
}

//Form not to submit if criteria not met
form.addEventListener('submit', (e) => {
    if (!validatePassword()) {
        e.preventDefault();
    }
})