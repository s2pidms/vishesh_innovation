import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: TicketDetailsComponent }];

@NgModule({
  declarations: [TicketDetailsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class TicketDetailsModule {}
