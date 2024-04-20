import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PpicStockIssueComponent } from './ppic-stock-issue.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: PpicStockIssueComponent }];

@NgModule({
  declarations: [PpicStockIssueComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PpicStockIssueModule {}
