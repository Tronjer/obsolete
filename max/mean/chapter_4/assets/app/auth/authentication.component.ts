import {
    Component,
} from '@angular/core';
import {
    ROUTER_DIRECTIVES,
    Routes
} from '@angular/router';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { AuthService } from './auth.service';

@Component({
    selector: 'my-auth',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li *ngIf="!isLoggedIn()"><a [routerLink]="['./signup']">Signup</a></li>
                    <li *ngIf="!isLoggedIn()"><a [routerLink]="['./signin']">Signin</a></li>
                    <li *ngIf="isLoggedIn()"><a [routerLink]="['./logout']">Logout</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .router-link-active {
            color: #555;
            background-color: #fff;
            cursor: default;
            border: 1px solid #ddd;
            border-bottom-color: transparent;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    { path: '', component: SignupComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/signin', component: SigninComponent },
    { path: '/logout', component: LogoutComponent }
])

export class AuthenticationComponent {

    constructor(public authService: AuthService) {}

    isLoggedIn():boolean {
        return this.authService.isLoggedIn();
    }
}