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
