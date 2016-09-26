System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TemplateDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent() {
                    this.user = { mail: '', password: '' };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    console.log('form: ' + form);
                    //this.user.mail = form.value['email'];
                    //this.user.password = form.controls['password'].value;
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n        <h2>Sign-up form</h2>\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input ngControl=\"email\" type=\"text\" id=\"mail\" required>\n                <span class=\"validation-error\" >Not valid</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input ngControl=\"password\" type=\"text\" id=\"password\" required >\n                <span class=\"validation-error\" >Not valid</span>\n            </div>\n            <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" required>\n                <span class=\"validation-error\">Not valid</span>\n            </div>\n            <button type=\"submit\" >Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.mail}}</div>\n        <div>Password: {{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFPcEMsQ0FBQztnQkFMRyw4Q0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsdUNBQXVDO29CQUN2Qyx1REFBdUQ7Z0JBQzNELENBQUM7Z0JBbENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLG9pQ0F1QlQ7cUJBQ0osQ0FBQzs7K0NBQUE7Z0JBU0Ysa0NBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHFFQVFDLENBQUEiLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdGVtcGxhdGUtZHJpdmVuJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+U2lnbi11cCBmb3JtPC9oMj5cbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiID5Ob3QgdmFsaWQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiA+Tm90IHZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImNvbmZpcm0tcGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiPk5vdCB2YWxpZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxoMj5Zb3Ugc3VibWl0dGVkPC9oMj5cbiAgICAgICAgPGRpdj5NYWlsOiB7e3VzZXIubWFpbH19PC9kaXY+XG4gICAgICAgIDxkaXY+UGFzc3dvcmQ6IHt7dXNlci5wYXNzd29yZH19PC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZURyaXZlbkZvcm1Db21wb25lbnQge1xuICAgIHVzZXIgPSB7bWFpbDogJycsIHBhc3N3b3JkOiAnJ307XG5cbiAgICBvblN1Ym1pdChmb3JtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtOiAnICsgZm9ybSk7XG4gICAgICAgIC8vdGhpcy51c2VyLm1haWwgPSBmb3JtLnZhbHVlWydlbWFpbCddO1xuICAgICAgICAvL3RoaXMudXNlci5wYXNzd29yZCA9IGZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
