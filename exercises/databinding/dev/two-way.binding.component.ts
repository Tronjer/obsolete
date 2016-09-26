import {Component} from "angular2/core";



@Component({
    selector: 'two-way',
    template: `
      <input type="text" [value]="name" [ngClass]="{active: true}" (keyup)="onKeyUp(inputElement.value)" #inputElement>
      <p>Value: {{ values }}</p>
      <input type="text" [(ngModel)]="name">
      <p>Your name: {{ name }}</p>
    `,
    styles: ['.active {color: red}'],
})

export class TwoWayComponent {
    name: string = 'Matt';
    values: string = '';

    onKeyUp(value: string) {
        this.values += value + ' | ';
    }
}