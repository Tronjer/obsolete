///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from "./app.component";
import { MessageService } from './messages/message.service';
import { ROUTER_PROVIDERS } from '@angular/router';
import { provide } from '@angular/core';
import {
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';

enableProdMode()

bootstrap(AppComponent, [
    MessageService,
    AuthService,
    ErrorService,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,

    // uses /#/ for clientside routing (needed for deeplinks)
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);