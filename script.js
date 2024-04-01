document.addEventListener('DOMContentLoaded', function() {
    let passwordInput = document.querySelector('#user-password');
    passwordInput.addEventListener('input', function() {
        let passwordValue = this.value;
        checkPassword();
    });
    let passwordInput2 = document.querySelector('#user-password2');
    passwordInput2.addEventListener('input', function() {
        let passwordValue2 = this.value;
        checkPassword();
    });
    
});
function checkPassword(){
    let passwordInput = document.querySelector('#user-password');
    let passwordInput2 = document.querySelector('#user-password2');
    let passwordValue = document.querySelector('#user-password').value;
    let passwordValue2 = document.querySelector('#user-password2').value;
    if(passwordValue === passwordValue2){
        passwordInput.style.border = '1px solid green';
        passwordInput2.style.border = '1px solid green';
    }
    else{
        passwordInput.style.border = '1px solid red';
        passwordInput2.style.border = '1px solid red';
    }
}


window.onload = function() {
    const showPasswordButtons = document.querySelectorAll('.show-password');
    showPasswordButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const passwordInput = event.target.previousElementSibling;
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
}