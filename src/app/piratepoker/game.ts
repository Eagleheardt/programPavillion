import { Player } from './player'
import { Deck } from './deck';
import { Card } from './card';

export class Game {

    private readonly _NUMBER_OF_PLAYERS: number = 2;
    private readonly _CARDS_PER_HAND: number = 5; // 5 card stud

    get NUMBER_OF_PLAYERS(): number{
        return this._NUMBER_OF_PLAYERS;
    }

    get CARDS_PER_HAND(): number{
        return this._CARDS_PER_HAND;
    }

    private _players: Player[] = [];
    private _deck: Deck = new Deck;
    private _winner: Player;

    get players(): Player[]{
        return this._players;
    }

    get winner(): Player{
        return this._winner;
    }

    set winner(aWinner: Player){
        this._winner = aWinner;
    }

    private dealCards(arrayOfPlayers: Player[]){
        for(var i = 0; i < this._NUMBER_OF_PLAYERS; i++){
            arrayOfPlayers[i] = new Player();
            for (var j = 0; j < this._CARDS_PER_HAND; j++){
                var tCard = this._deck.getCard();
                arrayOfPlayers[i].giveCard(tCard);
            }// end dealing cards to a player
        }
        arrayOfPlayers.forEach(person => {
            
        }); // end forEach
    }

    private clearHands(){
        this._players.forEach(player => {
            player.discard();            
        });
    }

    constructor (){
        this.dealCards(this._players);
    }
}