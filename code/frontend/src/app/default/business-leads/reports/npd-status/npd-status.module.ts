import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NpdStatusComponent } from './npd-status.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: NpdStatusComponent }];

@NgModule({
  declarations: [NpdStatusComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class NpdStatusModule {}
