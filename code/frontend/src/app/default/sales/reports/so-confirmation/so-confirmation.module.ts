import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SoConfirmationComponent } from './so-confirmation.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: SoConfirmationComponent }];

@NgModule({
  declarations: [SoConfirmationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SoConfirmationModule {}
