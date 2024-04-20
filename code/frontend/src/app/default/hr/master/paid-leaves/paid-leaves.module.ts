import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaidLeavesListComponent } from './screens/paid-leaves-list/paid-leaves-list.component';
import { PaidLeavesFormComponent } from './screens/paid-leaves-form/paid-leaves-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'pl-list', pathMatch: 'full' },
  { path: 'pl-list', component: PaidLeavesListComponent },
  {
    path: 'pl-form',
    component: PaidLeavesFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [PaidLeavesListComponent, PaidLeavesFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PaidLeavesModule {}
