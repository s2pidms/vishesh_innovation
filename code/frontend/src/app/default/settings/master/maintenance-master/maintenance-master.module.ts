import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceMasterComponent } from './maintenance-master.component';

const routes: Routes = [
  { path: 'tab_list', component: MaintenanceMasterComponent },
];

@NgModule({
  declarations: [MaintenanceMasterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MaintenanceMasterModule {}
