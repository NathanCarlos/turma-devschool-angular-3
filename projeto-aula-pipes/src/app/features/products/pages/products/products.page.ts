import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPageComponent implements OnInit {

  availableDateProducts: Date = new Date();

  phone = '11963723232';
  phone2 = '11965628232';
  
  constructor() { }

  ngOnInit(): void {
  }

}
