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
/* 
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
 */
  constructor() { }

  ngOnInit() {
  } // end onInit
  
/* RAW JS from project */
        
  
/*
var vols = document.querySelectorAll('.prs');

for(var i = 0, l = vols.length; i < l; i++) {
	vols[i].onclick = function(a) {
		a.preventDefault();
		document.querySelector('.result').classList.toggle('open');
	}
}
*/

/* var hideQuestions = function () {
	var questions = document.querySelectorAll('.question')
	for(var i = 0, l = questions.length; i < l; i++) {
		questions[i].classList.remove('open');
	}
}

var showByID = function (someID) {
	document.getElementById(someID).classList.add('open');
}

var disableButton = function (someID) {
	document.getElementById(someID).style.display = "none";
}

var onRed = function (someID) {
	document.getElementById(someID).disabled = true;
	document.getElementById(someID).style.display = "block";
	document.getElementById(someID).style.backgroundColor = "red";
	document.getElementById(someID).style.color = "red";
}

document.getElementById('startBtn').onclick = function() {
	hideQuestions();
	showByID('b1');
	showByID('a2');
	showByID('a3');
	showByID('c1');
	showByID('q1');
	onRed('startBtn');
}

document.getElementById('c1').onclick = function() {
	hideQuestions();
	showByID('c2');
	showByID('c3b');
	showByID('d1');
	showByID('e1');
	showByID('q2');
	onRed('c1Btn');
	disableButton('a3Btn');
}

document.getElementById('a3').onclick = function() {
	hideQuestions();
	showByID('a4');
	showByID('a5');
	showByID('b3');
	showByID('c3a');
	showByID('q3');
	disableButton('a3Btn');
	disableButton('c1Btn');
	onRed('a3Btn')
}

document.getElementById('a5').onclick = function() {
	hideQuestions();
	showByID('a6');
	showByID('b6');
	showByID('c6');
	showByID('q99');
	showByID('res4');
	disableButton('c3aBtn');
	onRed('a5Btn');
};

document.getElementById('c3a').onclick = function() {
	hideQuestions();
	showByID('c4');
	showByID('c5a');
	showByID('d3');
	showByID('e3a');
	showByID('q4');
	onRed('c3aBtn');
	disableButton('a5Btn');
}

document.getElementById('c5a').onclick = function() {
	hideQuestions();
	showByID('c6');
	showByID('q99');
	onRed('c5aBtn');
	disableButton('e3aBtn');
	showByID('res3');
}

document.getElementById('c3b').onclick = function() {
	hideQuestions();
	showByID('c4');
	showByID('c5b');
	showByID('d3');
	showByID('e3b');
	showByID('e1');
	showByID('q5');
	onRed('c3bBtn');
	disableButton('e1Btn');
}

document.getElementById('c5b').onclick = function() {
	hideQuestions();
	showByID('c6');
	showByID('q99');
	onRed('c5bBtn');
	disableButton('e3bBtn');
	showByID('res3');
}

document.getElementById('e1').onclick = function() {
	hideQuestions();
	showByID('f1');
	showByID('f2');
	showByID('f3');
	showByID('f4');
	showByID('f5');
	showByID('f6');
	showByID('e6');
	showByID('d6');
	showByID('c6');
	showByID('q99');
	onRed('e1Btn');
	disableButton('c3bBtn');
	showByID('res2');
}

document.getElementById('e3a').onclick = function() {
	hideQuestions();
	showByID('e4');
	showByID('e5');
	showByID('e6');
	showByID('d6');
	showByID('c6');
	showByID('q99');
	disableButton('c5aBtn');
	onRed('e3aBtn');
	showByID('res4');
}

document.getElementById('e3b').onclick = function() {
	hideQuestions();
	showByID('e4');
	showByID('e5');
	showByID('e6');
	showByID('d6');
	showByID('c6');
	showByID('q99');
	disableButton('c5bBtn');
	onRed('e3bBtn');
	showByID('res5');
} */
}


