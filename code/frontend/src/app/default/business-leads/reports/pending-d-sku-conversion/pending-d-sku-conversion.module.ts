import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PendingDSKUConversionComponent } from './pending-d-sku-conversion.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: PendingDSKUConversionComponent },
];

@NgModule({
  declarations: [PendingDSKUConversionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PendingDSKUConversionModule {}
