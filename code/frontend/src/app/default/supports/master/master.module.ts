import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'raise-ticket',
        loadChildren: () =>
          import('./raise-ticket/raise-ticket.module').then(
            (m) => m.RaiseTicketModule
          ),
      },
      {
        path: 'minutes_of_meeting',
        loadChildren: () =>
          import('./minutes-of-meeting/minutes-of-meeting.module').then(
            (m) => m.MinutesOfMeetingModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [MasterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MasterModule {}
