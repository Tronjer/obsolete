System.register(["angular2/core", "angular2/common", "../shared/data.service"], function(exports_1, context_1) {
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
    var core_1, common_1, data_service_1;
    var ProtectedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            ProtectedComponent = (function () {
                function ProtectedComponent(_fb, _dataService) {
                    this._fb = _fb;
                    this._dataService = _dataService;
                }
                ProtectedComponent.prototype.onSaveData = function () {
                    this._dataService.addData(this.myForm.value)
                        .subscribe(// observable
                    function (// observable
                        data) { return console.log(data); }, // success handler
                    function (// success handler
                        error) { return console.log(error); } // error handler
                     // error handler
                    );
                };
                ProtectedComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        title: ['', common_1.Validators.required],
                        content: ['', common_1.Validators.required],
                    });
                };
                ProtectedComponent = __decorate([
                    core_1.Component({
                        template: "\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSaveData()\">\n            <div class=\"input-group\">\n                <label for=\"title\">Title</label>\n                <input [ngFormControl]=\"myForm.find('title')\" type=\"text\" id=\"title\" #title=\"ngForm\">\n            </div>\n            <div class=\"input-group\">\n                <label for=\"content\">Content</label>\n                <input [ngFormControl]=\"myForm.find('content')\" type=\"text\" id=\"content\">\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Data</button>\n        </form>\n    ",
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, data_service_1.DataService])
                ], ProtectedComponent);
                return ProtectedComponent;
            }());
            exports_1("ProtectedComponent", ProtectedComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RlY3RlZC9wcm90ZWN0ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJLDRCQUFvQixHQUFnQixFQUFVLFlBQXlCO29CQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFhO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRTNFLHVDQUFVLEdBQVY7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7eUJBQ3ZDLFNBQVMsQ0FBRSxhQUFhO29CQUNyQixVQURRLGFBQWE7d0JBQ3JCLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQUUsa0JBQWtCO29CQUM3QyxVQUQyQixrQkFBa0I7d0JBQzdDLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsZ0JBQWdCO29CQUFqQixDQUFDLGdCQUFnQjtxQkFDL0MsQ0FBQztnQkFDVixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDMUIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3bUJBWVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7c0NBQUE7Z0JBb0JGLHlCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCxtREFtQkMsQ0FBQSIsImZpbGUiOiJwcm90ZWN0ZWQvcHJvdGVjdGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RvciwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU2F2ZURhdGEoKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgndGl0bGUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiICN0aXRsZT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnY29udGVudCcpXCIgdHlwZT1cInRleHRcIiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5BZGQgRGF0YTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvdGVjdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG4gICAgb25TYXZlRGF0YSgpIHtcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuYWRkRGF0YSh0aGlzLm15Rm9ybS52YWx1ZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIC8vIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLCAvLyBzdWNjZXNzIGhhbmRsZXJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikgLy8gZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgY29udGVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
