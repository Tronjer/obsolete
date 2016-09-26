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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n      <h1>You Submitted the following details. Is this correct?</h1>\n      <p>Your name is <span>{{ myself.name }}</span> and you're <span>{{ myself.age }}</span> years old.</p>\n      <div>\n      <label for=\"name\">Your Name</label>\n      <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n    </div>\n    <div>\n      <label for=\"age\">Your Age</label>\n      <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n    </div>\n    <div>Filled out: {{ isFilled ? 'Yes' : 'No' }}</div>\n    <div>Valid: {{ isValid ? 'Yes' : 'No' }}</div>\n    <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Submit</button>,\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed'] //pass Event to parent
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUFBO29CQUNJLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUVoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUE2QixDQUFDO2dCQW9COUQsQ0FBQztnQkFsQkcsa0NBQU8sR0FBUDtvQkFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBN0NMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxvckJBY1Q7d0JBQ0QsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUNsQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxzQkFBc0I7cUJBQ2hELENBQUM7O29DQUFBO2dCQTJCRix1QkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQsK0NBeUJDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jb25maXJtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGgxPllvdSBTdWJtaXR0ZWQgdGhlIGZvbGxvd2luZyBkZXRhaWxzLiBJcyB0aGlzIGNvcnJlY3Q/PC9oMT5cbiAgICAgIDxwPllvdXIgbmFtZSBpcyA8c3Bhbj57eyBteXNlbGYubmFtZSB9fTwvc3Bhbj4gYW5kIHlvdSdyZSA8c3Bhbj57eyBteXNlbGYuYWdlIH19PC9zcGFuPiB5ZWFycyBvbGQuPC9wPlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJhZ2VcIj5Zb3VyIEFnZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PkZpbGxlZCBvdXQ6IHt7IGlzRmlsbGVkID8gJ1llcycgOiAnTm8nIH19PC9kaXY+XG4gICAgPGRpdj5WYWxpZDoge3sgaXNWYWxpZCA/ICdZZXMnIDogJ05vJyB9fTwvZGl2PlxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uQ29uZmlybSgpXCI+U3VibWl0PC9idXR0b24+LFxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ215c2VsZiddLCAvL2JpbmQgcHJvcGVydHlcbiAgICBvdXRwdXRzOiBbJ2NvbmZpcm1lZCddIC8vcGFzcyBFdmVudCB0byBwYXJlbnRcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50IHtcbiAgICBteXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuICAgIGlzRmlsbGVkID0gZmFsc2U7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgY29uZmlybWVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTpzdHJpbmcsIGFnZTpzdHJpbmd9PigpO1xuXG4gICAgb25LZXl1cCgpIHtcblxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5jb25maXJtZWQuZW1pdCh0aGlzLm15c2VsZik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
