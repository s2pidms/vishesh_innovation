import { Injectable } from '@angular/core';

import { AppGlobalService, StorageService } from '../services';
import { MENU_IDS } from '@mocks/menuIds.constant';

@Injectable()
export class MaintenanceGuard {
  // ['Maintenance', 'Super Admin', 'Admin', 'MR']
  private roles: any[] = [];

  constructor(private appGlobalService: AppGlobalService) {}

  canActivate() {
    return this.appGlobalService.getPermissionRoleByModule(
      MENU_IDS.Maintenance
    );
  }
}
