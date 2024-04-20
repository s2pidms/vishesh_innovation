import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RaiseTicketListComponent } from './raise-ticket-list/raise-ticket-list.component';
import { RaiseTicketFormComponent } from './raise-ticket-form/raise-ticket-form.component';
import { SharedModule } from '@shared/shared.module';
import { ViewResolutionCommentsComponent } from './components/view-resolution-comments/view-resolution-comments.component';
import { TicketDescriptionModalComponent } from './components/ticket-description-modal/ticket-description-modal.component';
import { TicketResolutionModalComponent } from './components/ticket-resolution-modal/ticket-resolution-modal.component';
import { ViewTicketHistoryComponent } from './components/view-ticket-history/view-ticket-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'raise-ticket-list', pathMatch: 'full' },
  { path: 'raise-ticket-list', component: RaiseTicketListComponent },
  { path: 'raise-ticket-form', component: RaiseTicketFormComponent },
];

@NgModule({
  declarations: [
    RaiseTicketListComponent,
    RaiseTicketFormComponent,
    ViewResolutionCommentsComponent,
    TicketDescriptionModalComponent,
    TicketResolutionModalComponent,
    ViewTicketHistoryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class RaiseTicketModule {}
