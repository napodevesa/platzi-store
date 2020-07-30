import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../../core/services/products/products.service';
import { Product } from '../../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): any {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // this.product = this.productsService.getProduct(id);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): any {
    this.productsService.getProduct(id).subscribe((prod) => {
      this.product = prod;
    });
  }
}
