import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services';

@Component({
  selector: 'app-sales',
  template: `<app-custom-menu-header
      [menuData]="menuData"
      *ngIf="!isReport"
    ></app-custom-menu-header>
    <div><router-outlet></router-outlet></div>`,
})
export class SalesComponent implements OnInit {
  isReport: boolean = false;
  constructor(private router: Router, private storageService: StorageService) {}
  menuData: any = {
    homeDisplay: true,
    homeUrl: 'default/sales/home',
    masterUrl: '/default/sales/tabs/master-tabs',
    masterTitle: 'Masters',
    masterDisplay: true,
    transactionUrl: '/default/sales/tabs/txn-tabs',
    transactionTitle: 'Transactions',
    transactionDisplay: true,
    reportUrl: '/default/sales/tabs/reports-tabs',
    reportTitle: 'Reports',
    reportDisplay: true,
    title: 'Sales',
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
