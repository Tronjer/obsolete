"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var logout_component_1 = require('./logout.component');
var auth_service_1 = require('./auth.service');
var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['./signup']\">Signup</a></li>\n                    <li *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['./signin']\">Signin</a></li>\n                    <li *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['./logout']\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            styles: ["\n        .router-link-active {\n            color: #555;\n            background-color: #fff;\n            cursor: default;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n    "],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '', component: signup_component_1.SignupComponent },
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFFTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix1QkFHTyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pCLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBcUM3QztJQUVJLGlDQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFL0MsNENBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUF6Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHdsQkFhVDtZQUNELE1BQU0sRUFBRSxDQUFDLG1PQVFSLENBQUM7WUFDRixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNsQyxDQUFDO1FBRUQsZUFBTSxDQUFDO1lBQ0osRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1NBQ2xELENBQUM7OytCQUFBO0lBU0YsOEJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLCtCQUF1QiwwQkFPbkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgUm91dGVzXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduaW4uY29tcG9uZW50JztcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hdXRoJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiIWlzTG9nZ2VkSW4oKVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9zaWdudXAnXVwiPlNpZ251cDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+PGEgW3JvdXRlckxpbmtdPVwiWycuL3NpZ25pbiddXCI+U2lnbmluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9sb2dvdXQnXVwiPkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVzKFtcbiAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9zaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9zaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICAgIGlzTG9nZ2VkSW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
