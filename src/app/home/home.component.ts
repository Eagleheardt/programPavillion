import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  constructor(
    private dataService: DataService, 
    private appComponent: AppComponent) { 
  }

  ngOnInit() {
    this.appComponent.isHome = true;
    this.dataService.setPageTitle("Pavilion Home");

  }

  firstClick() {
    this.h1Style = !this.h1Style;
    this.appComponent.isHome = !this.appComponent.isHome;
  }

}
