System.register(["angular2/core", "./property-binding.component"], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                    this.age = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <section class=\"parent\">\n        <h2>This is the parent component</h2>\n        <h4>Please enter your name</h4>\n        <input type=\"text\" [(ngModel)]=\"name\"><br><br>\n        <input type=\"text\" [(ngModel)]=\"age\"><br><br>\n        <section class=\"child\">\n          <property-binding [myName]=\"name\" [myAge]=\"age\" (hobbiesChanged)=\"hobbies = $event\"></property-binding>\n        </section>\n      </section>\n      <p>My hobbies are (parent): {{ hobbies }}</p>\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztvQkFDbEIsUUFBRyxHQUFXLEVBQUUsQ0FBQztnQkFFckIsQ0FBQztnQkFyQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGdmQVdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHFEQUF3QixDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vcHJvcGVydHktYmluZGluZy5jb21wb25lbnRcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnRcIj5cbiAgICAgICAgPGgyPlRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQ8L2gyPlxuICAgICAgICA8aDQ+UGxlYXNlIGVudGVyIHlvdXIgbmFtZTwvaDQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPjxicj48YnI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiYWdlXCI+PGJyPjxicj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgIDxwcm9wZXJ0eS1iaW5kaW5nIFtteU5hbWVdPVwibmFtZVwiIFtteUFnZV09XCJhZ2VcIiAoaG9iYmllc0NoYW5nZWQpPVwiaG9iYmllcyA9ICRldmVudFwiPjwvcHJvcGVydHktYmluZGluZz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHA+TXkgaG9iYmllcyBhcmUgKHBhcmVudCk6IHt7IGhvYmJpZXMgfX08L3A+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbmFtZTogc3RyaW5nID0gJyc7XG4gICAgYWdlOiBzdHJpbmcgPSAnJztcbiAgICBob2JiaWVzOiBzdHJpbmc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
