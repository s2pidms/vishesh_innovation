import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DebitListComponent } from './screens/debit-list/debit-list.component';
import { DebitFormComponent } from './screens/debit-form/debit-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DebitListComponent },
  {
    path: 'form',
    component: DebitFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [DebitListComponent, DebitFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DebitNoteModule {}
