System.register(["angular2/router", "angular2/core", "./auth.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var router_1, core_1, auth_service_1;
    var AuthRouterOutlet;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AuthRouterOutlet = (function (_super) {
                __extends(AuthRouterOutlet, _super);
                function AuthRouterOutlet(_elementRef, _loader, _parentRouter, _nameAttr, _authService) {
                    _super.call(this, _elementRef, _loader, _parentRouter, _nameAttr);
                    this._parentRouter = _parentRouter;
                    this._authService = _authService;
                    this._protectedRoutes = {
                        'protected': true
                    };
                }
                AuthRouterOutlet.prototype.activate = function (nextInstruction) {
                    var url = nextInstruction.urlPath;
                    if (this._protectedRoutes[url] && !this._authService.isAuthenticated()) {
                        this._parentRouter.navigate(['Signin']);
                    }
                    return _super.prototype.activate.call(this, nextInstruction);
                };
                AuthRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'auth-router-outlet'
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, auth_service_1.AuthService])
                ], AuthRouterOutlet);
                return AuthRouterOutlet;
            }(router_1.RouterOutlet));
            exports_1("AuthRouterOutlet", AuthRouterOutlet);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hdXRoLXJvdXRlci1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBc0Msb0NBQVk7Z0JBSzlDLDBCQUFZLFdBQXVCLEVBQUUsT0FBK0IsRUFBVSxhQUFxQixFQUFxQixTQUFpQixFQUFVLFlBQXlCO29CQUN4SyxrQkFBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFEb0Isa0JBQWEsR0FBYixhQUFhLENBQVE7b0JBQWdELGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUpwSyxxQkFBZ0IsR0FBRzt3QkFDdkIsV0FBVyxFQUFFLElBQUk7cUJBQ3BCLENBQUM7Z0JBSUYsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSLFVBQVMsZUFBcUM7b0JBQzFDLElBQU0sR0FBRyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7b0JBRXBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLENBQUM7b0JBRUQsTUFBTSxDQUFDLGdCQUFLLENBQUMsUUFBUSxZQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7cUJBQ2pDLENBQUM7K0JBT3dHLGdCQUFTLENBQUMsTUFBTSxDQUFDOztvQ0FQekg7Z0JBb0JGLHVCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsQ0FsQnFDLHFCQUFZLEdBa0JqRDtZQWxCRCwrQ0FrQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXV0aC1yb3V0ZXItb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyT3V0bGV0LCBSb3V0ZXIsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRHluYW1pY0NvbXBvbmVudExvYWRlciwgQXR0cmlidXRlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnYXV0aC1yb3V0ZXItb3V0bGV0J1xufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhSb3V0ZXJPdXRsZXQgZXh0ZW5kcyBSb3V0ZXJPdXRsZXQge1xuICAgIHByaXZhdGUgX3Byb3RlY3RlZFJvdXRlcyA9IHtcbiAgICAgICAgJ3Byb3RlY3RlZCc6IHRydWVcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIF9sb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsIHByaXZhdGUgX3BhcmVudFJvdXRlcjogUm91dGVyLCBAQXR0cmlidXRlKCduYW1lJykgX25hbWVBdHRyOiBzdHJpbmcsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgICAgICBzdXBlcihfZWxlbWVudFJlZiwgX2xvYWRlciwgX3BhcmVudFJvdXRlciwgX25hbWVBdHRyKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV4dEluc3RydWN0aW9uLnVybFBhdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Byb3RlY3RlZFJvdXRlc1t1cmxdICYmICF0aGlzLiBfYXV0aFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudFJvdXRlci5uYXZpZ2F0ZShbJ1NpZ25pbiddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5hY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb24pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
