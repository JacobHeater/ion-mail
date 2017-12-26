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
    Inbox
  ],
  bootstrap: [App]
})
export class AppModule {

}
