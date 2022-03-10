import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoremIpsumComponent } from './components/lorem-ipsum/lorem-ipsum.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoremIpsumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
