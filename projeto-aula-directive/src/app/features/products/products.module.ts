import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
