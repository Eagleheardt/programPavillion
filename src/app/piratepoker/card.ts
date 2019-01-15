export class Card {
    private image: string;
    private suit: string;
    private number: number;
    private value: number;

    constructor(image, suit, number, value) { 
        this.image = image
        this.suit = suit
        this.number = number
        this.value = value
    }
}
