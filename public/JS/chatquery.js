function showInConsole(data) {
    console.log(data);
}

fetch("/chat")
.then(res => res.json())
.then(data => showCards(data));

function showCards(data) {
    const cards = data;
    cardsContainer = document.querySelector(".message");
    console.log(cardsContainer);
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        cardsContainer.innerHTML += `
        <div class="card">
        <div><p style="display: table-cell; vertical-align: middle;">${card.message}</p></div>
        </div>
        `
    };
}