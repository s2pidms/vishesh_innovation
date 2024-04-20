import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MinutesOfMeetingFormComponent } from './screens/minutes-of-meeting-form/minutes-of-meeting-form.component';
import { MinutesOfMeetingListComponent } from './screens/minutes-of-meeting-list/minutes-of-meeting-list.component';
import { SharedModule } from '@shared/shared.module';
import { MinOfMeetingAttendeesComponent } from './screens/min-of-meeting-attendees/min-of-meeting-attendees.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MinutesOfMeetingListComponent },
  { path: 'form', component: MinutesOfMeetingFormComponent },
];

@NgModule({
  declarations: [
    MinutesOfMeetingFormComponent,
    MinutesOfMeetingListComponent,
    MinOfMeetingAttendeesComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MinutesOfMeetingModule {}
