import { Injectable } from '@angular/core';
import {
  CanLoad,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { StorageService } from '../services';

@Injectable()
export class AuthGuardService implements CanLoad {
  constructor(private storageService: StorageService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    let roles = this.storageService.get('IDMSAUser');

    if (
      ['Business Leads', 'Super Admin', 'Admin', 'MR'].some((x) =>
        roles.some((y: string) => x == y)
      )
    ) {
      return true;
    }
    //  this.router.navigate(['./auth/login'], {
    //   queryParams: { returnUrl: segments[0].path },
    // });
    return false;
  }
}
