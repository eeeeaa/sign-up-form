const submitButton = document.querySelector("#submit-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const wrongPassAlert = document.querySelector('#wrong-pass-alert');

function validatePassword(){
    let currentPass = password.value;
    let currentConfirm = confirmPassword.value;
    if (currentPass != currentConfirm) {
        wrongPassAlert.textContent
            = '☒ Not Match';
    } else {
        wrongPassAlert.textContent =
            '🗹 Matched';
    }
    return currentPass != currentConfirm;
}

submitButton.addEventListener('click', (event)=> {
    if(validatePassword()){
        event.preventDefault();
    }
});