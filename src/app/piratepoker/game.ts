import { Player } from './player'
import { Deck } from './deck';
import { Card } from './card';

export class Game {

    private readonly _NUMBER_OF_PLAYERS: number = 2;
    private readonly _CARDS_PER_HAND: number = 5; // 5 card stud

    private _players: Player[] = [];
    private _deck: Deck = new Deck;
    private _winner: Player;

    get NUMBER_OF_PLAYERS(): number{
        return this._NUMBER_OF_PLAYERS;
    }

    get CARDS_PER_HAND(): number{
        return this._CARDS_PER_HAND;
    }

    get players(): Player[]{
        return this._players;
    }

    get winner(): Player{
        return this._winner;
    }

    private dealCards(arrayOfPlayers: Player[]){
        for(var i = 0; i < this._NUMBER_OF_PLAYERS; i++){
            arrayOfPlayers[i] = new Player();
            for (var j = 0; j < this._CARDS_PER_HAND; j++){
                var tCard = this._deck.getCard();
                arrayOfPlayers[i].giveCard(tCard);
            }// end dealing cards to a player
        }
    }

    private conversion(aCard: Card): number{
        var dict = {
            '2':1,
            '3':2,
            '4':3,
            '5':4,
            '6':5,
            '7':6,
            '8':7,
            '9':8,
            '10':9,
            'J':10,
            'Q':11,
            'K':12,
            'A':13
        };

        if (!(aCard.number in dict)){
            return 0;
        }
        return dict[aCard.number];
    }

    private assignValue(aDeck: Deck){
        aDeck.cards.forEach(card => {
            card.value = this.conversion(card);            
        });
    }

    public clearHands(){
        this._players.forEach(player => {
            player.discard();            
        });
    }

    private calcScore(aPlayer: Player){
        aPlayer.hand.forEach(card => {
            aPlayer.handWorth += card.value;            
        });
    }

    private calcWinner(somePlayers: Player []){
        somePlayers.forEach(person => {
            this.calcScore(person);
        });

        var wPlayer: Player = somePlayers[0];
        // console.log(wPlayer);
        // console.log(somePlayers);
        for(var i = 0; i < somePlayers.length; i++){
            // console.log(somePlayers[i].handWorth);

            if(somePlayers[i].handWorth > wPlayer.handWorth){
                wPlayer = somePlayers[i];
            }
        }
        this._winner = wPlayer;
        console.log(wPlayer);
    }

    constructor (){
        this.assignValue(this._deck);
        this.dealCards(this._players);
        this.calcWinner(this._players);
    }
}