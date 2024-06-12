console.log("chat loaded");

//const om de html op te zoeken
let response = document.querySelector(".response");
const text = document.querySelector("#area");
const sendbtn = document.querySelector(".send");
sendbtn.addEventListener("click", sendMail);


const sendButton = document.querySelector(".send");

sendButton.addEventListener("click", function (e) {
  //we stop the form from being submitted cause we have our own submit fetch logic

  e.preventDefault();

  e.stopPropagation();

  
  const messageInput = document.querySelector(".messageInput");

  const message = messageInput.value;


  (async () => {
    const rawResponse = await fetch("/chat", {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },

      body: JSON.stringify({message: message }),
    });

    const content = await rawResponse.json();

    console.log(content);

    if (content.chatAdded) {
      alert("message is send");
    } else {
      alert("Er ging iets mis bij het senden van de message");
    }
  })();
});

let elem = document.getElementsByClassName("card");
function count() {
  setTimeout(() => {  console.log(elem.length); }, 100);
  setTimeout(() => {response.innerHTML = (elem.length); }, 200);
}
count();

function sendMail() { 
    location.reload()
  };

