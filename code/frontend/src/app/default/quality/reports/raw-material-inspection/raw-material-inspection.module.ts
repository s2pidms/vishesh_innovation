import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RawMaterialInspectionComponent } from './raw-material-inspection.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: RawMaterialInspectionComponent },
];

@NgModule({
  declarations: [RawMaterialInspectionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class RawMaterialInspectionModule {}
