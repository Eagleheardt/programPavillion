export class Card {
    private image: string;
    private suit: string;
    private number: string;
    private value: number;
    private isDelt: boolean;

    constructor(image, suit, number, value) { 
        this.image = image
        this.suit = suit
        this.number = number
        this.value = value
        this.isDelt = false;
    }

    public delt() {
        return this.isDelt;
    }
}
