import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from '@services/settings';

import {
  AppGlobalService,
  SpinnerService,
  StorageService,
} from '@core/services';

declare interface RouteInfo {
  title: string;
  path: string;
  image: string;
  color: string;
  isMenuActive: boolean;
  isActive: string;
  activeClass: string;
}

export const adminArray: RouteInfo[] = [
  {
    title: 'Business Leads',
    path: '/default/business-leads/home',
    image: './assets/sideNavIcon/businessLeads.svg',
    color: '#007DFA',
    isMenuActive: false,
    isActive: 'business-leads',
    activeClass: 'businessLeadsA',
  },
  {
    title: 'Sales',
    path: '/default/sales/home',
    image: './assets/sideNavIcon/sales.svg',
    color: '#007DAF',
    isMenuActive: false,
    isActive: 'sales',
    activeClass: 'salesA',
  },
  {
    title: 'Planning',
    path: '/default/planning/home',
    image: './assets/sideNavIcon/planning.svg',

    color: '#007DFA',
    isMenuActive: true,
    isActive: 'planning',
    activeClass: 'planingA',
  },
  {
    title: 'Purchase',
    path: '/default/purchase/home',
    image: './assets/sideNavIcon/purchase.svg',
    color: '#FA0096',
    isMenuActive: false,
    isActive: 'purchase',
    activeClass: 'purchaseA',
  },
  {
    title: 'Stores',
    path: '/default/stores/home',
    image: './assets/sideNavIcon/store.svg',
    color: '#009696',
    isMenuActive: false,
    isActive: 'stores',
    activeClass: 'storesA',
  },
  {
    title: 'Maintenance',
    path: '/default/maintenance/home',
    image: './assets/sideNavIcon/maintenance.svg',
    color: '#FA3264',
    isMenuActive: false,
    isActive: 'maintenance',
    activeClass: 'maintenanceA',
  },
  {
    title: 'Production',
    path: '/default/production/home',
    image: './assets/sideNavIcon/production.svg',
    color: '#007DFA',
    isMenuActive: false,
    isActive: 'production',
    activeClass: 'productionA',
  },
  {
    title: 'Quality',
    path: '/default/quality/home',
    image: './assets/sideNavIcon/quality.svg',
    color: '#00AF4B',
    isMenuActive: false,
    isActive: 'quality',
    activeClass: 'qualityA',
  },
  {
    title: 'Dispatch',
    path: '/default/dispatch/home',
    image: './assets/sideNavIcon/dispatch.svg',
    color: '#FA3264',
    isMenuActive: false,
    isActive: 'dispatch',
    activeClass: 'dispatchA',
  },
  {
    title: 'HR & Admin',
    path: '/default/HR/home',
    image: './assets/sideNavIcon/hr.svg',
    color: '#007DAF',
    isMenuActive: false,
    isActive: 'HR',
    activeClass: 'hrA',
  },
  {
    title: 'Accounts',
    path: '/default/accounts/home',
    image: './assets/sideNavIcon/accounts.svg',
    color: '#32467D',
    isMenuActive: true,
    isActive: 'accounts',
    activeClass: 'accountsA',
  },
  {
    title: 'Finance',
    path: '/default/finance/home',
    image: './assets/sideNavIcon/finance.svg',
    color: '#007DFA',
    isMenuActive: true,
    isActive: 'finance',
    activeClass: 'financeA',
  },
  {
    title: 'Settings',
    path: '/default/settings/tabs/master-tabs',
    image: './assets/sideNavIcon/settings.svg',
    color: '#FA3264',
    isMenuActive: false,
    isActive: 'settings',
    activeClass: 'settingsA',
  },
  {
    title: 'Support',
    path: '/default/supports/tabs/master-tabs',
    image: './assets/sideNavIcon/support.svg',
    color: '#007DAF',
    isMenuActive: false,
    isActive: 'support',
    activeClass: 'supportA',
  },
  {
    title: 'Powered by IDMS',
    path: '#',
    image: './assets/sideNavIcon/logo.svg',
    color: '#FA0096',
    isMenuActive: true,
    isActive: 'string',
    activeClass: 'idmsLogoA',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isActive: boolean = false;
  menuItems: any = [];
  master: RouteInfo[] = [];
  user: any = {};
  constructor(
    public router: Router,
    private spinner: SpinnerService,
    private storageService: StorageService,
    private menuService: MenuService,
    private appGlobalService: AppGlobalService
  ) {}

  ngOnInit(): void {
    this.appGlobalService.getData(['menuItems']).subscribe((data) => {
      this.menuItems = data['menuItems'];
    });
  }

  getAll() {
    this.spinner.show();
    let payload = {
      system: 'main',
      column: 'menuOrder',
      direction: 1,
    };
    this.menuService.getAll(payload).subscribe((success) => {
      this.menuItems = success;
      this.gotoTop();
      this.spinner.hide();
    });
  }

  navigateTo(page: string, isMenuActive: boolean = false) {
    if (isMenuActive) {
      this.router.navigate([page]);
      this.storageService.set('tab', 'HOME');
    }
  }
  getBackgroundColor(color: string) {
    var hex = color.replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var r = parseInt(hex.substring(0, 2), 16),
      g = parseInt(hex.substring(2, 4), 16),
      b = parseInt(hex.substring(4, 6), 16);
    color = 'rgba(' + r + ',' + g + ',' + b + ',0.1)';
    return color;
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
