System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_fb) {
                    this._fb = _fb;
                    this.error = false;
                    this.errorMessage = '';
                }
                SignupComponent.prototype.onSignup = function () {
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
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVucHJvdGVjdGVkL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBS0kseUJBQW9CLEdBQWU7b0JBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtvQkFIbkMsVUFBSyxHQUFHLEtBQUssQ0FBQztvQkFDZCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztnQkFHbEIsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO2dCQUNBLENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUN6QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQzNCLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsSUFBSSxDQUFDLE9BQU87NkJBQ2YsQ0FBQyxDQUFDO3dCQUNILFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNyQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs2QkFDbEMsQ0FBQyxDQUFDO3FCQUNOLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGlDQUFPLEdBQVAsVUFBUSxPQUFlO29CQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzRCxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx5Q0FBZSxHQUFmLFVBQWdCLE9BQWU7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBRXJDLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzRCxNQUFNLENBQUMsRUFBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDTCxDQUFDO2dCQTlETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtMUNBb0JUO3FCQUNKLENBQUM7O21DQUFBO2dCQXlDRixzQkFBQztZQUFELENBeENBLEFBd0NDLElBQUE7WUF4Q0QsNkNBd0NDLENBQUEiLCJmaWxlIjoidW5wcm90ZWN0ZWQvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgzPlBsZWFzZSBzaWduIHVwIHRvIHVzZSBhbGwgZmVhdHVyZXM8L2gzPlxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnbnVwKClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkUtTWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdlbWFpbCcpXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiICNlbWFpbD1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVtYWlsLnByaXN0aW5lICYmIGVtYWlsLmVycm9ycyAhPSBudWxsICYmIGVtYWlsLmVycm9yc1snbm9FbWFpbCddXCI+SW52YWxpZCBtYWlsIGFkZHJlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPCEtLTxzcGFuICpuZ0lmPVwiZW1haWwuZXJyb3JzWydpc1Rha2VuJ11cIj5UaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW48L3NwYW4+LS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdjb25maXJtUGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiICNjb25maXJtUGFzc3dvcmQ9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maXJtUGFzc3dvcmQucHJpc3RpbmUgJiYgY29uZmlybVBhc3N3b3JkLmVycm9ycyAhPSBudWxsICYmIGNvbmZpcm1QYXNzd29yZC5lcnJvcnNbJ3Bhc3N3b3Jkc05vdE1hdGNoJ11cIj5QYXNzd29yZHMgZG8gbm90IG1hdGNoPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBteUZvcm06Q29udHJvbEdyb3VwO1xuICAgIGVycm9yID0gZmFsc2U7XG4gICAgZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcikge1xuICAgIH1cblxuICAgIG9uU2lnbnVwKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VtYWlsXG4gICAgICAgICAgICBdKV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VxdWFsUGFzc3dvcmQuYmluZCh0aGlzKVxuICAgICAgICAgICAgXSldLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0VtYWlsKGNvbnRyb2w6Q29udHJvbCk6e1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaCgvXlxcdytAW2EtekEtWl9dKz9cXC5bYS16QS1aXXsyLDN9JC8pKSB7XG4gICAgICAgICAgICByZXR1cm4ge25vRW1haWw6IHRydWV9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFcXVhbFBhc3N3b3JkKGNvbnRyb2w6Q29udHJvbCk6e1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgICAgIGlmICghdGhpcy5teUZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiB7cGFzc3dvcmRzTm90TWF0Y2g6IHRydWV9O1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IHRoaXMubXlGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge3Bhc3N3b3Jkc05vdE1hdGNoOiB0cnVlfTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
