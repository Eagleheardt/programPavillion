import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.css']
})
export class BattleshipComponent implements OnInit {

  playerShipsPlaced: number = 0;
  readonly maxShips: number = 7;

  private static getNumberShipsPlaced (fieldName: string, condition: string){

    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(fieldName);
    var buttons = aSide.getElementsByTagName("button");
    var numberOfShips:number = 0;

    for(var i = 0; i < buttons.length; i++){
      if (buttons[i].style.backgroundColor == condition){
        numberOfShips ++;
      }
    }

    return numberOfShips;
  }

  private drawButtons(fieldName: string){

    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(fieldName);

    // begin row loop
    for(var i = 0; i < 10; i++){
      var row = aSide.insertRow(i);
      row.id = fieldName + "-row-" + (i + 1);
      row.style.textAlign = "center";

      // begin cell loop
      for(var j = 0; j < 10; j++){

        var cellNum: number = ((i * 10) + (j + 1));

        var cell = row.insertCell(j);
        cell.id = fieldName + "Cell" + cellNum;
        cell.style.textAlign = "center";
        //cell.innerHTML = "CELL " + cellNum;

        var button: HTMLButtonElement = document.createElement("button");
        button.id = fieldName + "Button" + cellNum;
        button.style.minHeight = "45px";
        button.style.minWidth = "45px";
        button.style.backgroundColor = "aqua";

        var playerShipsPlaced = this.playerShipsPlaced;
        var maxShips = this.maxShips;

        // begin button click
        button.addEventListener(
          "click", function() {
            var playerShipsPlaced = BattleshipComponent.getNumberShipsPlaced(fieldName, "red");
            var startButton:HTMLDivElement = <HTMLDivElement>document.getElementById("beginButton");

            if (this.style.backgroundColor == "red"){
              this.style.backgroundColor = "aqua";
              playerShipsPlaced --;
              if (playerShipsPlaced < 0){
                playerShipsPlaced = 0;
              }
              startButton.style.visibility = "hidden";
              return;
            }

            if (playerShipsPlaced < maxShips){
              if (this.style.backgroundColor != "red"){
                this.style.backgroundColor = "red";
                playerShipsPlaced ++;
              }
            }

            if (playerShipsPlaced < maxShips){
              startButton.style.visibility = "hidden";
            }
            else{
              startButton.style.visibility = "visible";
            }
          } // end click
        );

        cell.appendChild(button);

      } // end cell loop
    } // end row loop
  } // end drawButtons

  private flipButtons(fieldName: string) {
    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(fieldName);
    var buttons = aSide.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = !buttons[i].disabled;
    }
  } // end flipButtons

  private pickSquare(fieldName: string) {
    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(fieldName);
    var buttons = aSide.getElementsByTagName("button");
    var randIndex = Math.floor(Math.random() * buttons.length);

    if (buttons[randIndex].style.backgroundImage == "") {

    }
  } // end pickSquare



  constructor() { }

  ngOnInit() {

    this.drawButtons("computerField");
    this.drawButtons("playerField");

    this.flipButtons("computerField");
    var startButton:HTMLDivElement = <HTMLDivElement>document.getElementById("beginButton");
    startButton.style.visibility = "hidden";


  }

}
