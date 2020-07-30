import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Product } from './../../../../product.model';

import { CartService } from '../../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addCart(): any {
    console.log('added to the cart');
    // this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
