import { Component, OnInit } from '@angular/core';
import { SquareInfo } from './square-info';

@Component({
  selector: 'app-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.css']
})

export class BattleshipComponent implements OnInit {

  playerSquares: SquareInfo[][];
  computerSquares: SquareInfo[][];

  // private setPieces(squares: SquareInfo[][], shipsToAdd: number){
  //   var randX: number = Math.floor(Math.random() * squares.length);
  //   var randY: number = Math.floor(Math.random() * squares[randX].length);

  //   var counter:number = 0;

  //   while (counter < shipsToAdd){
  //     if (!squares[randX][randY].HasShip){
  //       counter++;
  //       console.log("COORDINATES: X-" + randX + " Y-" + randY);

  //     }
  //   }

  // } // end setPieces

  private setComputerPieces(computerFieldID: string){
    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(computerFieldID);

  }

  private flipEnabled(computerFieldID: string){
    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(computerFieldID);
    var sideButtons = aSide.getElementsByTagName("button");

    for(var i = 0; i < sideButtons.length; i++){
      sideButtons[i].disabled = !(sideButtons[i].disabled);
    }
  }

  private drawButtons(fieldName: string){
    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(fieldName);
    var fieldSize:number = 10 ;

    for(var i = 0; i < fieldSize; i++){
      var row = aSide.insertRow(i);
      row.id = fieldName + "-row-" + (i + 1);
      row.style.textAlign = "center";

      // start cell for loop
      for(var j = 0; j < fieldSize; j++){

        var cellNum: number = ((i * fieldSize) + (j + 1));

        var cell = row.insertCell(j);
        cell.id = fieldName + "Cell" + cellNum;
        cell.style.textAlign = "center";
        //cell.innerHTML = "CELL " + cellNum;

        var button: HTMLButtonElement = document.createElement("button");
        button.id = fieldName + "Button" + cellNum;
        button.style.minHeight = "45px";
        button.style.minWidth = "45px";
        button.style.backgroundColor = "aqua";

        cell.appendChild(button);

      } // cell for loop
    } // row for loop
  } // end drawButtons

  private placeShips(fieldName: string){

  } // end placeShips



  constructor() { }

  ngOnInit() {

    var computerFieldID: string = "computerField";
    var playerFieldID: string = "playerField";

    this.drawButtons(playerFieldID);
    this.drawButtons(computerFieldID);
    this.flipEnabled(computerFieldID);



  }

}
