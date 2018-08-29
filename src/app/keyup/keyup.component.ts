import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
  `,
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {
  value = '';
  onEnter(value: string) { this.value = value; }


}
