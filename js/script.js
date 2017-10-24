var email = document.getElementById('email');
var state = document.getElementById('state');
var phone = document.getElementById('phone');
var date = document.getElementById('dob');
var button = document.getElementById('submit');
button.addEventListener('click', checkForm);

function checkForm() {
    if (email.value == "") {
        alert('Please enter a valid email address!');
        email.style.borderColor = "red";
    }
    if (state.value == "") {
        alert('Please enter a valid Country/State!');
        state.style.borderColor = "red";
    }
    if (phone.value == "") {
        alert('Please enter a valid phone number!');
        phone.style.borderColor = "red";
    }
    if (date.value == "") {
        alert('Please enter a valid birthday!');
        date.style.borderColor = "red";
    }
}
