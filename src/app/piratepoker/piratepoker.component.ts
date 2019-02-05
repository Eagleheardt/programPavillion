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

  private redraw(sourceID: string) {
    var cards = document.getElementById(sourceID).children;

    for (var i = 0; i < cards.length; i++) {
      console.log(cards[i]);
      // cards[i].remove();
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

  private showHands(idPreFix: string, player: Player, divToHold: string, aGame: Game) {

    var movePics = function () {
      aGame.playCard(player, player.hand[parseInt(this.getAttribute("value"))]);
      this.className = "tableHand";
      var tableDisplay = document.getElementById("tableHand");
      tableDisplay.appendChild(this);

      if (aGame.tableHand.length % 4 == 0) {
        // TODO: need to call an eval function here
        // needs to eval the hand, assign a winner, add to their tricks/bags
        while (tableDisplay.childNodes.length > 2) {
          tableDisplay.removeChild(tableDisplay.lastChild);
        }
        aGame.clearTable();
      }
      console.log(aGame.tableHand);

      this.removeEventListener("click", movePics);
    };

    for (var i = 0; i < player.hand.length; i++) {

      var img = document.createElement("img");
      img.src = player.hand[i].image;
      img.setAttribute("id", idPreFix + i);
      img.style.minWidth = "92px";
      img.style.width = "6%";
      img.style.maxWidth = "6%";
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
  }

}
