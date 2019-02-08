import { Card } from './card'

export class Player {
    private _hand: Card[] = [];
    private _name: string;

    public giveCard(aCard: Card){
        this._hand.push(aCard);
    }

    get hand(): Card[] {
        return this._hand;
    }

    public discard(){
        this._hand.length = 0;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        
        if (newName == ''){
            this._name = 'Default';
        }
        else { this._name = newName; }
    }

    public toString(): string{
        var theString: string = "Name: " + this._name;
        return theString;
    }

    constructor(){
    }
}
