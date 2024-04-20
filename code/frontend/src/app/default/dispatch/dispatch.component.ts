import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services';

@Component({
  selector: 'app-dispatch',
  template: `<app-custom-menu-header
      [menuData]="menuData"
      *ngIf="!isReport"
    ></app-custom-menu-header
    ><router-outlet></router-outlet>`,
})
export class DispatchComponent implements OnInit {
  isReport: boolean = false;
  constructor(private storageService: StorageService, private router: Router) {}
  menuData: any = {
    homeDisplay: true,
    homeUrl: 'default/dispatch/home',
    masterUrl: '/default/dispatch/tabs/master-tabs',
    masterTitle: 'Masters',
    masterDisplay: true,
    transactionUrl: '/default/dispatch/tabs/txn-tabs',
    transactionTitle: 'Transactions',
    transactionDisplay: true,
    reportUrl: '/default/dispatch/tabs/reports-tabs',
    reportTitle: 'Reports',
    reportDisplay: true,
    title: 'Dispatch',
    type: null,
    subTitle: '',
  };
  ngOnInit(): void {
    this.isReport = this.router.url.split('/')[3] == 'reports';
    let menuTitle = this.storageService.get('menuTitle');
    if (menuTitle && this.menuData.title != menuTitle.title) {
      this.menuData.title = menuTitle.title;
    }
  }
}
