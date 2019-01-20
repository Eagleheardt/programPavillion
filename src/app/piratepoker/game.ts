import { Player } from './player'
import { Deck } from './deck';

export class Game {
    private _players: Player[] = [];
    private _deck: Deck;
    private _roundNumber: number;
    private _targetScore: number;
    private _humanPlayer: Player;

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

    public addRound(){
        this._roundNumber ++;
    }

    get targetScore(): number{
        return this._targetScore
    }

    set targetScore(maxScore: number){
        this._targetScore = maxScore;
    }

    public dealCards(arrayOfPlayers: Player[]){
        arrayOfPlayers.forEach(person => {
            person.giveCard(this._deck.getCard());
        });
    }

    public setPlayerName(playerName: string){
        this._humanPlayer.name = playerName;
    }

    private addCPU(){
        var randNum = (Math.floor(Math.random() * 10));
        if (this.cpuPlayers[randNum] && !this.cpuPlayers[randNum].used){
            this._players.push(this.cpuPlayers[randNum]);
        }
        else { this.addCPU(); }
    }

    public addCPUs(){
        for (var i = 0; i < 3; i++){
            this.addCPU();
        }
    }

    public playGame(){
        // need to get the player's name

        // add the players to their array

        this._players.push(this._humanPlayer);
        this.addCPUs();
        this._roundNumber = 1;

    }
}