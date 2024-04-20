import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services';

@Component({
  selector: 'app-business-leads',
  template: `<app-custom-menu-header
      [menuData]="menuData"
      *ngIf="!isReport"
    ></app-custom-menu-header
    ><router-outlet></router-outlet>`,
})
export class BusinessLeadsComponent implements OnInit {
  isReport: boolean = false;
  menuData: any = {
    homeDisplay: true,
    homeUrl: 'default/business-leads/home',
    masterUrl: '/default/business-leads/tabs/master-tabs',
    masterTitle: 'Masters',
    masterDisplay: true,
    transactionUrl: '/default/business-leads/tabs/txn-tabs',
    transactionTitle: 'Transactions',
    transactionDisplay: true,
    reportUrl: '/default/business-leads/tabs/reports-tabs',
    reportTitle: 'Reports',
    reportDisplay: true,
    title: 'BusinessLeads',
    type: null,
    subTitle: '',
  };

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.isReport = this.router.url.split('/')[3] == 'reports';
    let menuTitle = this.storageService.get('menuTitle');
    if (menuTitle && this.menuData.title != menuTitle.title) {
      this.menuData.title = menuTitle.title;
    }
  }
}
