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
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService() {
                    this._url = 'https://users-seed.firebaseio.com';
                    this._firebaseRef = new Firebase(this._url);
                    this._userLoggedOut = new core_1.EventEmitter();
                }
                AuthService.prototype.signupUser = function (user) {
                    this._firebaseRef.createUser({
                        email: user.email,
                        password: user.password
                    }, function (error, userData) {
                        if (error) {
                            console.debug(error);
                        }
                        else {
                            console.debug('Success', userData);
                        }
                    });
                };
                AuthService.prototype.signinUser = function (user) {
                    this._firebaseRef.authWithPassword({
                        email: user.email,
                        password: user.password
                    }, function (error, authData) {
                        if (error) {
                            console.debug(error);
                        }
                        else {
                            localStorage.setItem('token', authData.token);
                            console.debug('Success', authData);
                        }
                    });
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('token');
                    this._userLoggedOut.emit(null);
                };
                AuthService.prototype.getLoggedOutEvent = function () {
                    return this._userLoggedOut;
                };
                AuthService.prototype.isAuthenticated = function () {
                    return localStorage.getItem('token') !== null;
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtvQkFDWSxTQUFJLEdBQUcsbUNBQW1DLENBQUM7b0JBQzNDLGlCQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO2dCQXlDckQsQ0FBQztnQkF2Q0csZ0NBQVUsR0FBVixVQUFXLElBQVU7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO3dCQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtxQkFDMUIsRUFBRSxVQUFTLEtBQUssRUFBRSxRQUFRO3dCQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBVTtvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQzFCLEVBQUUsVUFBUyxLQUFLLEVBQUUsUUFBUTt3QkFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN6QixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCw0QkFBTSxHQUFOO29CQUNJLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHVDQUFpQixHQUFqQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxxQ0FBZSxHQUFmO29CQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQztnQkFDbEQsQ0FBQztnQkE3Q0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBOENiLGtCQUFDO1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCxxQ0E0Q0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIuaW50ZXJmYWNlXCI7XG5kZWNsYXJlIHZhciBGaXJlYmFzZTogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfdXJsID0gJ2h0dHBzOi8vdXNlcnMtc2VlZC5maXJlYmFzZWlvLmNvbSc7XG4gICAgcHJpdmF0ZSBfZmlyZWJhc2VSZWYgPSBuZXcgRmlyZWJhc2UodGhpcy5fdXJsKTtcbiAgICBwcml2YXRlIF91c2VyTG9nZ2VkT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBzaWdudXBVc2VyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VSZWYuY3JlYXRlVXNlcih7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yLCB1c2VyRGF0YSkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1N1Y2Nlc3MnLCB1c2VyRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pblVzZXIodXNlcjogVXNlcikge1xuICAgICAgICB0aGlzLl9maXJlYmFzZVJlZi5hdXRoV2l0aFBhc3N3b3JkKHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgYXV0aERhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1N1Y2Nlc3MnLCBhdXRoRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIHRoaXMuX3VzZXJMb2dnZWRPdXQuZW1pdChudWxsKTtcbiAgICB9XG5cbiAgICBnZXRMb2dnZWRPdXRFdmVudCgpOiBFdmVudEVtaXR0ZXI8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTG9nZ2VkT3V0O1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9PSBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
