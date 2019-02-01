import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { Player } from './player';

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

  private showHands(idPreFix: string, player: Player, divToHold: string){
    var picNum: number = 0;

    player.hand.forEach(card => {
      var img = document.createElement("img");
      img.src = card.image;
      img.setAttribute("id", idPreFix + picNum);
      img.style.maxWidth = "6%";
  
      var src = document.getElementById(divToHold);
      src.appendChild(img);
      picNum ++;
    });
  }

  private playCard(cardID: string){

  }

  constructor() { 
    
  }

  ngOnInit() {
    var game: Game = new Game();
    game.playRound();

    this.showHands("playerCard-",game.players[0], "playerCards");
    this.showHands("CPU1Card-",game.players[1], "1");
    this.showHands("CPU2Card-",game.players[2], "2");
    this.showHands("CPU3Card-",game.players[3], "3");
  }

}
