import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplementaryPOFormComponent } from './screens/supplementary-po-form/supplementary-po-form.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: SupplementaryPOFormComponent },
];

@NgModule({
  declarations: [SupplementaryPOFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GenerateSupplementaryPOModule {}
