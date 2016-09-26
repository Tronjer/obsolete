import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import {
    Routes,
    ROUTER_DIRECTIVES
} from '@angular/router';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { ErrorComponent } from './errors/error.component';

@Component({
    selector: 'my-app',
    template: ` 
      <my-header></my-header>
      <router-outlet></router-outlet>
      <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]

})

@Routes([
    { path: '/', component: MessagesComponent },
    { path: '/auth', component: AuthenticationComponent }
])

export class AppComponent {

}