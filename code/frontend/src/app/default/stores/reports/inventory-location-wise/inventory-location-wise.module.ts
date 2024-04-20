import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InventoryLocationWiseComponent } from './inventory-location-wise.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: InventoryLocationWiseComponent },
];

@NgModule({
  declarations: [InventoryLocationWiseComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class InventoryLocationWiseModule {}
