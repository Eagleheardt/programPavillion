import { Player } from './player'
import { Deck } from './deck';
import { Card } from './card';

export class Game {
    private _players: Player[] = [];
    private _playerOrder: number[] = [];
    private _deck: Deck = new Deck;
    private _roundNumber: number;
    private _targetScore: number;
    private _currentScore: number;
    private _humanPlayer: Player;
    private _winner: Player;
    private _tableHand: Card[];

    private cpuPlayers: Player[] = [
        new Player('Chris', 1),
        new Player('Randa', 2),
        new Player('Gary', 3),
        new Player('Jim', 4),
        new Player('Clay', 5),
        new Player('Charlie', 6),
        new Player('Alan', 7),
        new Player('Octavio', 8),
        new Player('George', 9),
        new Player('Andre', 10)
    ];

    get roundNumber(): number{
        return this._roundNumber;
    }

    private addRound(){
        this._roundNumber ++;
    }

    get targetScore(): number{
        return this._targetScore
    }

    set targetScore(maxScore: number){
        this._targetScore = maxScore;
    }

    get currentScore(): number{
        return this._currentScore
    }

    set currentScore(aScore: number){
        this._currentScore = aScore;
    }

    get winner(): Player{
        return this._winner;
    }

    set winner(aWinner: Player){
        this._winner = aWinner;
    }

    public addScore(aScore: number){
        this._currentScore += aScore;
    }

    private dealCards(arrayOfPlayers: Player[]){
        arrayOfPlayers.forEach(person => {
            for (var i = 0; i < 13; i++){
                person.giveCard(this._deck.getCard());
            }// end dealing 13 cards to a player
        }); // end forEach
    }

    private clearHands(){
        this._players.forEach(element => {
            element.discard();
        });
    }

    private clearTable(){
        this._tableHand.forEach(element => {
            this._tableHand.pop();            
        });
    }

    public setPlayerName(playerName: string){
        this._humanPlayer.name = playerName;
    }

    private addCPU(){
        var randNum = (Math.floor(Math.random() * 10));
        if (this.cpuPlayers[randNum] && !this.cpuPlayers[randNum].used){
            this.cpuPlayers[randNum].used = true;
            this._players.push(this.cpuPlayers[randNum]);
        }
        else { this.addCPU(); }
    }

    private addCPUs(){
        for (var i = 0; i < 4; i++){
            this.addCPU();
        }
    }

    public getPlayerCard(){

    }

    private setCards(){

    }

    public playRound(){

        this.clearHands();
        this.dealCards(this._players);

        this.addRound();
    }

    public playGame(){
        // TODO get the player's name
        var lastIndex: number = 0;

        // adding the players to their array

        this._players.push(this._humanPlayer);
        this.addCPUs();

        // set round
        this._roundNumber = 1;

        while (this._currentScore < this._targetScore) {
            this.playRound();            
        }
    }

    constructor (){

        this.addCPUs();
    }
}