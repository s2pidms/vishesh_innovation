import { Component, OnInit } from '@angular/core';
import { MenuService } from '@services/settings';
import { AppGlobalService } from '../core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  isReport: boolean = false;
  constructor(
    private router: Router // private menuService: MenuService, // private appGlobalService: AppGlobalService
  ) {}

  ngOnInit(): void {
    if (
      [
        'sales',
        'purchase',
        'stores',
        'business-leads',
        'maintenance',
        'planning',
        'production',
        'quality',
        'HR',
        'dispatch',
        'supports',
        'accounts',
        'finance',
        'settings',
      ].includes(this.router.url.split('/')[2])
    ) {
      this.isReport = this.router.url.split('/')[3] == 'reports';
    }
  }
}
