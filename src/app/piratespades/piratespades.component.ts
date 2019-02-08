import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { Player } from './player';
import { Game } from './game';

@Component({
  selector: 'app-piratespades',
  templateUrl: './piratespades.component.html',
  styleUrls: ['./piratespades.component.css']
})
export class PiratespadesComponent implements OnInit {

  private humanName: string;
  private computerName: string;

  private readonly cardBack: Card = new Card ('assets/challenges/cardPics/ZZZ_Card_Backing.png','XXX','0',0);

  private readonly CARD_WIDTH_PERCENT: string = "4%";
  private readonly CARD_WIDTH_PIXELS: string = "60px";
  private readonly CARD_MARGIN: string = "4px";

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async CPUChooseCard(playerCard: Card, cpuPlayer: Player){

    var cardToReturn: Card = new Card ('','','',0); // blank card
    var lowCard: Card = new Card ('','','',1000); // blank card

    if (playerCard.suit == null){
      for(var i = 0; i < cpuPlayer.hand.length; i ++){
        if(cpuPlayer.hand[i].value > cardToReturn.value){
          cardToReturn = cpuPlayer.hand[i];
        }
      }
      return cardToReturn;
    }

    for(var i = 0; i < cpuPlayer.hand.length; i ++){
      if (cpuPlayer.hand[i].suit == playerCard.suit){
        if(cpuPlayer.hand[i].value > playerCard.value){
          cardToReturn = cpuPlayer.hand[i];
          console.log("Player Loses.");
          return cardToReturn;
        }
        if (cpuPlayer.hand[i].value < lowCard.value){
          lowCard = cpuPlayer.hand[i];
        }
      }
    }
    
    if (lowCard.value != 1000){
      console.log(playerCard + " LOW CARD 1 " + lowCard);
      return lowCard;
    }

    for(var i = 0; i < cpuPlayer.hand.length; i ++){
      if (cpuPlayer.hand[i].value < lowCard.value){
        lowCard = cpuPlayer.hand[i];
      }
    }

    // await this.sleep(9000);

    if (lowCard.value != 1000){
      console.log(playerCard + " LOW CARD 2 "  + lowCard);
      return lowCard;
    }

    else{
      console.log(playerCard + " high CARD 2 "  + cardToReturn);
      return cardToReturn;
    }
  }

  public showTableHand(cardArr: Card[]) {
    var CARD_WIDTH_PERCENT: string = this.CARD_WIDTH_PERCENT;
    var CARD_WIDTH_PIXELS: string = this.CARD_WIDTH_PIXELS;
    var CARD_MARGIN: string = this.CARD_MARGIN;

    for (var i = 0; i < cardArr.length; i++) {
      var img = document.createElement("img");
      img.src = cardArr[i].image;
      img.setAttribute("id", "tableHand-" + i);
      img.style.minWidth = CARD_WIDTH_PIXELS;
      img.style.width = CARD_WIDTH_PERCENT;
      img.style.maxWidth = CARD_WIDTH_PERCENT;
      img.style.marginRight = CARD_MARGIN;

      var src = document.getElementById("tableHand");
      src.appendChild(img);
    }
  }

  private showCPUHand(idPreFix: string, player: Player, divToHold: string){
    var CARD_WIDTH_PERCENT: string = this.CARD_WIDTH_PERCENT;
    var CARD_WIDTH_PIXELS: string = this.CARD_WIDTH_PIXELS;
    var CARD_MARGIN: string = this.CARD_MARGIN;

    var placeCards = function (somePlayer: Player, somePreFix: string, className: string, IDwhereItGoes: string, aCard: Card, cardWidthPercent: string, cardWidthPixels: string, cardMargin: string) {
      for (var i = 0; i < somePlayer.hand.length; i++) {

        var img = document.createElement("img");
        img.src = aCard.image;
        img.setAttribute("id", somePreFix + i);
        img.style.minWidth = cardWidthPixels;
        img.style.width = cardWidthPercent;
        img.style.maxWidth = cardWidthPercent;
        img.style.marginRight = cardMargin;
        img.className = className;
  
        img.setAttribute("value", i.toString());
  
        var src = document.getElementById(IDwhereItGoes);
        src.appendChild(img);
      }
    }
    placeCards(player, idPreFix, "computerHand", divToHold,this.cardBack, CARD_WIDTH_PERCENT, CARD_WIDTH_PIXELS, CARD_MARGIN)
  }

