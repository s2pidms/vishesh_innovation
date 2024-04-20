import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services';

@Component({
  selector: 'app-finance',
  template: `<app-custom-menu-header
      [menuData]="menuData"
      *ngIf="!isReport"
    ></app-custom-menu-header
    ><router-outlet></router-outlet>`,
})
export class FinanceComponent implements OnInit {
  isReport: boolean = false;
  constructor(private router: Router, private storageService: StorageService) {}
  menuData: any = {
    homeDisplay: true,
    homeUrl: 'default/finance/home',
    masterUrl: '/default/finance/tabs/master-tabs',
    masterTitle: 'Masters',
    masterDisplay: true,
    transactionUrl: '/default/finance/tabs/txn-tabs',
    transactionTitle: 'Transactions',
    transactionDisplay: true,
    reportUrl: '/default/finance/tabs/reports-tabs',
    reportTitle: 'Reports',
    reportDisplay: true,
    title: 'Finance',
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
