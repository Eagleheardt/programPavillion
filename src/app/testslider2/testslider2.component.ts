import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testslider2',
  templateUrl: './testslider2.component.html',
  styleUrls: ['./testslider2.component.css']
})
export class Testslider2Component implements OnInit {
  
  items: string [] = [
    'assets/homeslideshow/html.png',
    'assets/homeslideshow/css.png',
    'assets/homeslideshow/angular.png',
    'assets/homeslideshow/git.png',
    'assets/homeslideshow/python.png',
    'assets/homeslideshow/ubuntu.png',
    'assets/homeslideshow/sqlite.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}
