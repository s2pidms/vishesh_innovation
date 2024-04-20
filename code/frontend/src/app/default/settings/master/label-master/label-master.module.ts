import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LabelMasterComponent } from './label-master.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: 'tab_list', component: LabelMasterComponent },
  {
    path: 'dynamic_label_card',
    loadChildren: () =>
      import('./dynamic-label-card/dynamic-label-card.module').then(
        (m) => m.DynamicLabelCardModule
      ),
  },
];

@NgModule({
  declarations: [LabelMasterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class LabelMasterModule {}
