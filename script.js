const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//functions

function showerror(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    if(username.value === '') {
        showerror(username, "Username is required")
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showerror(email, "Email is required")
    } else if(!isEmailValid(email.value)) {
        showerror(email,"Email is not valid")
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showerror(password, "Password is required")
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showerror(password2, "Password2 is required")
    } else {
        showSuccess(password2);
    }
});
