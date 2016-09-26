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
    var TwoWayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TwoWayComponent = (function () {
                function TwoWayComponent() {
                    this.name = 'Matt';
                    this.values = '';
                }
                TwoWayComponent.prototype.onKeyUp = function (value) {
                    this.values += value + ' | ';
                };
                TwoWayComponent = __decorate([
                    core_1.Component({
                        selector: 'two-way',
                        template: "\n      <input type=\"text\" [value]=\"name\" [ngClass]=\"{active: true}\" (keyup)=\"onKeyUp(inputElement.value)\" #inputElement>\n      <p>Value: {{ values }}</p>\n      <input type=\"text\" [(ngModel)]=\"name\">\n      <p>Your name: {{ name }}</p>\n    ",
                        styles: ['.active {color: red}'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TwoWayComponent);
                return TwoWayComponent;
            }());
            exports_1("TwoWayComponent", TwoWayComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by13YXkuYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDSSxTQUFJLEdBQVcsTUFBTSxDQUFDO29CQUN0QixXQUFNLEdBQVcsRUFBRSxDQUFDO2dCQUt4QixDQUFDO2dCQUhHLGlDQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNqQixJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLENBQUM7Z0JBakJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxpUUFLVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDbkMsQ0FBQzs7bUNBQUE7Z0JBU0Ysc0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDZDQU9DLENBQUEiLCJmaWxlIjoidHdvLXdheS5iaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0d28td2F5JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cIm5hbWVcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiB0cnVlfVwiIChrZXl1cCk9XCJvbktleVVwKGlucHV0RWxlbWVudC52YWx1ZSlcIiAjaW5wdXRFbGVtZW50PlxuICAgICAgPHA+VmFsdWU6IHt7IHZhbHVlcyB9fTwvcD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgICAgPHA+WW91ciBuYW1lOiB7eyBuYW1lIH19PC9wPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbJy5hY3RpdmUge2NvbG9yOiByZWR9J10sXG59KVxuXG5leHBvcnQgY2xhc3MgVHdvV2F5Q29tcG9uZW50IHtcbiAgICBuYW1lOiBzdHJpbmcgPSAnTWF0dCc7XG4gICAgdmFsdWVzOiBzdHJpbmcgPSAnJztcblxuICAgIG9uS2V5VXAodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbHVlcyArPSB2YWx1ZSArICcgfCAnO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
