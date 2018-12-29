import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit  {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.setPageTitle("Professional Projects");
  }

}
