import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MultipleFginFormComponent } from './screens/multiple-fgin-form/multiple-fgin-form.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'form',
    component: MultipleFginFormComponent,
  },
];

@NgModule({
  declarations: [MultipleFginFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MultipleFGINModule {}
