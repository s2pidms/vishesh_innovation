import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LogedInComponent } from './logedIn.component';

const routes: Routes = [{ path: '', component: LogedInComponent }];

@NgModule({
  declarations: [LogedInComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class UserReportModule {}
