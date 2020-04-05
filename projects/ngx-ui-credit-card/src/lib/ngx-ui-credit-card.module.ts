import { NgModule } from '@angular/core';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    CreditCardComponent
  ]
})
export class NgxUiCreditCardModule { }
