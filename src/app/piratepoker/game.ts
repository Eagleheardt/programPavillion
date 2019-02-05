import { Player } from './player'
import { Deck } from './deck';
import { Card } from './card';

export class Game {

    private readonly _NUMBER_OF_PLAYERS: number = 4; // this can only be 2 or 4
    private readonly _CARDS_PER_HAND: number = (52 / this._NUMBER_OF_PLAYERS);

    get NUMBER_OF_PLAYERS(): number{
        return this._NUMBER_OF_PLAYERS;
    }

    get CARDS_PER_HAND(): number{
        return this._CARDS_PER_HAND;
    }

    private _players: Player[] = [];
    private _playerOrder: number[] = [];
    private _deck: Deck = new Deck;
    private _roundNumber: number;
    private _targetScore: number;
    private _currentScore: number;
    private _humanPlayer: Player;
    private _winner: Player;
    private _tableHand: Card[] = [];

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
    ]; // end of CPU array

    get roundNumber(): number{
        return this._roundNumber;
    }

    get tableHand(): Card[]{
        return this._tableHand;
    }

    get players(): Player[]{
        return this._players;
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
            console.log("x " + person.name);
            for (var i = 0; i < this._CARDS_PER_HAND; i++){
                var tCard = this._deck.getCard();
                person.giveCard(tCard);
                console.log(tCard.toString());

            }// end dealing cards to a player
        }); // end forEach
    }

    private clearHands(){
        this._players.forEach(player => {
            player.discard();            
        });
    }

    public addCardToTable(aPlayer: Player, someCard: Card){
        aPlayer.playCard(someCard)
        this._tableHand.push(someCard);
    }

    public clearTable(){
        while(this._tableHand.length > 0){
            this._tableHand.pop(); 
        }
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
        for (var i = 0; i < this._NUMBER_OF_PLAYERS; i++){
            this.addCPU();
        }
    }

    public playCard(player: Player, aCard: Card){
        player.playCard(aCard);
        this._tableHand.push(aCard);
    }

    public playRound(){
        this.clearHands();
        this._deck.shuffle();
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