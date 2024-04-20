import { Injectable } from '@angular/core';

import { AppGlobalService, StorageService } from '../services';
import { MENU_IDS } from '@mocks/menuIds.constant';

@Injectable()
export class HRAdminGuard {
  // ['HR', 'HR & Admin', 'Super Admin', 'Admin']
  private roles: any[] = [];

  constructor(
    private storageService: StorageService,
    private appGlobalService: AppGlobalService
  ) {}

  canActivate() {
    return this.appGlobalService.getPermissionRoleByModule(
      MENU_IDS['HR & Admin']
    );
  }
}
