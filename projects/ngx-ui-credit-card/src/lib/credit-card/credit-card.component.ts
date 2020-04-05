import { Component, OnInit } from '@angular/core';
import { animation, trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'cc-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  animations: [
    trigger('rotateCard', [
      transition(':leave', [
        animate('0.5s ease', style({transform: 'rotate3d(0, 1, 0, 90deg)'}))
      ]),
      transition(':enter', [
        style({transform: 'rotate3d(0, 1, 0, 90deg)'}),
        animate('0.5s 0.5s ease', style({transform: 'rotate3d(0, 1, 0, 0deg)'}))
      ])
    ]),
  ]
})
export class CreditCardComponent implements OnInit {
  showFront = true;
  showBackward = false;
  constructor() { }

  ngOnInit() {
  }

  toggleCard() {
    if (this.showFront) {
      this.showFront = false;
      setTimeout(() => { this.showBackward = true; }, 100);
    } else if (this.showBackward) {
      this.showBackward = false;
      setTimeout(() => { this.showFront = true; }, 500);
    }
  }

}
