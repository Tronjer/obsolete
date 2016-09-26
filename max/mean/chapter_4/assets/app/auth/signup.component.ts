import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    ControlGroup,
    Validators,
    Control
} from '@angular/common';
import { AuthService } from './auth.service';
import { User } from './user';
import { ErrorService } from '../errors/error.service';

@Component({
    selector: 'my-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input [ngFormControl]="myForm.find('firstName')" type="text" class="form-control" id="firstName">
                </div>
                <div class="form-group">
                    <label for="LastName">Last Name</label>
                    <input [ngFormControl]="myForm.find('lastName')" type="text" class="form-control" id="lastNamee">
                </div>
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input [ngFormControl]="myForm.find('email')" type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="password">password</label>
                    <input [ngFormControl]="myForm.find('password')" type="password" class="form-control" id="password">
                </div>
                <button class="btn btn-primary" [disabled]="!myForm.valid">Sign up</button>
            </form>
        </section>
    `
})

export class SignupComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private _fb: FormBuilder, private _authService: AuthService, private _errorService: ErrorService) {}

    ngOnInit():any {
        this.myForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                this.isValidMailPattern
            ])],
            password: ['', Validators.required]
        })
    }

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);

        this._authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => {
                    console.log(error);
                    this._errorService.handleError(error);
                }
            );
    }

    private isValidMailPattern(control: Control):{[s: string]: boolean} {
        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!control.value.match(pattern)) {
            return { invalidMail: true };
        }
    }
}