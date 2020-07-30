import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';

import { Product } from './../../../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColums: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): any {
    this.productsService.getAllProducts().subscribe((prod) => {
      this.products = prod;
    });
  }

  deleteProduct(id: string): any {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      console.log(rta);
    });
    const index = this.products.findIndex(prod => prod.id === id);
    this.products.splice(index, 1);
    this.products = [...this.products];
  }
}
