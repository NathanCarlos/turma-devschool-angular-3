import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;

  constructor(
    private activedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.product = this.productService.getById(params.id);
    });
  }

}
