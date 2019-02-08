export class Card {
    private _image: string;
    private _suit: string = "XXX";
    private _number: string;
    private _value: number = 0;
    private _isDelt: boolean = false;

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
