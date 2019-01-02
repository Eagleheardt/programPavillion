import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piratesort',
  templateUrl: './piratesort.component.html',
  styleUrls: ['./piratesort.component.css']
})
export class PiratesortComponent implements OnInit {

  // asset images

  assetArrowDown: string = "assets/challenges/piratesort/arrowDown.png";
  assetArrowLeft: string = "assets/challenges/piratesort/arrowLeft.png";
  assetArrowRight: string = "assets/challenges/piratesort/arrowRight.png";
  assetArrowRightCurve: string = "assets/challenges/piratesort/arrowRightCurve.png";
  assetRock: string = "assets/challenges/piratesort/rock.png";
  assetTree: string = "assets/challenges/piratesort/tree.png";

  // all booleans control the state of the divs

  // div booleans - control display of their respective divs
  b1Bool: boolean = true;
  d1Bool: boolean = true;
  f1Bool: boolean = true;
  a2Bool: boolean = true;
  c2Bool: boolean = true;
  e2Bool: boolean = true;
  f2Bool: boolean = true;
  b3Bool: boolean = true;
  d3Bool: boolean = true;
  f3Bool: boolean = true;
  a4Bool: boolean = true;
  c4Bool: boolean = true;
  e4Bool: boolean = true;
  f4Bool: boolean = true;
  e5Bool: boolean = true;
  f5Bool: boolean = true;
  a6Bool: boolean = true;
  b6Bool: boolean = true;
  c6Bool: boolean = true;
  d6Bool: boolean = true;
  e6Bool: boolean = true;
  f6Bool: boolean = true;

  // button booleans
  startBtnBool: boolean = true;
  c1Bool: boolean = true;
  e1Bool: boolean = true;
  a3Bool: boolean = true;
  c3aBool: boolean = true;
  c3bBool: boolean = true;
  e3aBool: boolean = true;
  e3bBool: boolean = true;
  a5Bool: boolean = true;
  c5aBool: boolean = true;
  c5bBool: boolean = true;

  // question booleans
  q0Bool: boolean = true;
  q1Bool: boolean = true;
  q2Bool: boolean = true;
  q3Bool: boolean = true;
  q4Bool: boolean = true;
  q5Bool: boolean = true;
  q6Bool: boolean = true;
  q99Bool: boolean = true;

  // results booleans
  res1Bool: boolean = true;
  res2Bool: boolean = true;
  res3Bool: boolean = true;
  res4Bool: boolean = true;
  res5Bool: boolean = true;

  // setting methods

  addOpenByID(someID: string) {
	document.getElementById(someID).classList.add('open');
  }

  disableByID(someID: string) {
	(<HTMLInputElement> document.getElementById(someID)).disabled = true; // angular way to disable an item
  }

  redOffButton(someID) {
	this.disableByID(someID);
	document.getElementById(someID).style.backgroundColor = "red";
	document.getElementById(someID).style.color = "red";
  }

  turnOffQuestions(){
	this.q0Bool = false;
	this.q1Bool = true;
	this.q2Bool = true;
	this.q3Bool = true;
	this.q4Bool = true;
	this.q5Bool = true;
	this.q6Bool = true;
	this.q99Bool = true;
	}

  // button click methods

  startBtnClick() {
	this.turnOffQuestions();
	this.redOffButton('startBtn');

	this.b1Bool = false;
	this.a2Bool = false;
	this.a3Bool = false;
	this.c1Bool = false;
	this.q1Bool = false;
  }

  c1BtnClick() {
	this.turnOffQuestions();
	this.redOffButton('c1Btn');
	this.disableByID('a3Btn');

	this.c2Bool = false;
	this.c3bBool = false;
	this.d1Bool = false;
	this.e1Bool = false;
	this.q2Bool = false;
  }

  e1BtnClick() {
	this.turnOffQuestions();
	this.redOffButton('e1Btn');
	this.disableByID('c3bBtn');

	this.f1Bool = false;
	this.f2Bool = false;
	this.f3Bool = false;
	this.f4Bool = false;
	this.f5Bool = false;
	this.f6Bool = false;
	this.e6Bool = false;
	this.d6Bool = false;
	this.c6Bool = false;
	this.q99Bool = false;
	this.res2Bool = false;
  }

  a3BtnClick() {
	this.turnOffQuestions();
	this.redOffButton('a3Btn');
	this.disableByID('c1Btn');

	this.a4Bool = false;
	this.a5Bool = false;
	this.b3Bool = false;
	this.c3aBool = false;
	this.q3Bool = false;
  }

  c3aBtnClick() {
	this.turnOffQuestions();
	this.redOffButton('c3aBtn');
	this.disableByID('a5Btn');

	this.c4Bool = false;
	this.c5aBool = false;
	this.d3Bool = false;
	this.e3aBool = false;
	this.q4Bool = false;
  }

  c3bBtnClick() {
	this.turnOffQuestions();
	this.redOffButton('c3bBtn');
	this.disableByID('e1Btn');

	this.c4Bool = false;
	this.c5bBool = false;
	this.d3Bool = false;
	this.e3bBool = false;
	this.e1Bool = false;
	this.q5Bool = false;
  }

  e3aBtnClick() {
	this.turnOffQuestions();
	this.redOffButton('e3aBtn');
	this.disableByID('c5aBtn');

	this.e4Bool = false;
	this.e5Bool = false;
	this.e6Bool = false;
	this.d6Bool = false;
	this.c6Bool = false;
	this.q99Bool = false;
	this.res4Bool = false;
  }

  e3bBtnClick() {
	this.turnOffQuestions();
	this.redOffButton('e3bBtn');
	this.disableByID('c5bBtn');

	this.e4Bool = false;
	this.e5Bool = false;
	this.e6Bool = false;
	this.d6Bool = false;
	this.c6Bool = false;
	this.q99Bool = false;
	this.res5Bool = false;
  }

  a5BtnClick() {
	this.turnOffQuestions();
	this.redOffButton('a5Btn');
	this.disableByID('c3aBtn');

	this.a6Bool = false;
	this.b6Bool = false;
	this.c6Bool = false;
	this.q99Bool = false;
	this.c6Bool = false;
	this.q99Bool = false;
	this.res4Bool = false;
  }

  c5aBtnClick() {
	this.turnOffQuestions();
	this.redOffButton('c5aBtn');
	this.disableByID('e3aBtn');

	this.c6Bool = false;
	this.q99Bool = false;
	this.res3Bool = false;
  }

  c5bBtnClick() {
	this.turnOffQuestions();
	this.redOffButton('c5bBtn');
	this.disableByID('e3bBtn');

	this.c6Bool = false;
	this.q99Bool = false;
	this.res3Bool = false;

  }
  constructor() { }

  ngOnInit() {
  } // end onInit
}


