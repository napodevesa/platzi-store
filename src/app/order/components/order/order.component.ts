import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';

import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  total = 0;

  constructor( private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }
  ngOnInit(): void {
    this.sumPrices();
  }

  sumPrices(): any {
    let prods;
    this.cartService.cart$.subscribe(products => prods = products);
    prods.forEach(prod => this.total += prod.price);
    console.log(this.total);
  }
}
