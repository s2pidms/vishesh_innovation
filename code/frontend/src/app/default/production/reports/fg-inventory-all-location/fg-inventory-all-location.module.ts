import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FGInventoryAllLocationComponent } from './fg-inventory-all-location.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: FGInventoryAllLocationComponent },
];

@NgModule({
  declarations: [FGInventoryAllLocationComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class FGInventoryAllLocationModule {}
