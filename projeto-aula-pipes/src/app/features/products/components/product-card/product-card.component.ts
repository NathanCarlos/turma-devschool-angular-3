import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product?: Product;

  percentDiscount = 0.10;

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addToCart() {
    alert(`O produto ${this.product?.description} foi adicionado ao carrinho!`);
  }

  getPriceWithDiscount(price: number): number {
    return price * (1 - this.percentDiscount);
  }

  removeProduct() {
    if(this.product) this.productService.removeById(this.product.id);
  }

  productDetails(id: number) {
    this.router.navigateByUrl(`/product-details/${id}`);
  }

}
