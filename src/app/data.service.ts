import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // will allow for delayed events, so that I never have to recode this

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

  public HTMLPic(imgLocation: string): HTMLElement{
    var img = document.createElement("img");
        img.src = imgLocation;

        return img;
  }
}
