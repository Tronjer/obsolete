import {Component, Input, EventEmitter} from "angular2/core";

@Component({
    selector: 'property-binding',
    template: `
      <h2>This is the child component</h2>
      <p>Hey {{ name }} and I am {{ age }} years.</p>
      <h4>My Hobbies are (child):</h4>
      <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
    `,
    inputs: ['name: myName'], //Alias nameInsideComp: nameOutsideComp (parent -> child)
    outputs: ['hobbiesChanged'] //Pass EventEmitter
})

export class PropertyBindingComponent {
    name: string = '';
    //age: number = 20;
    @Input('myAge') age: string = ''; //Alias nameOutsideComp: nameInsideComp
    //hobbiesChanged = new EventEmitter<string>();
    hobbiesChanged = new EventEmitter<string>();

    onHobbiesChanged(hobbies: string) {

        //pass hobbies to EventEmitter
        this.hobbiesChanged.emit(hobbies);
    }
}