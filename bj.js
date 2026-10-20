let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById ("message-el")
let sumEl = document.getElementById ("sum-el")
let cardEl = document.getElementById ("card-el")


let player = {
    name: "KAVI",
    points: 199
}
let playerEl = document.getElementById ("player-el")
playerEl.textContent = player.name + " : $" + player.points


function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard>10){
       return 10 
    } else if (randomCard===1){
        return 11
    } else
        return randomCard
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()  
}

function renderGame() {
    sumEl.textContent=sum
    cardEl.textContent = ""
    for (let i=0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }    
    if (sum<=20) {
        message="do you want to draw another card?"
    } else if (sum===21) {
        message="congratulation you got the blackjack!"
        hasBlackJack = true
    } else  {
        message="sorry! you out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
