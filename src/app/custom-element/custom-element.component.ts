import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomElementComponent implements OnInit {

  @Input() text: string;
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
