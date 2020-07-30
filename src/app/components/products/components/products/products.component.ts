import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../product.model';

import { ProductsService } from './../../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number): any {
    console.log('product');
    console.log(id);
  }

  fetchProducts(): any {
    this.productsService.getAllProducts()
    .subscribe(prod => {
      this.products = prod;
    });
  }
}
