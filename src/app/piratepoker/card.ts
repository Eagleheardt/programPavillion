export class Card {
    private _image: string;
    private _suit: string;
    private _number: string;
    private _value: number;
    private _isDelt: boolean = false;

    constructor(image, suit, number, value) { 
        this._image = image
        this._suit = suit
        this._number = number
        this._value = value
    }

    public suit(){
        return this._suit;
    }

    public isDelt() {
        return this._isDelt;
    }

    public dealOut(){
        this._isDelt = true;
    }

    public putBack(){
        this._isDelt = false;
    }
}
