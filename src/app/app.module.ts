import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxUiCreditCardModule } from 'projects/ngx-ui-credit-card/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUiCreditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
