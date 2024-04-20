import { Component, OnInit } from '@angular/core';
import { MenuTitleService } from '@core/services';

@Component({
  selector: 'app-master-tabs',
  templateUrl: './master-tabs.component.html',
})
export class MasterTabsComponent implements OnInit {
  constructor(private menuTitleService: MenuTitleService) {}

  ngOnInit(): void {
    this.menuTitleService.set({
      title: 'Support - Masters',
      subTitle: null,
      type: null,
    });
  }

  cards: any = [
    {
      title: 'Raise a Ticket',
      disabled: false,
      url: '/default/supports/master/raise-ticket/raise-ticket-list',
    },
    {
      title: 'Minutes of Meeting',
      disabled: false,
      url: '/default/supports/master/minutes_of_meeting/list',
    },
    {
      title: 'Place Holder',
      disabled: true,
      url: null,
    },
  ];
}
