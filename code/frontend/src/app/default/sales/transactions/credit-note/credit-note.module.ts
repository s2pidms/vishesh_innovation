import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreditListComponent } from './screens/credit-list/credit-list.component';
import { CreditFormComponent } from './screens/credit-form/credit-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CreditListComponent },
  {
    path: 'form',
    component: CreditFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [CreditListComponent, CreditFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CreditNoteModule {}
