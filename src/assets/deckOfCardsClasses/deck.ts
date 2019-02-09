import { Card } from './card';

export class Deck {
    
    private _cards: Card[] = [
        // Spades
        new Card ('assets/deckOfCardsImages/ace_of_spades.png','Spades','A'),
        new Card ('assets/deckOfCardsImages/king_of_spades2.png','Spades','K'),
        new Card ('assets/deckOfCardsImages/queen_of_spades2.png','Spades','Q'),
        new Card ('assets/deckOfCardsImages/jack_of_spades2.png','Spades','J'),
        new Card ('assets/deckOfCardsImages/2_of_spades.png','Spades','2'),
        new Card ('assets/deckOfCardsImages/3_of_spades.png','Spades','3'),
        new Card ('assets/deckOfCardsImages/4_of_spades.png','Spades','4'),
        new Card ('assets/deckOfCardsImages/5_of_spades.png','Spades','5',),
        new Card ('assets/deckOfCardsImages/6_of_spades.png','Spades','6'),
        new Card ('assets/deckOfCardsImages/7_of_spades.png','Spades','7'),
        new Card ('assets/deckOfCardsImages/8_of_spades.png','Spades','8'),
        new Card ('assets/deckOfCardsImages/9_of_spades.png','Spades','9'),
        new Card ('assets/deckOfCardsImages/10_of_spades.png','Spades','10'),
        // Hearts
        new Card ('assets/deckOfCardsImages/ace_of_hearts.png','Hearts','A'),
        new Card ('assets/deckOfCardsImages/king_of_hearts2.png','Hearts','K'),
        new Card ('assets/deckOfCardsImages/queen_of_hearts2.png','Hearts','Q'),
        new Card ('assets/deckOfCardsImages/jack_of_hearts2.png','Hearts','J'),
        new Card ('assets/deckOfCardsImages/2_of_hearts.png','Hearts','2'),
        new Card ('assets/deckOfCardsImages/3_of_hearts.png','Hearts','3'),
        new Card ('assets/deckOfCardsImages/4_of_hearts.png','Hearts','4'),
        new Card ('assets/deckOfCardsImages/5_of_hearts.png','Hearts','5'),
        new Card ('assets/deckOfCardsImages/6_of_hearts.png','Hearts','6'),
        new Card ('assets/deckOfCardsImages/7_of_hearts.png','Hearts','7'),
        new Card ('assets/deckOfCardsImages/8_of_hearts.png','Hearts','8'),
        new Card ('assets/deckOfCardsImages/9_of_hearts.png','Hearts','9'),
        new Card ('assets/deckOfCardsImages/10_of_hearts.png','Hearts','10'),
        // Diamonds
        new Card ('assets/deckOfCardsImages/ace_of_diamonds.png','Diamonds','A'),
        new Card ('assets/deckOfCardsImages/king_of_diamonds2.png','Diamonds','K'),
        new Card ('assets/deckOfCardsImages/queen_of_diamonds2.png','Diamonds','Q'),
        new Card ('assets/deckOfCardsImages/jack_of_diamonds2.png','Diamonds','J'),
        new Card ('assets/deckOfCardsImages/2_of_diamonds.png','Diamonds','2'),
        new Card ('assets/deckOfCardsImages/3_of_diamonds.png','Diamonds','3'),
        new Card ('assets/deckOfCardsImages/4_of_diamonds.png','Diamonds','4'),
        new Card ('assets/deckOfCardsImages/5_of_diamonds.png','Diamonds','5'),
        new Card ('assets/deckOfCardsImages/6_of_diamonds.png','Diamonds','6'),
        new Card ('assets/deckOfCardsImages/7_of_diamonds.png','Diamonds','7'),
        new Card ('assets/deckOfCardsImages/8_of_diamonds.png','Diamonds','8'),
        new Card ('assets/deckOfCardsImages/9_of_diamonds.png','Diamonds','9'),
        new Card ('assets/deckOfCardsImages/10_of_diamonds.png','Diamonds','10'),
        // Clubs
        new Card ('assets/deckOfCardsImages/ace_of_clubs.png','Clubs','A'),
        new Card ('assets/deckOfCardsImages/king_of_clubs2.png','Clubs','K'),
        new Card ('assets/deckOfCardsImages/queen_of_clubs2.png','Clubs','Q'),
        new Card ('assets/deckOfCardsImages/jack_of_clubs2.png','Clubs','J'),
        new Card ('assets/deckOfCardsImages/2_of_clubs.png','Clubs','2'),
        new Card ('assets/deckOfCardsImages/3_of_clubs.png','Clubs','3'),
        new Card ('assets/deckOfCardsImages/4_of_clubs.png','Clubs','4'),
        new Card ('assets/deckOfCardsImages/5_of_clubs.png','Clubs','5'),
        new Card ('assets/deckOfCardsImages/6_of_clubs.png','Clubs','6'),
        new Card ('assets/deckOfCardsImages/7_of_clubs.png','Clubs','7'),
        new Card ('assets/deckOfCardsImages/8_of_clubs.png','Clubs','8'),
        new Card ('assets/deckOfCardsImages/9_of_clubs.png','Clubs','9'),
        new Card ('assets/deckOfCardsImages/10_of_clubs.png','Clubs','10')
        
        // end of suits, optional 2 jokers below?
    ];

    private readonly _cardBack: Card = new Card ('assets/deckOfCardsImages/ZZZ_Card_Backing.png','XXX','0');

    get CardBack() : Card{
        return this._cardBack;
    }
        
    public getCard(): Card {
        do{
            var randIndex = (Math.floor(Math.random() * this._cards.length));
            var aCard = this._cards[randIndex];

        } while(aCard.isDelt);

        aCard.dealOut();
        return aCard;
    }

    public getAnyCard(): Card{
        var randIndex = (Math.floor(Math.random() * this._cards.length));
        return this._cards[randIndex];
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