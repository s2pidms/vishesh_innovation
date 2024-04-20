import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AccountsComponent],
  imports: [CommonModule, SharedModule, AccountsRoutingModule],
})
export class AccountsModule {}
