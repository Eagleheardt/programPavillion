import { Card } from '../../assets/deckOfCardsClasses/card';

export class HandEval {

    private playerHand: Card[];
    private handScore: number = 0;

    private cardOrder = {
        '2':1,
        '3':2,
        '4':3,
        '5':4,
        '6':5,
        '7':6,
        '8':7,
        '9':8,
        '10':9,
        'J':10,
        'Q':11,
        'K':12,
        'A':13
    };

    private handNumbers = {
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0,
        '10':0,
        'J':0,
        'Q':0,
        'K':0,
        'A':0
    };

    private handSuits = {
        'Spades':0,
        'Hearts':0,
        'Diamonds':0,
        'Clubs':0
    };

    get Value(): number{
        return 3;
    }
}
