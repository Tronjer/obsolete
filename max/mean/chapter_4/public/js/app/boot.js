"use strict";
///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require("./app.component");
var message_service_1 = require('./messages/message.service');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var auth_service_1 = require('./auth/auth.service');
var error_service_1 = require('./errors/error.service');
core_2.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    message_service_1.MessageService,
    auth_service_1.AuthService,
    error_service_1.ErrorService,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    // uses /#/ for clientside routing (needed for deeplinks)
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6Qyx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUU5RCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCx1QkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRCxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBR08saUJBQWlCLENBQUMsQ0FBQTtBQUN6QixxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDZCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXRELHFCQUFjLEVBQUUsQ0FBQTtBQUVoQixvQ0FBUyxDQUFDLDRCQUFZLEVBQUU7SUFDcEIsZ0NBQWM7SUFDZCwwQkFBVztJQUNYLDRCQUFZO0lBQ1oseUJBQWdCO0lBQ2hCLHFCQUFjO0lBRWQseURBQXlEO0lBQ3pELGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRSxDQUFDO0NBQ2hFLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy5kLnRzXCIvPlxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgTG9jYXRpb25TdHJhdGVneSxcbiAgICBIYXNoTG9jYXRpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5cbmVuYWJsZVByb2RNb2RlKClcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICAgIE1lc3NhZ2VTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2aWNlLFxuICAgIEVycm9yU2VydmljZSxcbiAgICBST1VURVJfUFJPVklERVJTLFxuICAgIEhUVFBfUFJPVklERVJTLFxuXG4gICAgLy8gdXNlcyAvIy8gZm9yIGNsaWVudHNpZGUgcm91dGluZyAobmVlZGVkIGZvciBkZWVwbGlua3MpXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7IHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9KVxuXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9