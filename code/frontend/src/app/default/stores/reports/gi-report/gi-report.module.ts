import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GiReportComponent } from './gi-report.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: GiReportComponent }];

@NgModule({
  declarations: [GiReportComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class GiReportModule {}
