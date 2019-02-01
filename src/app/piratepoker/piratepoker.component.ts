import { Component, OnInit } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-piratepoker',
  templateUrl: './piratepoker.component.html',
  styleUrls: ['./piratepoker.component.css']
})
export class PiratepokerComponent implements OnInit {

  // TODO need a redraw method that will look at the player hand and place only their current cards on the table



  constructor() { 
    
  }

  ngOnInit() {
    var game: Game = new Game();
    game.playRound();

    game.players[0].hand.forEach(card => {
      var img = document.createElement("img");
      img.src = card.image;
  
      var src = document.getElementById("playerCards");
      src.appendChild(img);      
    });
  }

}
