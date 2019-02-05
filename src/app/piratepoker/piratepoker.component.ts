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
  private cardBack: Card = new Card ('assets/challenges/cardPics/ZZZ_Card_Backing.png','XXX','0',0)

  // TODO need a redraw method that will look at the player hand and place only their current cards on the table

  private redraw() {

    var tableDisplay = document.getElementById("tableHand");

    while (tableDisplay.childNodes.length > 2) {
      tableDisplay.removeChild(tableDisplay.lastChild);
    }

    var playerDisplay = document.getElementById("playerCards");

    while (playerDisplay.childNodes.length > 2) {
      playerDisplay.removeChild(playerDisplay.lastChild);
    } 

  }

  public showTableHand(cardArr: Card[]) {
    for (var i = 0; i < cardArr.length; i++) {
      var img = document.createElement("img");
      img.src = cardArr[i].image;
      img.setAttribute("id", "tableHand-" + i);
      img.style.marginRight = "4px";
      img.style.maxWidth = "6%";

      var src = document.getElementById("tableHand");
      src.appendChild(img);
    }
  }

  private showCPUHand(idPreFix: string, player: Player, divToHold: string, aGame: Game){

  }

  private showHands(idPreFix: string, player: Player, divToHold: string, aGame: Game) {

    var cardsUsed: number = 0;

    var movePics = function () {
      aGame.playCard(player, player.hand[parseInt(this.getAttribute("value"))]);
      this.className = "tableHand";
      var tableDisplay = document.getElementById("tableHand");
      tableDisplay.appendChild(this);
      cardsUsed ++;

      if (aGame.tableHand.length % aGame.NUMBER_OF_PLAYERS == 0) {
        // TODO: need to call an eval function here
        // needs to eval the hand, assign a winner, add to their tricks/bags
        while (tableDisplay.childNodes.length > 2) {
          tableDisplay.removeChild(tableDisplay.lastChild);
        }
        aGame.clearTable();
      }

      if(cardsUsed == player.hand.length){
        aGame.playRound();
        aGame.clearTable();
        cardsUsed = 0;
        // remove all nodes and redraw
        while (tableDisplay.childNodes.length > 2) {
          tableDisplay.removeChild(tableDisplay.lastChild);
        }

        var playerDisplay = document.getElementById("playerCards");
        var cpuDisplay = document.getElementById("computerHand");

        while (playerDisplay.childNodes.length > 2) {
          playerDisplay.removeChild(playerDisplay.lastChild);
        }

        while (cpuDisplay.childNodes.length > 2) {
          cpuDisplay.removeChild(cpuDisplay.lastChild);
        }

        for (var i = 0; i < aGame.players[0].hand.length; i++) {

          var img = document.createElement("img");
          img.src = player.hand[i].image;
          img.setAttribute("id", idPreFix + i);
          img.style.minWidth = "107px";
          img.style.width = "7%";
          img.style.maxWidth = "7%";
          img.style.marginRight = "4px";
          img.className = "playerHand";
    
          img.setAttribute("value", i.toString());
    
          img.addEventListener("click", movePics);
    
          var src = document.getElementById(divToHold);
          src.appendChild(img);
        }

        for (var i = 0; i < aGame.players[1].hand.length; i++) {

          var img = document.createElement("img");
          img.src = aGame.players[1].hand[i].image;
          img.setAttribute("id", idPreFix + i);
          img.style.minWidth = "107px";
          img.style.width = "7%";
          img.style.maxWidth = "7%";
          img.style.marginRight = "4px";
          img.className = "computerHand";
    
          img.setAttribute("value", i.toString());
    
          var src = document.getElementById("computerHand");
          src.appendChild(img);
        }
      }

      this.removeEventListener("click", movePics);
    };

    for (var i = 0; i < player.hand.length; i++) {

      var img = document.createElement("img");
      img.src = player.hand[i].image;
      img.setAttribute("id", idPreFix + i);
      img.style.minWidth = "107px";
      img.style.width = "7%";
      img.style.maxWidth = "7%";
      img.style.marginRight = "4px";
      img.className = "playerHand";

      img.setAttribute("value", i.toString());

      img.addEventListener("click", movePics);

      var src = document.getElementById(divToHold);
      src.appendChild(img);

      // img.setAttribute("onclick","console.log(" + i + ");"); // This works

      // needed to add quote literals in order to get this to work dynamically

      // var msg: string = player.hand[i].toString();
      // img.setAttribute("onclick","console.log(\"" + msg + "\");"); 

      // This above block works for printing the card clicked

    }
    this.showTableHand(aGame.tableHand)
  }

  private playCard(aGame: Game, aCard: Card) {

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

    this.showHands("playerCard-", game.players[0], "playerCards", game);
    this.showHands("cpuCard-", game.players[1], "computerHand", game);
    this.humanName = game.players[0].name;
    this.computerName = game.players[1].name;
  }

}
