import {Injectable} from "@angular/core";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {StorageService} from "../services";

@Injectable()
export class AuthGuard {
    constructor(private router: Router, private storageService: StorageService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let roles = this.storageService.get("IDMSAUser").roleName;
        if (["Sales", "Super Admin", "Admin", "MR"].some(x => roles.some((y: string) => x == y))) {
            return true;
        }
        //  this.router.navigate(['./auth/login'], {
        //   queryParams: { returnUrl: segments[0].path },
        // });
        return false;

        // if (typeof window !== 'undefined') {
        //   if (localStorage.getItem('IDMSAUser')) {
        //     // logged in so return true
        //     return true;
        //   }
        // }
        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['./auth/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    }
}
