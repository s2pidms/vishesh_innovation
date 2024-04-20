import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutoIncrementRoutingModule } from './auto-increment-routing.module';
import { AutoIncrementListComponent } from './screens/auto-increment-list/auto-increment-list.component';
import { AutoIncrementFormComponent } from './screens/auto-increment-form/auto-increment-form.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [AutoIncrementListComponent, AutoIncrementFormComponent],
  imports: [CommonModule, AutoIncrementRoutingModule, SharedModule],
})
export class AutoIncrementModule {}
