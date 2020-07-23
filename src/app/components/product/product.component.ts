import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

import { Product } from './../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements DoCheck, OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  //   ngOnChanges(changes: SimpleChanges) {
  //       console.log('2. ngOnChanges');
  //       console.log(changes);
  //   }

  ngOnInit(): any {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): any {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): any {
    console.log('5. ngOnDestroy');
  }

  addCart(): any {
    console.log('add to cart');
    this.productClicked.emit(this.product.id);
  }
}
