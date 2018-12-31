import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeslideshow',
  templateUrl: './homeslideshow.component.html',
  styleUrls: ['./homeslideshow.component.css']
})
export class HomeslideshowComponent implements OnInit {

  imageUrls: string [] = [
    ''

  ];

  constructor() { }

  ngOnInit() {
  }

}
