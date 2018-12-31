import { Component, OnInit } from '@angular/core';
import { SwiperModule } from 'angular2-useful-swiper';

@Component({
  selector: 'app-homeslideshow',
  templateUrl: './homeslideshow.component.html',
  styleUrls: ['./homeslideshow.component.css']
})
export class HomeslideshowComponent implements OnInit {

  imageUrlArray: string [] = [
    'assets/homeslideshow/html.png',
    'assets/homeslideshow/css.png',
    'assets/homeslideshow/angular.png',
    'assets/homeslideshow/git.png',
    'assets/homeslideshow/python.png',
    'assets/homeslideshow/ubuntu.png',
    'assets/homeslideshow/sqlite.png'
  ];



  constructor(private swiper: SwiperModule) { }

  ngOnInit() {
  }

}
