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
  private cardBack: Card = new Card ('assets/challenges/cardPics/ZZZ_Card_Backing.png','XXX','0',0);

  public showTableHand(cardArr: Card[]) {
    for (var i = 0; i < cardArr.length; i++) {
      var img = document.createElement("img");
      img.src = cardArr[i].image;
      img.setAttribute("id", "tableHand-" + i);
      img.style.minWidth = "60px";
      img.style.width = "4%";
      img.style.maxWidth = "4%";
      img.style.marginRight = "4px";

      var src = document.getElementById("tableHand");
      src.appendChild(img);
    }
  }

  private showCPUHand(idPreFix: string, player: Player, divToHold: string){
    var placeCards = function (somePlayer: Player, somePreFix: string, className: string, IDwhereItGoes: string, aCard: Card) {
      for (var i = 0; i < somePlayer.hand.length; i++) {

        var img = document.createElement("img");
        img.src = aCard.image;
        img.setAttribute("id", somePreFix + i);
        img.style.minWidth = "60px";
        img.style.width = "4%";
        img.style.maxWidth = "4%";
        img.style.marginRight = "4px";
        img.className = className;
  
        img.setAttribute("value", i.toString());
  
        var src = document.getElementById(IDwhereItGoes);
        src.appendChild(img);
      }
    }
    placeCards(player, idPreFix, "compCards", divToHold,this.cardBack)
  }

  private showHands(idPreFix: string, player: Player, divToHold: string, aGame: Game) {

    var cardsUsed: number = 0;
    var cardBack: Card = this.cardBack;

    var clearNodes = function (aNode: Node) {
      while(aNode.childNodes.length > 2){
        aNode.removeChild(aNode.lastChild);
      }
    }

    var placeCards = function (somePlayer: Player, somePreFix: string, className: string, IDwhereItGoes: string) {
      for (var i = 0; i < somePlayer.hand.length; i++) {

        var img = document.createElement("img");
        img.src = somePlayer.hand[i].image;
        img.setAttribute("id", somePreFix + i);
        img.style.minWidth = "60px";
        img.style.width = "4%";
        img.style.maxWidth = "4%";
        img.style.marginRight = "4px";
        img.className = className;
  
        img.setAttribute("value", i.toString());
  
        img.addEventListener("click", movePics);
  
        var src = document.getElementById(IDwhereItGoes);
        src.appendChild(img);
      }
    }

    var placeCPUCards = function (somePlayer: Player, somePreFix: string, className: string, IDwhereItGoes: string, aCard: Card) {
      for (var i = 0; i < somePlayer.hand.length; i++) {

        var img = document.createElement("img");
        img.src = aCard.image;
        img.setAttribute("id", somePreFix + i);
        img.style.minWidth = "60px";
        img.style.width = "4%";
        img.style.maxWidth = "4%";
        img.style.marginRight = "4px";
        img.className = className;
  
        img.setAttribute("value", i.toString());
  
        var src = document.getElementById(IDwhereItGoes);
        src.appendChild(img);
      }
    }

    var movePics = function () {
      aGame.playCard(player, player.hand[parseInt(this.getAttribute("value"))]);
      this.className = "tableHand";
      var tableDisplay = document.getElementById("tableHand");
      tableDisplay.appendChild(this);
      cardsUsed ++;

      if (aGame.tableHand.length % aGame.NUMBER_OF_PLAYERS == 0) {
        clearNodes(tableDisplay);
        aGame.clearTable();
      }

      if(cardsUsed == player.hand.length){
        aGame.playRound();
        aGame.clearTable();
        cardsUsed = 0;
        // remove all nodes and redraw
        clearNodes(tableDisplay);

        var playerDisplay = document.getElementById("playerCards");
        var cpuDisplay = document.getElementById("computerHand");

        clearNodes(playerDisplay);
        clearNodes(cpuDisplay);

        placeCards(aGame.players[0], idPreFix, "playerHand",divToHold);
        placeCPUCards(aGame.players[1], "ComputerCard-", "computerHand", "computerHand", cardBack);
      }

      this.removeEventListener("click", movePics);
    }

    placeCards(player, idPreFix, "playerHand",divToHold);
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
    this.showCPUHand("cpuCard-", game.players[1], "computerHand");
    this.humanName = game.players[0].name;
    this.computerName = game.players[1].name;
  }

}
