import {
    Component,
    OnInit
} from '@angular/core';
import {
    ControlGroup,
    FormBuilder,
    Validators,
    Control
} from '@angular/common';
import { AuthService } from './auth.service';
import { User } from './user';
import { Router } from '@angular/router';
import { ErrorService } from '../errors/error.service';

@Component({
    selector: 'my-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input [ngFormControl]="myForm.find('email')" type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="password">password</label>
                    <input [ngFormControl]="myForm.find('password')" type="password" class="form-control" id="password">
                </div>
                <button class="btn btn-primary" [disabled]="!myForm.valid">Sign in</button>
            </form>
        </section>
    `
})

export class SigninComponent implements OnInit{
    myForm: ControlGroup;

    constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router, private _errorService: ErrorService) {}

    ngOnInit():any {
        this.myForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isValidMailPattern
            ])],
            password: ['', Validators.required]
        })
    }

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password);

        this._authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._router.navigate(['/auth']);
                },
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