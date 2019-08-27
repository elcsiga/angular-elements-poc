import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomElementComponent } from './custom-element/custom-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomElementComponent]
})
export class AppModule { }
