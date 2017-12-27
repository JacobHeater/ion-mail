import { ActivatedRoute } from '@angular/router';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  templateUrl: './bin/pages/message/message.html',
  selector: 'ion-message'
})
export class Message implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.sub = null;
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = Number(params.id);
    });
  }
  
  id: number
  sub: any;
};
