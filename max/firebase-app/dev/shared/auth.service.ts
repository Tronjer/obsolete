import {Injectable, EventEmitter} from "angular2/core";
import {User} from "./user.interface";
declare var Firebase: any;

@Injectable()

export class AuthService {
    private _url = 'https://users-seed.firebaseio.com';
    private _firebaseRef = new Firebase(this._url);
    private _userLoggedOut = new EventEmitter<any>();

    signupUser(user: User) {
        this._firebaseRef.createUser({
            email: user.email,
            password: user.password
        }, function(error, userData) {
            if (error) {
                console.debug(error);
            } else {
                console.debug('Success', userData);
            }
        });
    }

    signinUser(user: User) {
        this._firebaseRef.authWithPassword({
            email: user.email,
            password: user.password
        }, function(error, authData) {
            if (error) {
                console.debug(error);
            } else {
                localStorage.setItem('token', authData.token);
                console.debug('Success', authData);
            }
        });
    }

    logout() {
        localStorage.removeItem('token');
        this._userLoggedOut.emit(null);
    }

    getLoggedOutEvent(): EventEmitter<any> {
        return this._userLoggedOut;
    }

    isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null;
    }
}