const SUITS = ["♠","♣","♥","♦"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const CONTEXT = ["stockPile", "openPile", "bay", "stack1", "stack2", "stack3", "stack4", "stack5", "stack6", "stack7"]
var hidden;
export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
        
    }

    get numberOfCards () {
        return this.cards.length
    }

    shuffle () {
        for (let i = this.numberOfCards - 1; i > 0; i-- ) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

    pop() {
        return this.cards.shift()
    }

    push(card) {
        this.cards.push(card)
    }

}

class Card {
    constructor(suit, value, context){
        this.suit = suit;
        this.value = value;
        this.closed = true;
        this.container = context;
        this.selected = false;
    }

    get color() {
        return this.suit === "♠" || this.suit === "♣" ? 'black' : 'red'
    }


     createCardDiv() {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add("card", this.color)
        //cardDiv.draggable = true
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        
        return cardDiv
       
        // }

        
    }

    
}

function freshDeck () {
    return SUITS.flatMap(suit => {
        return VALUES.map( value => {
            return new Card(suit, value, "stockPile")
        })
    })

}

