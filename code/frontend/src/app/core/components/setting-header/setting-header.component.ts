import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { LIST_DEFAULT_PERMISSION_ACTIONS } from '@mocks/constant';

@Component({
  selector: 'app-setting-header',
  templateUrl: './setting-header.component.html',
  styleUrls: ['./setting-header.component.scss'],
})
export class SettingHeaderComponent implements OnInit {
  @Input() data: any = {};
  @Output() dataChange = new EventEmitter<any>();
  searchText: string = '';
  search$ = new Subject<string>();
  Users: any = [];
  rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.search$
      .pipe(debounceTime(600), distinctUntilChanged())
      .subscribe((value) => {
        this.commonChange('SEARCH', value);
      });
  }

  commonChange(key: string, value: any) {
    if (key == 'PAGE') {
      if (this.data.type == 'list') {
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: { page: value },
          queryParamsHandling: 'merge',
        });
      }

      this.dataChange.emit({ key: key, value: value });
    } else if (key == 'SEARCH') {
      this.dataChange.emit({ key: key, value: value });
    } else if (key == 'EXCEL') {
      this.dataChange.emit({ key: key, value: value });
    } else if (key == 'PDF') {
      this.dataChange.emit({ key: key, value: value });
    }
  }
  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
