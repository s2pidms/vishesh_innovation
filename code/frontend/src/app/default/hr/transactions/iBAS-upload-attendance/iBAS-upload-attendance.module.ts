import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IBASUploadAttendanceComponent } from './iBAS-upload-attendance.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: IBASUploadAttendanceComponent }];

@NgModule({
  declarations: [IBASUploadAttendanceComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class IBASUploadAttendanceModule {}
