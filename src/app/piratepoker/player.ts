import { Card } from '../../assets/deckOfCardsClasses/card'

export class Player {
    private _hand: Card[] = [];
    private _name: string = "Default";
    private _handWorth: number = 0;

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

    get handWorth(): number{
        return this._handWorth;
    }

    set handWorth(amt: number){
        this._handWorth = amt;
    }

    public toString(): string{
        var theString: string = "Name: " + this._name;
        return theString;
    }

    constructor(){
    }
}
