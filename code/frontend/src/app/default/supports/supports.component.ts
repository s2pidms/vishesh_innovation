import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supports',
  template: `<app-custom-menu-header
      [menuData]="menuData"
      *ngIf="!isReport"
    ></app-custom-menu-header
    ><router-outlet></router-outlet>`,
})
export class SupportsComponent implements OnInit {
  isReport: boolean = false;
  menuData: any = {
    homeDisplay: true,
    homeUrl: 'default/supports/home',
    masterUrl: '/default/supports/tabs/master-tabs',
    masterTitle: 'Masters',
    masterDisplay: true,
    transactionUrl: '/default/supports/tabs/txn-tabs',
    transactionTitle: 'Transactions',
    transactionDisplay: false,
    reportUrl: '/default/supports/tabs/reports-tabs',
    reportTitle: 'Reports',
    reportDisplay: true,
    title: 'Application Users List',
    type: null,
    subTitle: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isReport = this.router.url.split('/')[3] == 'reports';
  }
}
