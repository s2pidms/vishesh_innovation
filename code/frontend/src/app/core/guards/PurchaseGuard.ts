import { Injectable } from '@angular/core';

import { AppGlobalService } from '../services';
import { MENU_IDS } from '@mocks/menuIds.constant';

@Injectable()
export class PurchaseGuard {
  // ['Purchase', 'Super Admin', 'Admin', 'MR']
  constructor(private appGlobalService: AppGlobalService) {}
  canActivate() {
    return this.appGlobalService.getPermissionRoleByModule(MENU_IDS.Purchase);
  }
}
