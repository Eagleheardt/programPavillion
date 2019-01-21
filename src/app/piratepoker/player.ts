import { Card } from './card'

export class Player {
    private _hand: Card[] = [];
    private _name: string;
    private _bet: number;
    private _bags: number;
    private _difficulty: number;
    private _used: boolean;

    public giveCard(aCard){
        this._hand.push(aCard);
    }

    get hand(): Card[] {
        return this._hand;
    }

    get name(): string {
        return this._name;
    }

    set name(newName:string) {
        
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
        this._hand.forEach(element => {
            this._hand.pop();            
        });
    }

    constructor(aName: string, aDifficulty: number = 0){
        this._name = aName;
        this._difficulty = aDifficulty;
        this._bags = 0;
        this._used = false;
    }
}
