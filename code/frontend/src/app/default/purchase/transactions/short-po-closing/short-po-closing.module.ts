import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShortPoClosingComponent } from './short-po-closing.component';
import { SharedModule } from '@shared/shared.module';
import { CancelPoLineComponent } from './cancel-po-line/cancel-po-line.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{ path: '', component: ShortPoClosingComponent }];

@NgModule({
  declarations: [ShortPoClosingComponent, CancelPoLineComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [NgbActiveModal],
})
export class ShortPoClosingModule {}
