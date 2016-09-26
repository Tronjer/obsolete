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
    var core_1, common_1;
    var ProtectedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ProtectedComponent = (function () {
                function ProtectedComponent(_fb) {
                    this._fb = _fb;
                }
                ProtectedComponent.prototype.onSaveData = function () {
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
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ProtectedComponent);
                return ProtectedComponent;
            }());
            exports_1("ProtectedComponent", ProtectedComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RlY3RlZC9wcm90ZWN0ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUdJLDRCQUFvQixHQUFnQjtvQkFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtnQkFBRyxDQUFDO2dCQUV4Qyx1Q0FBVSxHQUFWO2dCQUNBLENBQUM7Z0JBRUQscUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUMxQixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2hDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDcEMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHdtQkFZVDtxQkFDSixDQUFDOztzQ0FBQTtnQkFlRix5QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsbURBY0MsQ0FBQSIsImZpbGUiOiJwcm90ZWN0ZWQvcHJvdGVjdGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RvciwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TYXZlRGF0YSgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCd0aXRsZScpXCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgI3RpdGxlPVwibmdGb3JtXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdjb250ZW50JylcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPkFkZCBEYXRhPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQcm90ZWN0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gICAgb25TYXZlRGF0YSgpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgY29udGVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
