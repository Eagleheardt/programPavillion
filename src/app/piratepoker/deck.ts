import { Card } from './card';

export class Deck {
    
    private _cards: Card[] = [
        // Spades
        new Card ('assets/challenges/cardPics/ace_of_spades.png','Spades','A',100),
        new Card ('assets/challenges/cardPics/king_of_spades2.png','Spades','K',90),
        new Card ('assets/challenges/cardPics/queen_of_spades2.png','Spades','Q',80),
        new Card ('assets/challenges/cardPics/jack_of_spades2.png','Spades','J',70),
        new Card ('assets/challenges/cardPics/2_of_spades.png','Spades','2',61),
        new Card ('assets/challenges/cardPics/3_of_spades.png','Spades','3',62),
        new Card ('assets/challenges/cardPics/4_of_spades.png','Spades','4',63),
        new Card ('assets/challenges/cardPics/5_of_spades.png','Spades','5',64),
        new Card ('assets/challenges/cardPics/6_of_spades.png','Spades','6',65),
        new Card ('assets/challenges/cardPics/7_of_spades.png','Spades','7',66),
        new Card ('assets/challenges/cardPics/8_of_spades.png','Spades','8',67),
        new Card ('assets/challenges/cardPics/9_of_spades.png','Spades','9',68),
        new Card ('assets/challenges/cardPics/10_of_spades.png','Spades','10',69),
        // Hearts
        new Card ('assets/challenges/cardPics/ace_of_hearts.png','Hearts','A',53),
        new Card ('assets/challenges/cardPics/king_of_hearts2.png','Hearts','K',52),
        new Card ('assets/challenges/cardPics/queen_of_hearts2.png','Hearts','Q',51),
        new Card ('assets/challenges/cardPics/jack_of_hearts2.png','Hearts','J',50),
        new Card ('assets/challenges/cardPics/2_of_hearts.png','Hearts','2',41),
        new Card ('assets/challenges/cardPics/3_of_hearts.png','Hearts','3',42),
        new Card ('assets/challenges/cardPics/4_of_hearts.png','Hearts','4',43),
        new Card ('assets/challenges/cardPics/5_of_hearts.png','Hearts','5',44),
        new Card ('assets/challenges/cardPics/6_of_hearts.png','Hearts','6',45),
        new Card ('assets/challenges/cardPics/7_of_hearts.png','Hearts','7',46),
        new Card ('assets/challenges/cardPics/8_of_hearts.png','Hearts','8',47),
        new Card ('assets/challenges/cardPics/9_of_hearts.png','Hearts','9',48),
        new Card ('assets/challenges/cardPics/10_of_hearts.png','Hearts','10',49),
        // Diamonds
        new Card ('assets/challenges/cardPics/ace_of_diamonds.png','Diamonds','A',33),
        new Card ('assets/challenges/cardPics/king_of_diamonds2.png','Diamonds','K',32),
        new Card ('assets/challenges/cardPics/queen_of_diamonds2.png','Diamonds','Q',31),
        new Card ('assets/challenges/cardPics/jack_of_diamonds2.png','Diamonds','J',30),
        new Card ('assets/challenges/cardPics/2_of_diamonds.png','Diamonds','2',21),
        new Card ('assets/challenges/cardPics/3_of_diamonds.png','Diamonds','3',22),
        new Card ('assets/challenges/cardPics/4_of_diamonds.png','Diamonds','4',23),
        new Card ('assets/challenges/cardPics/5_of_diamonds.png','Diamonds','5',24),
        new Card ('assets/challenges/cardPics/6_of_diamonds.png','Diamonds','6',25),
        new Card ('assets/challenges/cardPics/7_of_diamonds.png','Diamonds','7',26),
        new Card ('assets/challenges/cardPics/8_of_diamonds.png','Diamonds','8',27),
        new Card ('assets/challenges/cardPics/9_of_diamonds.png','Diamonds','9',28),
        new Card ('assets/challenges/cardPics/10_of_diamonds.png','Diamonds','10',29),
        // Clubs
        new Card ('assets/challenges/cardPics/ace_of_clubs.png','Clubs','A',13),
        new Card ('assets/challenges/cardPics/king_of_clubs2.png','Clubs','K',12),
        new Card ('assets/challenges/cardPics/queen_of_clubs2.png','Clubs','Q',11),
        new Card ('assets/challenges/cardPics/jack_of_clubs2.png','Clubs','J',10),
        new Card ('assets/challenges/cardPics/2_of_clubs.png','Clubs','2',1),
        new Card ('assets/challenges/cardPics/3_of_clubs.png','Clubs','3',2),
        new Card ('assets/challenges/cardPics/4_of_clubs.png','Clubs','4',3),
        new Card ('assets/challenges/cardPics/5_of_clubs.png','Clubs','5',4),
        new Card ('assets/challenges/cardPics/6_of_clubs.png','Clubs','6',5),
        new Card ('assets/challenges/cardPics/7_of_clubs.png','Clubs','7',6),
        new Card ('assets/challenges/cardPics/8_of_clubs.png','Clubs','8',7),
        new Card ('assets/challenges/cardPics/9_of_clubs.png','Clubs','9',8),
        new Card ('assets/challenges/cardPics/10_of_clubs.png','Clubs','10',9)
        // end of suits, optional 2 jokers below?
    ];

    private readonly _cardBack: Card = new Card ('assets/challenges/cardPics/ZZZ_Card_Backing.png','XXX','0',0);

    get CardBack() : Card{
        return this._cardBack;
    }
        
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