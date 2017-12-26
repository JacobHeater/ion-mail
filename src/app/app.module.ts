import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';
import {
  HttpModule,
  JsonpModule
} from '@angular/http';

import {
  App
} from './app.component';
import {
  Inbox
} from '../pages/inbox/inbox';
import { 
  Message 
} from '../pages/message/message';
import {
  routing
} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    App,
    Inbox,
    Message
  ],
  bootstrap: [App]
})
export class AppModule {

};
