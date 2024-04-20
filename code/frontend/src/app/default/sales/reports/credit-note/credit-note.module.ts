import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreditNoteComponent } from './credit-note.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: CreditNoteComponent }];

@NgModule({
  declarations: [CreditNoteComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CreditNoteModule {}
