import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

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

  config: SwiperOptions = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 3, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 30 // Space between each Item
  };

  constructor() { }

  ngOnInit() {
  }

}
