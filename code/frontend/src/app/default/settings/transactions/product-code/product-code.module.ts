import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCodeRoutingModule } from './product-code-routing.module';
import { ProductCodeListComponent } from './screens/product-code-list/product-code-list.component';
import { ProductCodeFormComponent } from './screens/product-code-form/product-code-form.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ProductCodeListComponent, ProductCodeFormComponent],
  imports: [CommonModule, ProductCodeRoutingModule, SharedModule],
})
export class ProductCodeModule {}
