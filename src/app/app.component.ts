import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Eagleheardt Angular Testing';
  thirst: string = 'testING';
  isHome: boolean = false;

  config: SwiperOptions = {
    autoplay: 300, // Autoplay option having value in milliseconds
    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 1, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 3 // Space between each Item
  };
  
  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  
  ngOnInit() {
    this.setTitle("Programming Pavilion");
  }
  
}