  private async showHands(idPreFix: string, player: Player, divToHold: string, aGame: Game) {

    var cardsUsed: number = 0;
    var cardBack: Card = this.cardBack;

    var CARD_WIDTH_PERCENT: string = this.CARD_WIDTH_PERCENT;
    var CARD_WIDTH_PIXELS: string = this.CARD_WIDTH_PIXELS;
    var CARD_MARGIN: string = this.CARD_MARGIN;

    var CPUChooseCard = (playerCard: Card, cpuPlayer: Player) : Card => {

      var cardToReturn: Card = new Card ('','','',0); // blank card
      var lowCard: Card = new Card ('','','',1000); // blank card
  
      if (playerCard.suit == null){
        for(var i = 0; i < cpuPlayer.hand.length; i ++){
          if(cpuPlayer.hand[i].value > cardToReturn.value){
            cardToReturn.dealOut();
            cardToReturn = cpuPlayer.hand[i];
          }
        }
        return cardToReturn;
      }
  
      for(var i = 0; i < cpuPlayer.hand.length; i ++){
        if (cpuPlayer.hand[i].suit == playerCard.suit){
          if(cpuPlayer.hand[i].value > playerCard.value){
            cardToReturn = cpuPlayer.hand[i];
            console.log("Player Loses.");
            cardToReturn.dealOut();
            return cardToReturn;
          }
          if (cpuPlayer.hand[i].value < lowCard.value){
            lowCard = cpuPlayer.hand[i];
          }
        }
      }
      
      if (lowCard.value != 1000){
        console.log("Player wins!");
        return lowCard;
      }
  
      for(var i = 0; i < cpuPlayer.hand.length; i ++){
        if (cpuPlayer.hand[i].value < lowCard.value){
          lowCard = cpuPlayer.hand[i];
        }
      }
  
      if (lowCard.value != 1000){
        console.log(playerCard + " LOW CARD 2 "  + lowCard);
        return lowCard;
      }
  
      else{
        console.log(playerCard + " high CARD 2 "  + cardToReturn);
        return cardToReturn;
      }
    }

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
        img.style.minWidth = CARD_WIDTH_PIXELS;
        img.style.width = CARD_WIDTH_PERCENT;
        img.style.maxWidth = CARD_WIDTH_PERCENT;
        img.style.marginRight = CARD_MARGIN;
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
        img.style.minWidth = CARD_WIDTH_PIXELS;
        img.style.width = CARD_WIDTH_PERCENT;
        img.style.maxWidth = CARD_WIDTH_PERCENT;
        img.style.marginRight = CARD_MARGIN;
        img.className = className;
  
        img.setAttribute("value", i.toString());
  
        var src = document.getElementById(IDwhereItGoes);
        src.appendChild(img);
      }
    }

    var movePics = function () {
      var pCard: Card = player.hand[parseInt(this.getAttribute("value"))];
      aGame.playCard(player, pCard);
      this.className = "tableHand";
      var tableDisplay = document.getElementById("tableHand");
      tableDisplay.appendChild(this);

      var cCard: Card = CPUChooseCard(pCard, aGame.players[1]);

      var img = document.createElement("img");
        img.src = cCard.image;
        img.style.minWidth = CARD_WIDTH_PIXELS;
        img.style.width = CARD_WIDTH_PERCENT;
        img.style.maxWidth = CARD_WIDTH_PERCENT;
        img.style.marginRight = CARD_MARGIN;
        img.className = "computerHand";
  
        img.setAttribute("value", cCard.value.toString());

      cCard.putBack();

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


    this.CPUChooseCard(game.players[0].hand[0], game.players[1]);
  }

}
