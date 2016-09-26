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
    var SuperSecretComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SuperSecretComponent = (function () {
                function SuperSecretComponent() {
                }
                SuperSecretComponent.prototype.onGetData = function () {
                };
                SuperSecretComponent.prototype.onDeleteData = function () {
                };
                SuperSecretComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Data</h1>\n        <p>{{ dataset }}</p>\n        <button (click)=\"onGetData()\">Get Data</button>\n        <br>\n        <button (click)=\"onDeleteData()\">Delete all Data</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SuperSecretComponent);
                return SuperSecretComponent;
            }());
            exports_1("SuperSecretComponent", SuperSecretComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RlY3RlZC9zdXBlcnNlY3JldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFHSTtnQkFBZ0IsQ0FBQztnQkFFakIsd0NBQVMsR0FBVDtnQkFDQSxDQUFDO2dCQUVELDJDQUFZLEdBQVo7Z0JBQ0EsQ0FBQztnQkFuQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMk1BTVQ7cUJBQ0osQ0FBQzs7d0NBQUE7Z0JBWUYsMkJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHVEQVVDLENBQUEiLCJmaWxlIjoicHJvdGVjdGVkL3N1cGVyc2VjcmV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+RGF0YTwvaDE+XG4gICAgICAgIDxwPnt7IGRhdGFzZXQgfX08L3A+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0RGF0YSgpXCI+R2V0IERhdGE8L2J1dHRvbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkRlbGV0ZURhdGEoKVwiPkRlbGV0ZSBhbGwgRGF0YTwvYnV0dG9uPlxuICAgIGBcbn0pXG4vLyBAQ2FuQWN0aXZhdGUoKVxuZXhwb3J0IGNsYXNzIFN1cGVyU2VjcmV0Q29tcG9uZW50IHtcbiAgICBkYXRhc2V0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgb25HZXREYXRhKCkge1xuICAgIH1cblxuICAgIG9uRGVsZXRlRGF0YSgpIHtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
