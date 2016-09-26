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
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    //age: number = 20;
                    this.age = ''; //Alias nameOutsideComp: nameInsideComp
                    //hobbiesChanged = new EventEmitter<string>();
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    //pass hobbies to EventEmitter
                    this.hobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_1.Input('myAge'), 
                    __metadata('design:type', String)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'property-binding',
                        template: "\n      <h2>This is the child component</h2>\n      <p>Hey {{ name }} and I am {{ age }} years.</p>\n      <h4>My Hobbies are (child):</h4>\n      <input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n    ",
                        inputs: ['name: myName'],
                        outputs: ['hobbiesChanged'] //Pass EventEmitter
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztvQkFDbEIsbUJBQW1CO29CQUNILFFBQUcsR0FBVyxFQUFFLENBQUMsQ0FBQyx1Q0FBdUM7b0JBQ3pFLDhDQUE4QztvQkFDOUMsbUJBQWMsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFPaEQsQ0FBQztnQkFMRyxtREFBZ0IsR0FBaEIsVUFBaUIsT0FBZTtvQkFFNUIsOEJBQThCO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFSRDtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztxRUFBQTtnQkFmbkI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUscU9BS1Q7d0JBQ0QsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDO3dCQUN4QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLG1CQUFtQjtxQkFDbEQsQ0FBQzs7NENBQUE7Z0JBY0YsK0JBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELCtEQVlDLENBQUEiLCJmaWxlIjoicHJvcGVydHktYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9wZXJ0eS1iaW5kaW5nJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGgyPlRoaXMgaXMgdGhlIGNoaWxkIGNvbXBvbmVudDwvaDI+XG4gICAgICA8cD5IZXkge3sgbmFtZSB9fSBhbmQgSSBhbSB7eyBhZ2UgfX0geWVhcnMuPC9wPlxuICAgICAgPGg0Pk15IEhvYmJpZXMgYXJlIChjaGlsZCk6PC9oND5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJvbkhvYmJpZXNDaGFuZ2VkKGhvYmJpZXMudmFsdWUpXCIgI2hvYmJpZXM+XG4gICAgYCxcbiAgICBpbnB1dHM6IFsnbmFtZTogbXlOYW1lJ10sIC8vQWxpYXMgbmFtZUluc2lkZUNvbXA6IG5hbWVPdXRzaWRlQ29tcCAocGFyZW50IC0+IGNoaWxkKVxuICAgIG91dHB1dHM6IFsnaG9iYmllc0NoYW5nZWQnXSAvL1Bhc3MgRXZlbnRFbWl0dGVyXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50IHtcbiAgICBuYW1lOiBzdHJpbmcgPSAnJztcbiAgICAvL2FnZTogbnVtYmVyID0gMjA7XG4gICAgQElucHV0KCdteUFnZScpIGFnZTogc3RyaW5nID0gJyc7IC8vQWxpYXMgbmFtZU91dHNpZGVDb21wOiBuYW1lSW5zaWRlQ29tcFxuICAgIC8vaG9iYmllc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBob2JiaWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgb25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOiBzdHJpbmcpIHtcblxuICAgICAgICAvL3Bhc3MgaG9iYmllcyB0byBFdmVudEVtaXR0ZXJcbiAgICAgICAgdGhpcy5ob2JiaWVzQ2hhbmdlZC5lbWl0KGhvYmJpZXMpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
