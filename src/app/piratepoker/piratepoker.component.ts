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

  private showTableHand(cardArr: Card[]){
    var picNum: number = 0;

    cardArr.forEach(card => {
      var img = document.createElement("img");
      img.src = card.image;
      img.setAttribute("id", "tableHand-" + picNum);

      img.style.maxWidth = "6%";
  
      var src = document.getElementById("tableHand");
      src.appendChild(img);
      picNum ++;
      
    });
  }

  private showHands(idPreFix: string, player: Player, divToHold: string){
    var picNum: number = 0;

    player.hand.forEach(card => {
      var img = document.createElement("img");
      img.src = card.image;
      img.setAttribute("id", idPreFix + picNum);
      img.style.maxWidth = "6%";
      img.style.marginRight = "4px";
      img.className = "playerHand";
  
      var src = document.getElementById(divToHold);
      src.appendChild(img);
      picNum ++;
    });
  }

  private playCard(aCard: Card){

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

    

    game.playCard(game.players[0].hand[0]);
    game.playCard(game.players[0].hand[0]);
    game.playCard(game.players[0].hand[0]);
    game.playCard(game.players[0].hand[0]);
    
    this.showHands("playerCard-",game.players[0], "playerCards");

    this.showTableHand(game.tableHand)
    
  }

}
