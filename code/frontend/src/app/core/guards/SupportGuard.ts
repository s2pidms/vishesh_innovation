import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AppGlobalService, StorageService } from '../services';
import { MENU_IDS } from '@mocks/menuIds.constant';

@Injectable()
export class SupportGuard {
  constructor(private appGlobalService: AppGlobalService) {}
  canActivate() {
    return this.appGlobalService.getPermissionRoleByModule(MENU_IDS.Support);
  }
}
