//const om de html op te zoeken
const username = document.querySelector(".username");
const emailaddres = document.querySelector(".emailaddres");
const text = document.querySelector(".area");
const sendbtn = document.querySelector(".send");
const p1 = document.querySelector(".p");
sendbtn.addEventListener("click", sendMail);

function validity() {
    if (!username.checkValidity())
        username.reportValidity();
    if (!text.checkValidity())
        text.reportValidity();
}

//function voor de username
function user() {
    if (username.value != "") {
        username.classList.remove("r");
        username.classList.add("g");
        validity();
    } else {
        username.classList.add("r");
        username.classList.remove("g");
        validity();
    }

}

//function voor de mail
function email() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailaddres.value == "") {
        emailaddres.reportValidity();
        emailaddres.classList.add("r");
        emailaddres.classList.remove("g");
    } else if (emailPattern.test(emailaddres.value)) {
        emailaddres.reportValidity();
        emailaddres.classList.remove("r");
        emailaddres.classList.add("g");
    } else {
        emailaddres.reportValidity();
        emailaddres.classList.add("r");
        emailaddres.classList.remove("g");
    }
}

// function voor het wachtwoord
function textArea() {
    if (text.value != "") {
        text.classList.remove("r");
        text.classList.add("g");
    } else {
        text.classList.add("r");
        text.classList.remove("g");
    }
}

function sendMail() {
    if (username.classList.contains("g") && emailaddres.classList.contains("g") && text.classList.contains("g")) {
        alert("your email has been send :)")
        username.value = '';
        emailaddres.value = '';
        text.value = '';
        textArea();
        email();
        user();
    } else {
        alert("you are missing some stuff", sendbtn.classList.remove("shake"));
        sendbtn.classList.add("shake");
    }
}




