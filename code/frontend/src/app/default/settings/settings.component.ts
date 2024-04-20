import { Component, OnInit } from '@angular/core';
import { StorageService } from '@core/services';
@Component({
  selector: 'app-settings',
  template: `<app-custom-menu-header
      [menuData]="menuData"
    ></app-custom-menu-header
    ><router-outlet></router-outlet>`,
})
export class SettingsComponent implements OnInit {
  menuData: any = {
    homeDisplay: true,
    homeUrl: 'default/settings/home',
    masterUrl: '/default/settings/tabs/master-tabs',
    masterTitle: 'Masters',
    masterDisplay: true,
    transactionUrl: '/default/settings/tabs/txn-tabs',
    transactionTitle: 'Transactions',
    transactionDisplay: true,
    reportUrl: '/default/settings/tabs/reports-tabs',
    reportTitle: 'Reports',
    reportDisplay: false,
    title: 'Application Users List',
    type: null,
    subTitle: '',
  };
  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    let menuTitle = this.storageService.get('menuTitle');
    if (menuTitle && this.menuData.title != menuTitle.title) {
      this.menuData.title = menuTitle.title;
    }
  }
}
