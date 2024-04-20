import {Component, OnChanges, OnInit} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import {UserService} from "@services/settings";
import {SpinnerService, StorageService} from "@core/services";

@Component({
    selector: "app-nav-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class NavHeaderComponent implements OnInit {
    public pushRightClass: any;
    product: any = [];
    noOfCartProduct: any = 0;
    logo: string = "";
    landingPageHeaderUrl: string = "";
    clientId: any;
    client: any;
    user: any;
    constructor(
        public router: Router,
        private storageService: StorageService,
        private spinner: SpinnerService,
        private userService: UserService
    ) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit(): void {
        let companyUrlObj = this.storageService.get("companyUrlObj");
        if (companyUrlObj && Object.keys(companyUrlObj).length) {
            this.logo = companyUrlObj.logoUrl;
            this.landingPageHeaderUrl = companyUrlObj.landingPageHeaderUrl;
        } else {
            this.getCompanyURLs();
        }
        this.user = this.storageService.get("IDMSAUser");
        this.pushRightClass = "push-right";
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    isToggled(): boolean {
        const dom: any = document.querySelector("body");
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar(): void {
        const dom: any = document.querySelector("body");
        dom.classList.toggle(this.pushRightClass);
    }
    navigateTo(page: string) {
        this.router.navigateByUrl(page);
    }

    getCompanyURLs() {
        this.spinner.show();
        this.userService.getCompanyURLs({}).subscribe(success => {
            this.logo = success.logoUrl;
            this.landingPageHeaderUrl = success.landingPageHeaderUrl;
            this.spinner.hide();
        });
    }

    updateUser() {
        this.spinner.show();
        let payload = {
            isLoggedIn: "No"
        };
        this.storageService.remove("companyUrlObj");
        this.userService.update(this.user._id, payload).subscribe(success => {
            this.spinner.hide();
        });
    }
}
