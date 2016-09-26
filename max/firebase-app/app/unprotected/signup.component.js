System.register(["angular2/core", "angular2/common", "../shared/auth.service"], function(exports_1, context_1) {
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
    var core_1, common_1, auth_service_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_fb, _authService) {
                    this._fb = _fb;
                    this._authService = _authService;
                    this.error = false;
                    this.errorMessage = '';
                }
                SignupComponent.prototype.onSignup = function () {
                    this._authService.signupUser(this.myForm.value);
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_1.Validators.required],
                        confirmPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isEqualPassword.bind(this)
                            ])],
                    });
                };
                SignupComponent.prototype.isEmail = function (control) {
                    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                        return { noEmail: true };
                    }
                };
                SignupComponent.prototype.isEqualPassword = function (control) {
                    if (!this.myForm) {
                        return { passwordsNotMatch: true };
                    }
                    if (control.value !== this.myForm.controls['password'].value) {
                        return { passwordsNotMatch: true };
                    }
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h3>Please sign up to use all features</h3>\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSignup()\">\n            <div class=\"input-group\">\n                <label for=\"email\">E-Mail</label>\n                <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" #email=\"ngForm\">\n                <span *ngIf=\"!email.pristine && email.errors != null && email.errors['noEmail']\">Invalid mail address</span>\n                <!--<span *ngIf=\"email.errors['isTaken']\">This username has already been taken</span>-->\n            </div>\n            <div class=\"input-group\">\n                <label for=\"password\">Password</label>\n                <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\">\n            </div>\n            <div class=\"input-group\">\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input [ngFormControl]=\"myForm.find('confirmPassword')\" type=\"password\" id=\"confirm-password\" #confirmPassword=\"ngForm\">\n                <span *ngIf=\"!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors['passwordsNotMatch']\">Passwords do not match</span>\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Sign Up</button>\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVucHJvdGVjdGVkL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBS0kseUJBQW9CLEdBQWUsRUFBVSxZQUF5QjtvQkFBbEQsUUFBRyxHQUFILEdBQUcsQ0FBWTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIdEUsVUFBSyxHQUFHLEtBQUssQ0FBQztvQkFDZCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztnQkFHbEIsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUN6QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQzNCLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsSUFBSSxDQUFDLE9BQU87NkJBQ2YsQ0FBQyxDQUFDO3dCQUNILFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNyQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs2QkFDbEMsQ0FBQyxDQUFDO3FCQUNOLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGlDQUFPLEdBQVAsVUFBUSxPQUFlO29CQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzRCxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx5Q0FBZSxHQUFmLFVBQWdCLE9BQWU7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBRXJDLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzRCxNQUFNLENBQUMsRUFBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDTCxDQUFDO2dCQS9ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtMUNBb0JUO3FCQUNKLENBQUM7O21DQUFBO2dCQTBDRixzQkFBQztZQUFELENBekNBLEFBeUNDLElBQUE7WUF6Q0QsNkNBeUNDLENBQUEiLCJmaWxlIjoidW5wcm90ZWN0ZWQvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMz5QbGVhc2Ugc2lnbiB1cCB0byB1c2UgYWxsIGZlYXR1cmVzPC9oMz5cbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ251cCgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLU1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiAjZW1haWw9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlbWFpbC5wcmlzdGluZSAmJiBlbWFpbC5lcnJvcnMgIT0gbnVsbCAmJiBlbWFpbC5lcnJvcnNbJ25vRW1haWwnXVwiPkludmFsaWQgbWFpbCBhZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS08c3BhbiAqbmdJZj1cImVtYWlsLmVycm9yc1snaXNUYWtlbiddXCI+VGhpcyB1c2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuPC9zcGFuPi0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnY29uZmlybVBhc3N3b3JkJylcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm0tcGFzc3dvcmRcIiAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlybVBhc3N3b3JkLnByaXN0aW5lICYmIGNvbmZpcm1QYXNzd29yZC5lcnJvcnMgIT0gbnVsbCAmJiBjb25maXJtUGFzc3dvcmQuZXJyb3JzWydwYXNzd29yZHNOb3RNYXRjaCddXCI+UGFzc3dvcmRzIGRvIG5vdCBtYXRjaDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbXlGb3JtOkNvbnRyb2xHcm91cDtcbiAgICBlcnJvciA9IGZhbHNlO1xuICAgIGVycm9yTWVzc2FnZSA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU2lnbnVwKCkge1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWdudXBVc2VyKHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbWFpbFxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNFcXVhbFBhc3N3b3JkLmJpbmQodGhpcylcbiAgICAgICAgICAgIF0pXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNFbWFpbChjb250cm9sOkNvbnRyb2wpOntbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgICAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goL15cXHcrQFthLXpBLVpfXSs/XFwuW2EtekEtWl17MiwzfSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtub0VtYWlsOiB0cnVlfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRXF1YWxQYXNzd29yZChjb250cm9sOkNvbnRyb2wpOntbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgICAgICBpZiAoIXRoaXMubXlGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4ge3Bhc3N3b3Jkc05vdE1hdGNoOiB0cnVlfTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSB0aGlzLm15Rm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtwYXNzd29yZHNOb3RNYXRjaDogdHJ1ZX07XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
