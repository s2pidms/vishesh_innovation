import {Component, OnInit} from "@angular/core";

import {ToastService} from "@core/services";
import {AppGlobalService, SpinnerService} from "@core/services";
import {SubModulesService} from "@services/settings";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-card-managements-list",
    templateUrl: "./card-managements-list.component.html",
    styleUrls: ["./card-managements-list.component.scss"]
})
export class CardManagementsListComponent implements OnInit {
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    action: string = "create";
    roles: any = [];
    // isChecked: any = [];
    moduleNames: any = [];
    tableData: any = [];
    view: string = "";

    constructor(
        private subModulesService: SubModulesService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private appGlobalService: AppGlobalService
    ) {}
    type: any = "";
    module: any = "";
    subModuleData: any = [];
    existingRoles: any = [];

    ngOnInit(): void {
        this.appGlobalService.getData(["menuItems"]).subscribe(data => {
            this.moduleNames = data["menuItems"];
        });
    }
    reset() {
        this.type = "";
        this.module = "";
        this.subModuleData = [];
    }

    submit(item: any) {
        this.spinner.show();
        this.subModulesService.updateById(item._id, item).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
        });
    }
    getFilterData() {
        this.spinner.show();
        let payload = {
            menuID: this.module,
            type: this.type,
            excel: true
        };
        this.subModulesService.getAllFilteredCardsManagement(payload).subscribe((success: any) => {
            this.subModuleData = success?.rows;
        });
        this.subModulesService.getCountsMenuItemWise(payload).subscribe((success: any) => {});
        this.spinner.hide();
    }
}
