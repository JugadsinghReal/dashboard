console.log('chat loaded');

//const om de html op te zoeken
const username = document.querySelector("#username");
const emailaddres = document.querySelector("#emailaddres");
const text = document.querySelector("#area");
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
    const emailaddres = document.getElementById("emailaddres");
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

const usernameInput = document.querySelector('.nameInput');

const emailInput = document.querySelector('.emailInput');

const messageInput = document.querySelector('.messageInput');

const sendButton = document.querySelector('.send');

sendButton.addEventListener('click', function (e) {

    //we stop the form from being submitted cause we have our own submit fetch logic

    e.preventDefault();

    e.stopPropagation();

    const name = username.value;

    const email = emailaddres.value;

    const message = text.value;

    (async () => {

        const rawResponse = await fetch('/support', {

            method: 'POST',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({name: name, email: email, message: message })

        });

        const content = await rawResponse.json();

        console.log(content);

        if (content.supportAdded) {

            alert('message is send');

        } else {

            alert('Er ging iets mis bij het senden van de message');

        }

    })();

});

function sendMail() {
    if (username.classList.contains("g") && emailaddres.classList.contains("g") && text.classList.contains("g")) {
        alert("your email has been send :)")
        textArea();
        email();
        user();
        //delete's for the next input, but also deletes it before it gets send to the database.
        //username.value = '';
        //emailaddres.value = '';
        //text.value = '';
    } else {
        alert("you are missing some stuff", sendbtn.classList.remove("shake"));
        sendbtn.classList.add("shake");
    }
}
