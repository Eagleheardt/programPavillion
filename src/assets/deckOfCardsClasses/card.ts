export class Card {
    private _image: string; // picture shown
    private _suit: string = "XXX"; // hearts, spades, clubs, diamonds
    private _number: string; // 2,3,4,5,6,7,8,9,10,J,Q,K,A
    private _value: number = 0; // the game class which implements the deck of cards should set this for how the cards are used
    private _isDelt: boolean = false; // tracks if the card has been delt from the deck

    constructor(image: string, suit: string, number: string) { 
        this._image = image
        this._suit = suit
        this._number = number
    }

    public toString(): string{
        var theString: string = "The " + this._number + " of " + this._suit + " is worth " + this._value;
        return theString;
    }

    get image(): string {
        return this._image;
    }

    get suit(): string {
        return this._suit;
    }

    get number(): string {
        return this._number;
    }

    get value(): number{
        return this._value;
    }

    set value(aValue: number){
        this._value = aValue;
    }

    get isDelt(): boolean {
        return this._isDelt;
    }

    public dealOut(){
        this._isDelt = true;
    }

    public putBack(){
        this._isDelt = false;
    }
}
