class Card {
    constructor (value, suit) {
        this.value = value;
        this.suit = suit;
    }
    toString() {
        let word1, word2;
        switch (this.value) {
            case 1 : word1 = "Ace"; break;
            case 2 : word1 = "Two"; break;
            case 3 : word1 = "Three"; break;
            case 4 : word1 = "Four"; break;
            case 5 : word1 = "Five"; break;
            case 6 : word1 = "Six"; break;
            case 7 : word1 = "Seven"; break;
            case 8 : word1 = "Eight"; break;
            case 9 : word1 = "Nine"; break;
            case 10 : word1 = "Ten"; break;
            case 11 : word1 = "Jack"; break;
            case 12 : word1 = "Queen"; break;
            case 13 : word1 = "King"; break;
        }
        switch (this.suit) {
            case "clubs" : word2 = "Clubs"; break;
            case "diamonds" : word2 = "Diamonds"; break;
            case "hearts" : word2 = "Hearts"; break;
            case "spades" : word2 = "Spades"; break;
        }
    return word1 + " Of " + this.suit[0].toUpperCase() + this.suit.slice(1).toLowerCase();
    }
  }
  const aceOfSpades = new Card(1, 'spades');
  const tenOfHearts = new Card(10, 'hearts');
  const kingOfDiamonds = new Card(13, 'diamonds');
  console.log(aceOfSpades);
  console.log(aceOfSpades.toString()); // returns 'Card { Ace of Spades }'
  console.log(tenOfHearts.toString()); // returns 'Card { 10 of Hearts }'
  console.log(kingOfDiamonds.toString()); // returns 'Card { King of Diamonds }'
  
  class Deck {
    constructor (){
        this.reset()
    }
    draw() {
      return this.deck.shift()
    }
    reset() {
      this.deck = []
        const suits = ["diamonds", "clubs", "hearts", "spades"]
        suits.forEach(suit => {
          for (let i = 1; i <= 13; i++) {
            this.deck.push(new Card(i, suit))
          }
        })
    }
    shuffle() {
          this.deck = this.deck.sort(function() {
              return 0.5 - Math.random();
          });
      }
  }
  
  const deck1 = new Deck()
  deck1.deck[0].toString()