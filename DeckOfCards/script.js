window.onload = () => {
    pullCardButton.onclick = pullCard
}

function pullCard() {
    let fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
    fetch(fullUri)
        .then(res => res.json())
        .then(data => {
            let cardImg = document.createElement("img")
            cardImg.src = data.cards[0].image
            output.innerHTML = ""
            output.appendChild(cardImg)
        })
        .catch(err => console.log(err))
}
