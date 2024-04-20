import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OutstandingPoComponent } from './outstanding-po.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: OutstandingPoComponent }];

@NgModule({
  declarations: [OutstandingPoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class OutstandingPoModule {}
