import { Card } from './card';

export class Deck {
    
    private cards: Card[] = [
        // Hearts
        new Card ('some path','Heart','A','90'),
        new Card ('some path','Heart','K','90'),
        new Card ('some path','Heart','Q','90'),
        new Card ('some path','Heart','J','90'),
        new Card ('some path','Heart','2','90'),
        new Card ('some path','Heart','3','90'),
        new Card ('some path','Heart','4','90'),
        new Card ('some path','Heart','5','90'),
        new Card ('some path','Heart','6','90'),
        new Card ('some path','Heart','7','90'),
        new Card ('some path','Heart','8','90'),
        new Card ('some path','Heart','9','90'),
        new Card ('some path','Heart','10','90'),
        // Spades
        new Card ('some path','Spade','A','90'),
        new Card ('some path','Spade','K','90'),
        new Card ('some path','Spade','Q','90'),
        new Card ('some path','Spade','J','90'),
        new Card ('some path','Spade','2','90'),
        new Card ('some path','Spade','3','90'),
        new Card ('some path','Spade','4','90'),
        new Card ('some path','Spade','5','90'),
        new Card ('some path','Spade','6','90'),
        new Card ('some path','Spade','7','90'),
        new Card ('some path','Spade','8','90'),
        new Card ('some path','Spade','9','90'),
        new Card ('some path','Spade','10','90'),
        // Diamonds
        new Card ('some path','Diamond','A','90'),
        new Card ('some path','Diamond','K','90'),
        new Card ('some path','Diamond','Q','90'),
        new Card ('some path','Diamond','J','90'),
        new Card ('some path','Diamond','2','90'),
        new Card ('some path','Diamond','3','90'),
        new Card ('some path','Diamond','4','90'),
        new Card ('some path','Diamond','5','90'),
        new Card ('some path','Diamond','6','90'),
        new Card ('some path','Diamond','7','90'),
        new Card ('some path','Diamond','8','90'),
        new Card ('some path','Diamond','9','90'),
        new Card ('some path','Diamond','10','90'),
        // Clubs
        new Card ('some path','Club','A','90'),
        new Card ('some path','Club','K','90'),
        new Card ('some path','Club','Q','90'),
        new Card ('some path','Club','J','90'),
        new Card ('some path','Club','2','90'),
        new Card ('some path','Club','3','90'),
        new Card ('some path','Club','4','90'),
        new Card ('some path','Club','5','90'),
        new Card ('some path','Club','6','90'),
        new Card ('some path','Club','7','90'),
        new Card ('some path','Club','8','90'),
        new Card ('some path','Club','9','90'),
        new Card ('some path','Club','10','90')
        // end of suits, optional 2 jokers below?
    ];
        
    public getCard() {
        var aCard = this.cards[(Math.floor(Math.random() * this.cards.length))];

        if (!aCard.delt()) {
            this.getCard();
        }
        else return aCard;
    }
}