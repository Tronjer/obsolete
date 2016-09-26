import {Component, EventEmitter} from "angular2/core";
@Component({
    selector: 'my-confirm',
    template: `
      <h1>You Submitted the following details. Is this correct?</h1>
      <p>Your name is <span>{{ myself.name }}</span> and you're <span>{{ myself.age }}</span> years old.</p>
      <div>
      <label for="name">Your Name</label>
      <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
    </div>
    <div>
      <label for="age">Your Age</label>
      <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
    </div>
    <div>Filled out: {{ isFilled ? 'Yes' : 'No' }}</div>
    <div>Valid: {{ isValid ? 'Yes' : 'No' }}</div>
    <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>,
    `,
    inputs: ['myself'], //bind property
    outputs: ['confirmed'] //pass Event to parent
})

export class ConfirmComponent {
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;

    confirmed = new EventEmitter<{name:string, age:string}>();

    onKeyup() {

        if (this.myself.name != '' && this.myself.age != '') {
            this.isFilled = true;
        } else {
            this.isFilled = false;
        }

        if (this.myself.name != '' && /^\d+/.test(this.myself.age)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    onConfirm() {
        this.confirmed.emit(this.myself);
    }
}