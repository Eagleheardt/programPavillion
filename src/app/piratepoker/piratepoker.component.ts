import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { Player } from './player';
import { Card } from './card';

@Component({
  selector: 'app-piratepoker',
  templateUrl: './piratepoker.component.html',
  styleUrls: ['./piratepoker.component.css']
})

export class PiratepokerComponent implements OnInit {

  // TODO need a redraw method that will look at the player hand and place only their current cards on the table

  private redraw(sourceID: string){
    var cards = document.getElementById(sourceID).children;
    
    for(var i = 0; i < cards.length; i++){
      console.log(cards[i]);
      // cards[i].remove();
    }
  }

  public showTableHand(cardArr: Card[]){
    var picNum: number = 0;

    cardArr.forEach(card => {
      var img = document.createElement("img");
      img.src = card.image;
      img.setAttribute("id", "tableHand-" + picNum);
      img.style.marginRight = "4px";
      img.style.maxWidth = "6%";
  
      var src = document.getElementById("tableHand");
      src.appendChild(img);
      picNum ++;
      
    });
  }

  private moveTheCard(aGame: Game, index: number){
    aGame.playCard(aGame.players[0].hand[index]);
    this.showHands("playerCard-",aGame.players[0], "playerCards", aGame);
    this.showTableHand(aGame.tableHand);
  }

  private showHands(idPreFix: string, player: Player, divToHold: string, aGame: Game){

    for(var i = 0; i < player.hand.length; i++){
      var img = document.createElement("img");
      img.src = player.hand[i].image;
      img.setAttribute("id", idPreFix + i);
      img.style.maxWidth = "6%";
      img.style.marginRight = "4px";
      img.className = "playerHand";
      img.setAttribute("onclick","moveTheCard(" + aGame + "," + i + ");");
      // todo: try to use display:none on the card played, and also put all 52 cards in the table hand and only show what's there

      
      // img.addEventListener('click', function () {
      //   console.log(aGame.players[0].hand[0]);
      //   aGame.playCard(aGame.players[0].hand[0]);
      //   moveTheCard(player,aGame,i);
      // });
  
      var src = document.getElementById(divToHold);
      src.appendChild(img);
    }
    this.showTableHand(aGame.tableHand)
  }

  private playCard(aGame: Game, aCard: Card){

    var img = document.createElement("img");
    img.src = aCard.image;
    img.setAttribute("id", "tableHand-" + aCard.value);
    img.style.maxWidth = "6%";

    var src = document.getElementById("tableHand");
    src.appendChild(img);
  }

  constructor() { 
    
  }

  ngOnInit() {
    var game: Game = new Game();
    game.playRound();

    // game.playCard(game.players[0].hand[0]);
    // game.playCard(game.players[0].hand[0]);
    // game.playCard(game.players[0].hand[0]);
    // game.playCard(game.players[0].hand[0]);
    // game.playCard(game.players[0].hand[0]);
    // game.playCard(game.players[0].hand[0]);
    // game.playCard(game.players[0].hand[0]);
    
    this.showHands("playerCard-",game.players[0], "playerCards", game);
    this.showTableHand(game.tableHand);
  }

}
