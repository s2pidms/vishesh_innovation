import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreditNoteDetailsComponent } from './credit-note-details.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: CreditNoteDetailsComponent }];

@NgModule({
  declarations: [CreditNoteDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CreditNoteDetailsModule {}
