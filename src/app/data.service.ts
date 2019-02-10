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

  public async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // clear the children off a parent, leave what you want

  public clearNodes = function (aNode: Node, amtToLeave: number = 0) {
    while(aNode.childNodes.length > amtToLeave){
      aNode.removeChild(aNode.lastChild);
    }
  }

  // creates a picture element

  public HTMLPic(imgLocation: string): HTMLImageElement{
    var img = document.createElement("img");
        img.src = imgLocation;

        return img;
  }

 /*  firstClick() {
    return console.log('clicked');
  } */

 /*  getUsers() {
    return this.http.get('http://reqres.in/api/users')
  } */
}
