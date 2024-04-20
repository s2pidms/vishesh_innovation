import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: ReportsComponent },
  {
    path: 'ticket_details',
    loadChildren: () =>
      import('./ticket-details/ticket-details.module').then(
        (m) => m.TicketDetailsModule
      ),
  },
];

import { ReportsComponent } from './reports.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ReportsModule {}
