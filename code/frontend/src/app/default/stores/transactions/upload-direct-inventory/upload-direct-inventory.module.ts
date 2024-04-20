import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadDirectInventoryComponent } from './upload-direct-inventory.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: UploadDirectInventoryComponent },
];

@NgModule({
  declarations: [UploadDirectInventoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class UploadDirectInventoryModule {}
