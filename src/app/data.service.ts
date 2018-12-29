import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private titleService: Title) { }

  public setPageTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  

 /*  firstClick() {
    return console.log('clicked');
  } */

 /*  getUsers() {
    return this.http.get('http://reqres.in/api/users')
  } */
}
