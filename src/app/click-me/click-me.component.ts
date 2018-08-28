import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
  <button (click)="onClickMe()">Click click click</button>
  {{clickMessage}}`,
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  clickMessage= '';

  onClickMe() {
    this.clickMessage ='U AN EGG';
  }
}
