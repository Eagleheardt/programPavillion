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

  private humanName: string;
  private computerName: string;

  private cardsUsed: number = 0;

  private readonly cardBack: Card = new Card ('assets/challenges/cardPics/ZZZ_Card_Backing.png','XXX','0',0);

  private readonly CARD_WIDTH_PERCENT: string = "4%";
  private readonly CARD_WIDTH_PIXELS: string = "60px";
  private readonly CARD_MARGIN: string = "4px";

  private clearNodes = (aNode: Node, amtToLeave: number = 2) => {
    while(aNode.childNodes.length > amtToLeave){
      aNode.removeChild(aNode.lastChild);
    }
  }

//   private movePics = (aGame:Game, somePlayer: Player) => {
//   var anon = () => {
//     this.movePics(aGame,somePlayer);
//   }

//     aGame.playCard(somePlayer, somePlayer.hand[parseInt(this.getAttribute("value"))]);
//     var tableDisplay = document.getElementById("tableHand");
//     tableDisplay.appendChild(this);
//     this.cardsUsed ++;

//     if (aGame.tableHand.length % aGame.NUMBER_OF_PLAYERS == 0) {
//       this.clearNodes(tableDisplay);
//       aGame.clearTable();
//     }

//     if(this.cardsUsed == somePlayer.hand.length){
//       aGame.playRound();
//       aGame.clearTable();
//       this.cardsUsed = 0;
//       // remove all nodes and redraw
//       this.clearNodes(tableDisplay);

//       var playerDisplay = document.getElementById("playerCards");
//       var cpuDisplay = document.getElementById("computerHand");

//       this.clearNodes(playerDisplay);
//       this.clearNodes(cpuDisplay);

//       this.placeCards(aGame, aGame.players[0], somePreFix, "playerHand", "playerCards", true, anon);
//       this.placeCards(aGame, aGame.players[1], somePreFix, "playerHand", "computerHand", false);
//     }
//     removeEventListener("click", anon);
// }

  private placeCards = (aGame:Game, somePlayer: Player, somePreFix: string, className: string, IDwhereItGoes: string, isPlayer: boolean, someFunc = null) => {

    var tableDisplay = document.getElementById("tableHand");
    var clearNodes = this.clearNodes(tableDisplay);

    var movePics = function() {
        aGame.playCard(somePlayer, somePlayer.hand[parseInt(this.getAttribute("value"))]);
        className = "tableHand";
        
        tableDisplay.appendChild(this);
        this.cardsUsed ++;
  
        if (aGame.tableHand.length % aGame.NUMBER_OF_PLAYERS == 0) {
          clearNodes;
          aGame.clearTable();
        }
  
        if(this.cardsUsed == somePlayer.hand.length){
          aGame.playRound();
          aGame.clearTable();
          this.cardsUsed = 0;
          // remove all nodes and redraw
          clearNodes;
  
          var playerDisplay = document.getElementById("playerCards");
          var cpuDisplay = document.getElementById("computerHand");
  
          this.clearNodes(playerDisplay);
          this.clearNodes(cpuDisplay);
  
          this.placeCards(aGame, aGame.players[0], somePreFix, "playerHand", "playerCards", true);
          this.placeCards(aGame, aGame.players[1], somePreFix, "playerHand", "computerHand", false);
        }
        this.removeEventListener("click", movePics);
    }
      
    for (var i = 0; i < somePlayer.hand.length; i++) {

      var img = document.createElement("img");
      
      img.setAttribute("id", somePreFix + i);
      img.style.minWidth = this.CARD_WIDTH_PIXELS;
      img.style.width = this.CARD_WIDTH_PERCENT;
      img.style.maxWidth = this.CARD_WIDTH_PERCENT;
      img.style.marginRight = this.CARD_MARGIN;
      img.className = className;

      img.setAttribute("value", i.toString());

      if(isPlayer){
        img.src = somePlayer.hand[i].image;
        img.addEventListener("click", movePics);
      }
      else{
        img.src = this.cardBack.image;
      }

      var src = document.getElementById(IDwhereItGoes);
      src.appendChild(img);
    }
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

    this.placeCards(game, game.players[0], "playerCard-", "playerCard", "playerCards", true);
    this.placeCards(game, game.players[1], "cpuCard-", "compCard", "computerHand", false);

    this.humanName = game.players[0].name;
    this.computerName = game.players[1].name;
  }
}
