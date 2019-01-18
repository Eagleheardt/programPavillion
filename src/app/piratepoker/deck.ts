import { Card } from './card';

export class Deck {
    
    private cards: Card[] = [
        // Spades
        new Card ('./cardPics/ace_of_spades.png','Spade','A',100),
        new Card ('some path','Spade','K',90),
        new Card ('some path','Spade','Q',80),
        new Card ('some path','Spade','J',70),
        new Card ('some path','Spade','2',61),
        new Card ('some path','Spade','3',62),
        new Card ('some path','Spade','4',63),
        new Card ('some path','Spade','5',64),
        new Card ('some path','Spade','6',65),
        new Card ('some path','Spade','7',66),
        new Card ('some path','Spade','8',67),
        new Card ('some path','Spade','9',68),
        new Card ('some path','Spade','10',69),
        // Hearts
        new Card ('some path','Heart','A',53),
        new Card ('some path','Heart','K',52),
        new Card ('some path','Heart','Q',51),
        new Card ('some path','Heart','J',50),
        new Card ('some path','Heart','2',41),
        new Card ('some path','Heart','3',42),
        new Card ('some path','Heart','4',43),
        new Card ('some path','Heart','5',44),
        new Card ('some path','Heart','6',45),
        new Card ('some path','Heart','7',46),
        new Card ('some path','Heart','8',47),
        new Card ('some path','Heart','9',48),
        new Card ('some path','Heart','10',49),
        // Diamonds
        new Card ('some path','Diamond','A',33),
        new Card ('some path','Diamond','K',32),
        new Card ('some path','Diamond','Q',31),
        new Card ('some path','Diamond','J',30),
        new Card ('some path','Diamond','2',21),
        new Card ('some path','Diamond','3',22),
        new Card ('some path','Diamond','4',23),
        new Card ('some path','Diamond','5',24),
        new Card ('some path','Diamond','6',25),
        new Card ('some path','Diamond','7',26),
        new Card ('some path','Diamond','8',27),
        new Card ('some path','Diamond','9',28),
        new Card ('some path','Diamond','10',29),
        // Clubs
        new Card ('some path','Club','A',13),
        new Card ('some path','Club','K',12),
        new Card ('some path','Club','Q',11),
        new Card ('some path','Club','J',10),
        new Card ('some path','Club','2',1),
        new Card ('some path','Club','3',2),
        new Card ('some path','Club','4',3),
        new Card ('some path','Club','5',4),
        new Card ('some path','Club','6',5),
        new Card ('some path','Club','7',6),
        new Card ('some path','Club','8',7),
        new Card ('some path','Club','9',8),
        new Card ('some path','Club','10',9)
        // end of suits, optional 2 jokers below?
    ];
        
    public getCard() {

        var ranIndex = (Math.floor(Math.random() * this.cards.length));
        var aCard = this.cards[ranIndex];

        if (!aCard.isDelt()) {
            this.getCard();
        }
        aCard.dealOut();
        return aCard;
    }
}