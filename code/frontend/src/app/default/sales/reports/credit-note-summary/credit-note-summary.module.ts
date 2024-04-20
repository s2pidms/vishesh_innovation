import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreditNoteSummaryComponent } from './credit-note-summary.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: CreditNoteSummaryComponent }];

@NgModule({
  declarations: [CreditNoteSummaryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CreditNoteSummaryModule {}
