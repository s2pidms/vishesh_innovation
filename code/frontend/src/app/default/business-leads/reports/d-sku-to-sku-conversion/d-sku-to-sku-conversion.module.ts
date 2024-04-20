import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DSKUToSKUConversionComponent } from './d-sku-to-sku-conversion.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: DSKUToSKUConversionComponent }];

@NgModule({
  declarations: [DSKUToSKUConversionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DSKUToSKUConversionModule {}
