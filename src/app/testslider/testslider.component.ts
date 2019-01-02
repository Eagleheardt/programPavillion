import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testslider',
  templateUrl: './testslider.component.html',
  styleUrls: ['./testslider.component.css']
})
export class TestsliderComponent implements OnInit {

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
