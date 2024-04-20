import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services';

@Component({
  selector: 'app-accounts',
  template: `<app-custom-menu-header
      [menuData]="menuData"
      *ngIf="!isReport"
    ></app-custom-menu-header
    ><router-outlet></router-outlet>`,
})
export class AccountsComponent implements OnInit {
  isReport: boolean = false;
  constructor(private router: Router, private storageService: StorageService) {}
  menuData: any = {
    homeDisplay: true,
    homeUrl: 'default/accounts/home',
    masterUrl: '/default/accounts/tabs/master-tabs',
    masterTitle: 'Masters',
    masterDisplay: true,
    transactionUrl: '/default/accounts/tabs/txn-tabs',
    transactionTitle: 'Transactions',
    transactionDisplay: true,
    reportUrl: '/default/accounts/tabs/reports-tabs',
    reportTitle: 'Reports',
    reportDisplay: true,
    title: 'Accounts',
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
