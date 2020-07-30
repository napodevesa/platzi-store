import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';

import { HighlightDirective } from './shared-directives/highlight/highlight.directive';

import { ExponentialPipe } from './shared-pipes/exponential/exponential.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
  ],
  imports: [RouterModule, CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
