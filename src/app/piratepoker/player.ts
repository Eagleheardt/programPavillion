import { Card } from './card'

export class Player {
    private _hand: Card[] = [];
    private _name: string;
    private _bet: number;
    private _bags: number;
    private _difficulty: number;

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
        this._name = newName;
    }

    get bet(): number{
        return this._bet;
    }

    set bet(newBet: number) {
        this._bet = newBet;
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

    constructor(aName: string, aDifficulty: number){
        this._name = aName;
        this._difficulty = aDifficulty;
        this._bags = 0;
    }

}
