// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
let player = {    
    name: "Per",
    chips: 145,
    sayHello: function() {
        console.log("heisann")
    }    
}
player.sayHello()

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard(){
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
} 


function renderGame() {
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent +=cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum < 21) {
        message = "Do you want to draw card"
    }
    
    else if (sum === 21) {
        message = "You won BlackJack"
        hasBlackJack = true
        let isAlive = true
    }
    
    else {
        message = "You are out of the game"
        isAlive = false
    }
    // console.log(hasBlackJack)
    // console.log(isAlive)
    messageEl.textContent = message
    // console.log(message)
}

function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}





