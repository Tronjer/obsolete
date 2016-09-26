System.register(['angular2/core', "./bindings/input.component", "./bindings/confirm.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                //consume event from child
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = { name: myself.name, age: myself.age };
                    console.debug('submitted', this.myself);
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                    console.debug('confirmed', this.myself);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n         <div class=\"container\">\n            <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input> \n         </div>\n         <div class=\"container\">\n            <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm> \n         </div>\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBRUksV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzdCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFZMUMsQ0FBQztnQkFWRywwQkFBMEI7Z0JBQzVCLCtCQUFRLEdBQVIsVUFBUyxNQUFtQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCxnQ0FBUyxHQUFULFVBQVUsTUFBbUM7b0JBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDO29CQUMxRCxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBMUJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxrVEFPVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9DQUFnQixDQUFDO3FCQUNqRCxDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHVDQWVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gXCIuL2JpbmRpbmdzL2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fSBmcm9tIFwiLi9iaW5kaW5ncy9jb25maXJtLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxteS1pbnB1dCAoc3VibWl0dGVkKT1cIm9uU3VibWl0KCRldmVudClcIiBbbXlzZWxmXT1cImNvbmZpcm1lZE15c2VsZlwiPjwvbXktaW5wdXQ+IFxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktY29uZmlybSAoY29uZmlybWVkKT1cIm9uQ29uZmlybSgkZXZlbnQpXCIgW215c2VsZl09XCJteXNlbGZcIj48L215LWNvbmZpcm0+IFxuICAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSW5wdXRDb21wb25lbnQsIENvbmZpcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBteXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuICAgIGNvbmZpcm1lZE15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG5cbiAgICAvL2NvbnN1bWUgZXZlbnQgZnJvbSBjaGlsZFxuICBvblN1Ym1pdChteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSkge1xuICAgIHRoaXMubXlzZWxmID0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9O1xuICAgIGNvbnNvbGUuZGVidWcoJ3N1Ym1pdHRlZCcsdGhpcy5teXNlbGYpO1xuICB9XG5cbiAgb25Db25maXJtKG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gICAgdGhpcy5jb25maXJtZWRNeXNlbGYgPSB7bmFtZTogbXlzZWxmLm5hbWUsIGFnZTogbXlzZWxmLmFnZX07XG4gICAgICBjb25zb2xlLmRlYnVnKCdjb25maXJtZWQnLHRoaXMubXlzZWxmKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
