import { Card } from './card'

export class Player {
    private _hand: Card[] = [];
    private _name: string;
    private _bet: number;
    private _bags: number;
    private _difficulty: number;
    private _used: boolean = false;

    public giveCard(aCard: Card){
        this._hand.push(aCard);
    }

    public playCard(aCard: Card){
        for (var i = 0; i < this._hand.length-1; i++){
            // if (this._hand[i] === aCard){
            //     this._hand.splice(i,1);
            // }
            if (this._hand[i] === aCard){
                this._hand.slice(i,i+1);
            }
        }
    }

    get hand(): Card[] {
        return this._hand;
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

    get bet(): number{
        return this._bet;
    }

    set bet(newBet: number) {
        if (newBet < 0){
            this._bet = 0
        }
        else { this._bet = newBet; }
        
    }

    get bags(): number {
        return this._bags;
    }

    public addBags(sandBags: number) {
        this._bags += sandBags;
    }

    get difficulty(): number {
        return this._difficulty;
    }

    get used(): boolean {
        return this._used;
    }

    set used(isUsed: boolean) {
        this._used = isUsed;
    }

    public discard(){
        while(this._hand.length > 0){
            this._hand.pop();
        }
    }

    public toString(): string{
        var theString: string = "Name: " + this._name + " Diff: " + this._difficulty;
        return theString;
    }

    constructor(aName: string, aDifficulty: number = 0){
        this._name = aName;
        this._difficulty = aDifficulty;
        this._bags = 0;
    }
}
