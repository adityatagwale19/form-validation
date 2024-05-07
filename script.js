let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("Submit-error");

// for name validation
function validateName(){
    let name = document.getElementById("full-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

//for phone number validation
function validatePhone(){
    let phone = document.getElementById("phone-num").value;
  
    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no. should be 10 digit";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "only digits please";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

//for email validation
function validateEmail(){
    let email = document.getElementById("email-Id").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Emial invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

//for message validation
function validateMessage(){
    let message = document.getElementById("inputMessage").value;
    let required = 20;
    let left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ` more characters required`;
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

//for submit error
function validateForm(){
    if(!validateName() || validatePhone() || validateEmail() || validateMessage()){
        submitError.style.color = "red";
        submitError.style.display = "block";
        submitError.innerHTML = "Please fill required fields.";
        setTimeout(function(){
            submitError.style.display = "none";
        },3000)
        return false;
    }
}