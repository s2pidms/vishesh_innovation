import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: ActivityComponent }];

@NgModule({
  declarations: [ActivityComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class ActivityModule {}
