import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DebitNoteComponent } from './debit-note.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: DebitNoteComponent }];

@NgModule({
  declarations: [DebitNoteComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DebitNoteModule {}
