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
    var core_1, common_1, common_2;
    var DataDrivenFormComponent;
    function hasNumbers(control) {
        if (!control.value.match('\\d+')) {
            return { noNumbers: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            DataDrivenFormComponent = (function () {
                function DataDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.user = { email: '', password: '' };
                }
                DataDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user = this.myForm.value;
                };
                DataDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'email': ['', common_2.Validators.required],
                        'password': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                hasNumbers
                            ])],
                        'confirmPassword': ['', common_2.Validators.required],
                    });
                };
                DataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-data-driven',
                        template: "\n        <h2>Sign-up form</h2>\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"mail\" #mail=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!mail.valid\">Not valid</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\" #password=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!password.valid\">Not valid</span>\n            </div>\n            <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirm-password\"  #confirmPassword=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!confirmPassword.valid\">Not valid</span>\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.email}}</div>\n        <div>Password: {{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBd0RBLG9CQUFvQixPQUFnQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7O1lBMUJEO2dCQUlJLGlDQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRjdDLFNBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUVlLENBQUM7Z0JBRWpELDBDQUFRLEdBQVIsVUFBUyxJQUFJO29CQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQsMENBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDaEMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixVQUFVOzZCQUNiLENBQUMsQ0FBQzt3QkFDSCxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDL0MsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBOUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLDh1Q0F1QlQ7cUJBQ0osQ0FBQzs7MkNBQUE7Z0JBcUJGLDhCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCw2REFvQkMsQ0FBQSIsImZpbGUiOiJkYXRhLWRyaXZlbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1kYXRhLWRyaXZlbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgyPlNpZ24tdXAgZm9ybTwvaDI+XG4gICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFpbFwiPk1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiICNtYWlsPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhbWFpbC52YWxpZFwiPk5vdCB2YWxpZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiICNwYXNzd29yZD1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIXBhc3N3b3JkLnZhbGlkXCI+Tm90IHZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiICAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhY29uZmlybVBhc3N3b3JkLnZhbGlkXCI+Tm90IHZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZDwvaDI+XG4gICAgICAgIDxkaXY+TWFpbDoge3t1c2VyLmVtYWlsfX08L2Rpdj5cbiAgICAgICAgPGRpdj5QYXNzd29yZDoge3t1c2VyLnBhc3N3b3JkfX08L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFEcml2ZW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcbiAgICB1c2VyID0ge2VtYWlsOiAnJywgcGFzc3dvcmQ6ICcnfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICAgIG9uU3VibWl0KGZvcm0pIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBoYXNOdW1iZXJzXG4gICAgICAgICAgICBdKV0sXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNOdW1iZXJzKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goJ1xcXFxkKycpKSB7XG4gICAgICAgIHJldHVybiB7bm9OdW1iZXJzOiB0cnVlfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
