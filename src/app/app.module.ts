import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  entryComponents: [HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const headerElement = createCustomElement(HeaderComponent, {injector: this.injector});
    customElements.define('app-header', headerElement);
  }

}
