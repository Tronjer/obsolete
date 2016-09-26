import { Component, OnInit } from "@angular/core";
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";

@Component({
    selector: 'my-signup',
    templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private _fb:FormBuilder) {}

    onSubmit() {
        console.log(this.myForm.value);
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required]
        });
    }

    private isEmail(control: Control): {[s: string]: boolean} {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            return {invalidMail: true};
        }
    }
}