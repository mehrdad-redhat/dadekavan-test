import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    AccordionModule
  ],
  exports: [
    ButtonModule,
    PanelModule,
    AccordionModule
  ]
})
export class PrimeNGModule { }
