import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '90%'
      })),
      state('closed', style({
        width: '0%',
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ])
    ])
  ]
})
export class DetailsComponent implements OnInit {
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
