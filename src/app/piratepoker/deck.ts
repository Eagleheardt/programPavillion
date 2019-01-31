import { Card } from './card';

export class Deck {
    
    private _cards: Card[] = [
        // Spades
        new Card ('assets/challenges/cardPics/ace_of_spades.png','Spade','A',100),
        new Card ('assets/challenges/cardPics/king_of_spades2.png','Spade','K',90),
        new Card ('assets/challenges/cardPics/queen_of_spades2.png','Spade','Q',80),
        new Card ('assets/challenges/cardPics/jack_of_spades2.png','Spade','J',70),
        new Card ('assets/challenges/cardPics/2_of_spades.png','Spade','2',61),
        new Card ('assets/challenges/cardPics/3_of_spades.png','Spade','3',62),
        new Card ('assets/challenges/cardPics/4_of_spades.png','Spade','4',63),
        new Card ('assets/challenges/cardPics/5_of_spades.png','Spade','5',64),
        new Card ('assets/challenges/cardPics/6_of_spades.png','Spade','6',65),
        new Card ('assets/challenges/cardPics/7_of_spades.png','Spade','7',66),
        new Card ('assets/challenges/cardPics/8_of_spades.png','Spade','8',67),
        new Card ('assets/challenges/cardPics/9_of_spades.png','Spade','9',68),
        new Card ('assets/challenges/cardPics/10_of_spades.png','Spade','10',69),
        // Hearts
        new Card ('assets/challenges/cardPics/ace_of_hearts.png','Heart','A',53),
        new Card ('assets/challenges/cardPics/king_of_hearts2.png','Heart','K',52),
        new Card ('assets/challenges/cardPics/queen_of_hearts2.png','Heart','Q',51),
        new Card ('assets/challenges/cardPics/jack_of_hearts2.png','Heart','J',50),
        new Card ('assets/challenges/cardPics/2_of_hearts.png','Heart','2',41),
        new Card ('assets/challenges/cardPics/3_of_hearts.png','Heart','3',42),
        new Card ('assets/challenges/cardPics/4_of_hearts.png','Heart','4',43),
        new Card ('assets/challenges/cardPics/5_of_hearts.png','Heart','5',44),
        new Card ('assets/challenges/cardPics/6_of_hearts.png','Heart','6',45),
        new Card ('assets/challenges/cardPics/7_of_hearts.png','Heart','7',46),
        new Card ('assets/challenges/cardPics/8_of_hearts.png','Heart','8',47),
        new Card ('assets/challenges/cardPics/9_of_hearts.png','Heart','9',48),
        new Card ('assets/challenges/cardPics/10_of_hearts.png','Heart','10',49),
        // Diamonds
        new Card ('assets/challenges/cardPics/ace_of_diamonds.png','Diamond','A',33),
        new Card ('assets/challenges/cardPics/king_of_diamonds2.png','Diamond','K',32),
        new Card ('assets/challenges/cardPics/queen_of_diamonds2.png','Diamond','Q',31),
        new Card ('assets/challenges/cardPics/jack_of_diamonds2.png','Diamond','J',30),
        new Card ('assets/challenges/cardPics/2_of_diamonds.png','Diamond','2',21),
        new Card ('assets/challenges/cardPics/3_of_diamonds.png','Diamond','3',22),
        new Card ('assets/challenges/cardPics/4_of_diamonds.png','Diamond','4',23),
        new Card ('assets/challenges/cardPics/5_of_diamonds.png','Diamond','5',24),
        new Card ('assets/challenges/cardPics/6_of_diamonds.png','Diamond','6',25),
        new Card ('assets/challenges/cardPics/7_of_diamonds.png','Diamond','7',26),
        new Card ('assets/challenges/cardPics/8_of_diamonds.png','Diamond','8',27),
        new Card ('assets/challenges/cardPics/9_of_diamonds.png','Diamond','9',28),
        new Card ('assets/challenges/cardPics/10_of_diamonds.png','Diamond','10',29),
        // Clubs
        new Card ('assets/challenges/cardPics/ace_of_clubs.png','Club','A',13),
        new Card ('assets/challenges/cardPics/king_of_clubs2.png','Club','K',12),
        new Card ('assets/challenges/cardPics/queen_of_clubs2.png','Club','Q',11),
        new Card ('assets/challenges/cardPics/jack_of_clubs2.png','Club','J',10),
        new Card ('assets/challenges/cardPics/2_of_clubs.png','Club','2',1),
        new Card ('assets/challenges/cardPics/3_of_clubs.png','Club','3',2),
        new Card ('assets/challenges/cardPics/4_of_clubs.png','Club','4',3),
        new Card ('assets/challenges/cardPics/5_of_clubs.png','Club','5',4),
        new Card ('assets/challenges/cardPics/6_of_clubs.png','Club','6',5),
        new Card ('assets/challenges/cardPics/7_of_clubs.png','Club','7',6),
        new Card ('assets/challenges/cardPics/8_of_clubs.png','Club','8',7),
        new Card ('assets/challenges/cardPics/9_of_clubs.png','Club','9',8),
        new Card ('assets/challenges/cardPics/10_of_clubs.png','Club','10',9)
        // end of suits, optional 2 jokers below?
    ];
        
    public getCard(): Card {

        do{
            var ranIndex = (Math.floor(Math.random() * this._cards.length));
            var aCard = this._cards[ranIndex];

        } while(aCard.isDelt);

        aCard.dealOut();
        return aCard;
    }

    public shuffle() {
        this._cards.forEach(aCard => {
            aCard.putBack();
        });
    }

    get cards(): Card[] {
        return this._cards;
    }
    
    constructor(){
        
    }
}