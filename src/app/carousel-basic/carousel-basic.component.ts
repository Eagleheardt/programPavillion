import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit {

  items: string [] = [
    'assets/homeslideshow/html.png',
    'assets/homeslideshow/css.png',
    'assets/homeslideshow/angular.png',
    'assets/homeslideshow/git.png',
    'assets/homeslideshow/python.png',
    'assets/homeslideshow/ubuntu.png',
    'assets/homeslideshow/sqlite.png'
  ];

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}