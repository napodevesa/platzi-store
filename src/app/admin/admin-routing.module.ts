import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent} from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component: EditProductComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
