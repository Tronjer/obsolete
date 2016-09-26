System.register(["angular2/core", "../shared/data.service"], function(exports_1, context_1) {
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
    var core_1, data_service_1;
    var SuperSecretComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            SuperSecretComponent = (function () {
                function SuperSecretComponent(_dataService) {
                    this._dataService = _dataService;
                }
                SuperSecretComponent.prototype.onGetData = function () {
                    var _this = this;
                    this._dataService.getAllData()
                        .subscribe(// observable
                    function (// observable
                        data) { return _this.dataset = JSON.stringify(data); }, // success handler
                    function (// success handler
                        error) { return console.log(error); } // error handler
                     // error handler
                    );
                };
                SuperSecretComponent.prototype.onDeleteData = function () {
                    var _this = this;
                    this._dataService.deleteAllData()
                        .subscribe(// observable
                    function (// observable
                        data) { return _this.dataset = ''; }, // success handler
                    function (// success handler
                        error) { return console.log(error); } // error handler
                     // error handler
                    );
                };
                SuperSecretComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Data</h1>\n        <p>{{ dataset }}</p>\n        <button (click)=\"onGetData()\">Get Data</button>\n        <br>\n        <button (click)=\"onDeleteData()\">Delete all Data</button>\n    ",
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], SuperSecretComponent);
                return SuperSecretComponent;
            }());
            exports_1("SuperSecretComponent", SuperSecretComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RlY3RlZC9zdXBlcnNlY3JldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFHSSw4QkFBcUIsWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRWxELHdDQUFTLEdBQVQ7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7eUJBQ3pCLFNBQVMsQ0FBRSxhQUFhO29CQUNyQixVQURRLGFBQWE7d0JBQ3JCLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBbkMsQ0FBbUMsRUFBRSxrQkFBa0I7b0JBQy9ELFVBRDZDLGtCQUFrQjt3QkFDL0QsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxnQkFBZ0I7b0JBQWpCLENBQUMsZ0JBQWdCO3FCQUMvQyxDQUFBO2dCQUNULENBQUM7Z0JBRUQsMkNBQVksR0FBWjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTt5QkFDNUIsU0FBUyxDQUFFLGFBQWE7b0JBQ3JCLFVBRFEsYUFBYTt3QkFDckIsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQWpCLENBQWlCLEVBQUUsa0JBQWtCO29CQUM3QyxVQUQyQixrQkFBa0I7d0JBQzdDLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsZ0JBQWdCO29CQUFqQixDQUFDLGdCQUFnQjtxQkFDL0MsQ0FBQTtnQkFDVCxDQUFDO2dCQTlCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSwyTUFNVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOzt3Q0FBQTtnQkFzQkYsMkJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVEQW9CQyxDQUFBIiwiZmlsZSI6InByb3RlY3RlZC9zdXBlcnNlY3JldC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQge2Vycm9yfSBmcm9tIFwidXRpbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+RGF0YTwvaDE+XG4gICAgICAgIDxwPnt7IGRhdGFzZXQgfX08L3A+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0RGF0YSgpXCI+R2V0IERhdGE8L2J1dHRvbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkRlbGV0ZURhdGEoKVwiPkRlbGV0ZSBhbGwgRGF0YTwvYnV0dG9uPlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdXG59KVxuLy8gQENhbkFjdGl2YXRlKClcbmV4cG9ydCBjbGFzcyBTdXBlclNlY3JldENvbXBvbmVudCB7XG4gICAgZGF0YXNldDogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cblxuICAgIG9uR2V0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0QWxsRGF0YSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCAvLyBvYnNlcnZhYmxlXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmRhdGFzZXQgPSBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy8gc3VjY2VzcyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpIC8vIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBvbkRlbGV0ZURhdGEoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmRlbGV0ZUFsbERhdGEoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggLy8gb2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5kYXRhc2V0ID0gJycsIC8vIHN1Y2Nlc3MgaGFuZGxlclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSAvLyBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
