import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from './../../../utils/validator';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit( ): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe( prod => {
        this.form.patchValue(prod);
      });
    });
  }

  private buildForm(): any {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event): any {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product).subscribe((updatedProd) => {
        console.log(updatedProd);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField(): any {
    return this.form.get('price');
  }
}
