let sum = 0
let cards = []
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomnumber = Math.floor(Math.random()*13)+1
    if (randomnumber > 10) {
        return 10
    }else if(randomnumber === 1){
        return 11
    }else{
        return randomnumber
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

