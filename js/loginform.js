const submitButton = document.querySelector("#submit-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const wrongPassAlert = document.querySelector('#wrong-pass-alert');

function validatePassword(){
    let currentPass = password.value;
    let currentConfirm = confirmPassword.value;
    if(currentPass == "" || currentConfirm == ""){
        wrongPassAlert.textContent = "Please enter password";
        wrongPassAlert.style.backgroundColor = "#cc6600";
    } else if (currentPass != currentConfirm) {
        wrongPassAlert.textContent = '☒ Password do not Match';
        wrongPassAlert.style.backgroundColor = "#990000";
    } else {
        wrongPassAlert.textContent = '🗹 Password matched';
        wrongPassAlert.style.backgroundColor = "green";
    }
    
    return currentPass != currentConfirm;
}

submitButton.addEventListener('click', (event)=> {
    if(validatePassword()){
        event.preventDefault();
    }
});