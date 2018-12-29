import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piratesort',
  templateUrl: './piratesort.component.html',
  styleUrls: ['./piratesort.component.css']
})
export class PiratesortComponent implements OnInit {

  assetArrowDown: string = "assets/challenges/piratesort/arrowDown.png";
  assetArrowLeft: string = "assets/challenges/piratesort/arrowLeft.png";
  assetArrowRight: string = "assets/challenges/piratesort/arrowRight.png";
  assetArrowrightCurve: string = "assets/challenges/piratesort/arrowRightCurve.png";
  assetGrass: string = "assets/challenges/piratesort/grass.jpg";
  assetMapImg: string = "assets/challenges/piratesort/mapImg.jpg";
  assetRock: string = "assets/challenges/piratesort/rock.png";
  assetTree: string = "assets/challenges/piratesort/tree.png";

  constructor() { }

  ngOnInit() {
  }
        /*
var vols = document.querySelectorAll('.prs');

for(var i = 0, l = vols.length; i < l; i++) {
	vols[i].onclick = function(a) {
		a.preventDefault();
		document.querySelector('.result').classList.toggle('open');
	}
}
*/
/* RAW JS from project */
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


