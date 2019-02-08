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

  private readonly CARD_WIDTH_PERCENT: string = "4%";
  private readonly CARD_WIDTH_PIXELS: string = "60px";
  private readonly CARD_MARGIN: string = "4px";

  // TODO inject cards as JS elements onto the screen

  // GOAL: put 10 random cards on the screen
  // GOAL: put 10 random cards on the screen, from one deck

  private clearNodes = (aNode: Node, amtToLeave: number = 2) => {
    while(aNode.childNodes.length > amtToLeave){
      aNode.removeChild(aNode.lastChild);
    }
  }

  private placeCards = (somePlayer: Player, IDPreFix: string, cardClassName: string, IDwhereItGoes: string) => {
    for (var i = 0; i < somePlayer.hand.length; i++) {

      var img = document.createElement("img");
      
      img.setAttribute("id", IDPreFix + "-" + i);
      img.style.minWidth = this.CARD_WIDTH_PIXELS;
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

  constructor() { }

  ngOnInit() {
  }

}