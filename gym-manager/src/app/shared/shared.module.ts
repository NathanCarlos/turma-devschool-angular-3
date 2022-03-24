import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlueDirective } from './directives/blue.directive';
import { PhonePipe } from './pipes/phone.pipe';

const components = [
  HeaderComponent,
  FooterComponent
];

const directives = [
  BlueDirective
];


@NgModule({
  declarations: [
    ...components,
    ...directives,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
    ...directives,
    PhonePipe
  ]
})
export class SharedModule { }
