import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  title = 'Lista de Produtos';

  products: Array<Product> = this.productService.getAll();

  filteredProducts: Array<Product> = this.products;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProductsByDescription(event: any) {
      const value = event.target.value;

      this.filteredProducts = this.productService.getProductByDescription(value);
      if(value.length === 0) {
          this.filteredProducts = this.products;
      }
  }

  transformPrice(preco: number) {
      return `R$${preco},00`;
  }

}
