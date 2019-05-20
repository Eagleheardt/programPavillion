import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.css']
})
export class BattleshipComponent implements OnInit {

  private drawButtons(fieldName: string){
    var aSide: HTMLTableElement = <HTMLTableElement> document.getElementById(fieldName);

    for(var i = 0; i < 10; i++){
      var row = aSide.insertRow(i);
      row.id = fieldName + "-row-" + (i + 1);
      row.style.textAlign = "center";
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

        cell.appendChild(button);

      }
    }
  }



  constructor() { }

  ngOnInit() {

    this.drawButtons("computerField");
    this.drawButtons("playerField");


  }

}
