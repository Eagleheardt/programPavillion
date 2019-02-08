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

  private readonly CARD_WIDTH_PERCENT: string = "8%";
  private readonly CARD_MARGIN: string = "4px";
  private readonly NODES_TO_LEAVE: number = 0;

  private game: Game;

  private theWinner: string;
  private showWinner: boolean = false;

  // TODO inject cards as JS elements onto the screen

  // GOAL: put 10 random cards on the screen
  // GOAL: put 10 random cards on the screen, from one deck

  private clearNodes = (aNode: Node, amtToLeave: number = this.NODES_TO_LEAVE) => {
    while(aNode.childNodes.length > amtToLeave){
      aNode.removeChild(aNode.lastChild);
    }
  }

  private placeCards = (somePlayer: Player, IDPreFix: string, cardClassName: string, IDwhereItGoes: string) => {
    for (var i = 0; i < somePlayer.hand.length; i++) {

      var img = document.createElement("img");
      
      img.setAttribute("id", IDPreFix + "-" + i);
      img.style.width = this.CARD_WIDTH_PERCENT;
      img.style.maxWidth = this.CARD_WIDTH_PERCENT;
      img.style.marginRight = this.CARD_MARGIN;
      img.className = cardClassName;
  
      img.setAttribute("value", i.toString());

      img.src = somePlayer.hand[i].image;
  
      var src = document.getElementById(IDwhereItGoes);
      src.appendChild(img);
    }
  }

  public newGame(){

    this.game = new Game();

    var compHand = document.getElementById("computerHand");
    var playerHand = document.getElementById("playerCards");

    this.game.players[0].name = "The Computer";
    this.game.players[1].name = "The Player";

    this.clearNodes(compHand);
    this.clearNodes(playerHand);

    this.placeCards(this.game.players[0], "computerHand", "computerHand", "computerHand");
    this.placeCards(this.game.players[1], "playerCards", "playerCards", "playerCards");

    this.showWinner = true;
    this.theWinner = this.game.winner.name;
  }

  constructor() { }

  ngOnInit() {
  }

}