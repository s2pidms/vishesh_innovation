import { Directive, ElementRef, Input } from '@angular/core';
import { AppGlobalService } from '@core/services';
import { StorageService } from '@core/services';
import { MenuService } from '@services/settings';

@Directive({
  selector: '[appAccessControl]',
})
export class AccessControlDirective {
  @Input() accessType: any = '';
  menuTitleData: any = {};
  cardData: any = [];
  menuItemId: any = '';
  tabType: any = '';
  constructor(
    private menuService: MenuService,
    private storageService: StorageService,
    private elementRef: ElementRef,
    private appGlobalService: AppGlobalService
  ) {}
  ngOnInit(): void {
    this.menuItemId = this.appGlobalService.menuItemId;
    this.menuTitleData = this.storageService.get('menuTitle');
    this.tabType = this.storageService.get('tab');
    if (this.tabType == 'MASTER') {
      this.tabType = 'masters';
    } else if (this.tabType == 'TRANSACTION') {
      this.tabType = 'transactions';
    } else if (this.tabType == 'REPORT') {
      this.tabType = 'reports';
    }
    this.checkAccess();
  }

  checkAccess() {
    const accessControls = this.appGlobalService.rolesPermission;
    if (accessControls.length > 0) {
      const moduleCards: any = accessControls.find(
        (access: any) => access?.menuItemId === this.menuItemId
      );
      if (
        moduleCards &&
        moduleCards[this.tabType].length > 0 &&
        this.menuTitleData?.subModuleId
      ) {
        this.cardData = moduleCards[this.tabType].find(
          (x: any) => x?.subModuleId == this.menuTitleData?.subModuleId
        );  
        this.elementRef.nativeElement.style.display =
          !!this.cardData && this.cardData[this.accessType] ? 'block' : 'none';
      }
    }
  }
}
