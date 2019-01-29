import { Component, OnInit } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-piratepoker',
  templateUrl: './piratepoker.component.html',
  styleUrls: ['./piratepoker.component.css']
})
export class PiratepokerComponent implements OnInit {

  constructor() { 
    
    
  }

  ngOnInit() {
    var game: Game = new Game();
    console.log('Test Print!!');
    game.playRound();
  }

}
