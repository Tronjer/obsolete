System.register(['angular2/core', "angular2/router", "./unprotected/signup.component", "./unprotected/signin.component", "./protected/protected.component", "./protected/supersecret.component", "./shared/header.component", "./shared/auth.service", "./shared/auth-router-outlet.directive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, signup_component_1, signin_component_1, protected_component_1, supersecret_component_1, header_component_1, auth_service_1, auth_router_outlet_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (protected_component_1_1) {
                protected_component_1 = protected_component_1_1;
            },
            function (supersecret_component_1_1) {
                supersecret_component_1 = supersecret_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (auth_router_outlet_directive_1_1) {
                auth_router_outlet_directive_1 = auth_router_outlet_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _authService) {
                    this._router = _router;
                    this._authService = _authService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._authService.getLoggedOutEvent().subscribe(function () { return _this._router.navigate(['Signin']); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <my-header></my-header>\n        <div class=\"main\">\n            <auth-router-outlet></auth-router-outlet>\n        </div>\n    ",
                        directives: [header_component_1.HeaderComponent, auth_router_outlet_directive_1.AuthRouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignupComponent, useAsDefault: true },
                        { path: '/signin', name: 'Signin', component: signin_component_1.SigninComponent },
                        { path: '/protected', name: 'Protected', component: protected_component_1.ProtectedComponent },
                        { path: '/supersecret', name: 'SuperSecret', component: supersecret_component_1.SuperSecretComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQ0ksc0JBQW9CLE9BQWUsRUFBVSxZQUF5QjtvQkFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUcxRSwrQkFBUSxHQUFSO29CQUFBLGlCQUlDO29CQUhHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxTQUFTLENBQzNDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQzFDLENBQUE7Z0JBQ0wsQ0FBQztnQkF4Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDhJQUtUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsK0NBQWdCLENBQUM7cUJBQ2xELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNqRixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQzt3QkFDN0QsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO3dCQUN0RSxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7cUJBQy9FLENBQUM7O2dDQUFBO2dCQVVGLG1CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1Q0FTQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi91bnByb3RlY3RlZC9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vdW5wcm90ZWN0ZWQvc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm90ZWN0ZWRDb21wb25lbnR9IGZyb20gXCIuL3Byb3RlY3RlZC9wcm90ZWN0ZWQuY29tcG9uZW50XCI7XG5pbXBvcnQge1N1cGVyU2VjcmV0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm90ZWN0ZWQvc3VwZXJzZWNyZXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFJvdXRlck91dGxldH0gZnJvbSBcIi4vc2hhcmVkL2F1dGgtcm91dGVyLW91dGxldC5kaXJlY3RpdmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICA8YXV0aC1yb3V0ZXItb3V0bGV0PjwvYXV0aC1yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtIZWFkZXJDb21wb25lbnQsIEF1dGhSb3V0ZXJPdXRsZXRdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy9zaWdudXAnLCBuYW1lOiAnU2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvc2lnbmluJywgbmFtZTogJ1NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9wcm90ZWN0ZWQnLCBuYW1lOiAnUHJvdGVjdGVkJywgY29tcG9uZW50OiBQcm90ZWN0ZWRDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL3N1cGVyc2VjcmV0JywgbmFtZTogJ1N1cGVyU2VjcmV0JywgY29tcG9uZW50OiBTdXBlclNlY3JldENvbXBvbmVudH0sXG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRMb2dnZWRPdXRFdmVudCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ25pbiddKVxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
