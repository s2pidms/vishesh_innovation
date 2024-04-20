import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InkListComponent } from './screens/ink-list/ink-list.component';
import { InkFormComponent } from './screens/ink-form/ink-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { InkLabModalComponent } from './screens/ink-lab-modal/ink-lab-modal.component';
import { InkHsnModalComponent } from './screens/ink-hsn-modal/ink-hsn-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: InkListComponent },
  {
    path: 'form',
    component: InkFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    InkListComponent,
    InkFormComponent,
    InkLabModalComponent,
    InkHsnModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class InkMasterModule {}
