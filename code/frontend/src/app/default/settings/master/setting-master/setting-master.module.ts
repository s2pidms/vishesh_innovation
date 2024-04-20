import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingMasterComponent } from './setting-master.component';

const routes: Routes = [
  { path: 'tab_list', component: SettingMasterComponent },
];

@NgModule({
  declarations: [SettingMasterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SettingMasterModule {}
