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
function isEmailValid(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else  {
        showerror(input, "Email is not valid");
    }
}

function checkRequired(arr) {
    arr.forEach(function(input){
        if(input.value.trim() === '') {
            showerror(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showerror(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showerror(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// make first letter of field id uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showerror(input2,"Passwords do not match");
    }
}
//event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    isEmailValid(email);
    checkPasswordsMatch(password, password2);
});
