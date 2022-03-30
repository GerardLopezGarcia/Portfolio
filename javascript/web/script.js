
//counter APP
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//counter APP END!

//calculator app
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = ""
function add() {
    sum = num1 + num2 
    document.getElementById("sum-el").textContent = "Sum :" +  sum
}

function substract() {
    sum = num1 - num2
    document.getElementById("sum-el").textContent = "Sum :" +  sum
}

function divide() {
    sum = num1/num2
    document.getElementById("sum-el").textContent = "Sum :" +  sum
}

function multiply() {
    sum = num1 * num2
    document.getElementById("sum-el").textContent = "Sum :" +  sum
}
//calculator app end

//BLACKJACK APP//
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}

let cards = []
let bsum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let bsumEl = document.getElementById("bsum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    bsum = firstCard + secondCard
    console.log(bsum)
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    bsumEl.textContent = "Sum: " + bsum
    if (bsum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (bsum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        bsum += card
        cards.push(card)
        renderGame()        
    }
}

//Blackjack app END!!!//