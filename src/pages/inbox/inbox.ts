import { Component } from '@angular/core';

@Component({
  templateUrl: './pages/inbox/inbox.html',
  selector: 'ion-inbox'
})
export class Inbox {
  getMailItems() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}