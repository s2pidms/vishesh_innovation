import {Component, OnInit} from "@angular/core";

import {ToastService} from "@core/services";
import {AppGlobalService, SpinnerService} from "@core/services";
import {SubModulesService} from "@services/settings";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddSubModuleRollComponent} from "../add-sub-module-roll/add-sub-module-roll.component";

@Component({
    selector: "app-sub-module-form",
    templateUrl: "./sub-module-form.component.html",
    styleUrls: ["./sub-module-form.component.scss"]
})
export class SubModuleFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    roles: any = [];
    // isChecked: any = [];
    moduleNames: any = [];
    tableData: any = [];
    roleNames: any = [];
    view: string = "";

    constructor(
        private subModulesService: SubModulesService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private appGlobalService: AppGlobalService,
        private modalService: NgbModal
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

    submit() {
        this.spinner.show();
        this.subModuleData = this.subModuleData;
        this.subModulesService.update(this.subModuleData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.reset();
        });
    }
    deleteModule(id: string) {
        this.spinner.show();
        this.subModulesService.delete(id).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
        });
    }

    getFilterData() {
        this.spinner.show();
        let payload = {
            menuID: this.module,
            tabType: this.type,
            display: null,
            subItemsFilter: "no"
        };
        this.subModulesService.getAll(payload).subscribe(success => {
            this.subModuleData = success?.rows;
            this.roleNames = success?.roles.map((x: any) => {
                x.isChecked = true;
                return x;
            });
        });
        this.spinner.hide();
    }

    openRollsModal(item: any) {
        const modalRef = this.modalService.open(AddSubModuleRollComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            size: "lg"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.roleNames = this.roleNames;
        modalRef.componentInstance.roles = item.roles;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.subModuleData.map((x: any) => x._id).indexOf(item._id);
                    console.log("success", success);

                    this.subModuleData[index].roles = success;
                }
            },
            (reason: any) => {}
        );
    }
}
