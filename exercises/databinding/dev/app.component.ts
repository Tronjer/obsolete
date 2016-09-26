import {Component} from "angular2/core";
import {PropertyBindingComponent} from "./property-binding.component";



@Component({
    selector: 'my-app',
    template: `
      <section class="parent">
        <h2>This is the parent component</h2>
        <h4>Please enter your name</h4>
        <input type="text" [(ngModel)]="name"><br><br>
        <input type="text" [(ngModel)]="age"><br><br>
        <section class="child">
          <property-binding [myName]="name" [myAge]="age" (hobbiesChanged)="hobbies = $event"></property-binding>
        </section>
      </section>
      <p>My hobbies are (parent): {{ hobbies }}</p>
    `,
    directives: [PropertyBindingComponent]
})

export class AppComponent {
    name: string = '';
    age: string = '';
    hobbies: string;
}