import { Component, OnInit } from '@angular/core';
import { MenuTitleService, AppGlobalService } from '@core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title: any = '';

  constructor(
    private appGlobalService: AppGlobalService,
    private menuTitleService: MenuTitleService
  ) {}

  ngOnInit(): void {
    this.title = this.appGlobalService.moduleName;
    this.menuTitleService.set({
      title: `${this.title} Overview`,
      subTitle: null,
      type: null,
    });
  }
}
