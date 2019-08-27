import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { CustomElementComponent } from './custom-element/custom-element.component';

interface ClickedEvent {
  detail: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(injector: Injector ) {
    // Convert `PopupComponent` to a custom element.
    const CustomElement = createCustomElement(CustomElementComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('custom-element', CustomElement);
  }

  ngOnInit() {
    const customElement: NgElement & WithProperties<CustomElementComponent> = document.createElement('custom-element') as any;
    customElement.text = 'Same Angular component inside an SVG canvas';
    customElement.addEventListener('clicked', event => this.clicked((event as any as ClickedEvent).detail) );

    const htmlContainer = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    htmlContainer.setAttribute('x', '20');
    htmlContainer.setAttribute('y', '20');
    htmlContainer.setAttribute('width', '100');
    htmlContainer.setAttribute('height', '100');
    htmlContainer.style.background = 'yellow';

    htmlContainer.appendChild(customElement);
    document.getElementById('svg-container').appendChild(htmlContainer);
  }

  clicked(msg: string) {
    alert ('CLICK: ' + msg);
  }
}
