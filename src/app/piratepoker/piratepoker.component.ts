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

  constructor() { }

  ngOnInit() {
  }

}
