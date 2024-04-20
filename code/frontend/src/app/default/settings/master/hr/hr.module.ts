import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HrComponent } from './hr.component';

const routes: Routes = [
  { path: 'tab_list', component: HrComponent },
  {
    path: 'professional_tax',
    loadChildren: () =>
      import('./professional-tax/professional-tax.module').then(
        (m) => m.ProfessionalTaxModule
      ),
  },
];

@NgModule({
  declarations: [HrComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HrModule {}
