import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forensics',
  templateUrl: './forensics.component.html',
  styleUrls: ['./forensics.component.css']
})
export class ForensicsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.setPageTitle("Forensics Project");
  }

}
