import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {mergeMap, of} from "rxjs";
import {MaintenanceWarrantyService} from "@services/maintenance";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {IWarrantyMasterData} from "@mocks/models/maintenance/masters";
import {DetailsOfSupplierListComponent} from "@shared/modals";

@Component({
    selector: "app-maintenance-warranty-form",
    templateUrl: "./maintenance-warranty-form.component.html"
})
export class MaintenanceWarrantyFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IWarrantyMasterData = {
        autoIncrementNo: "",
        warrantyTypeOptions: [],
        equipmentOptions: [],
        suppliersOptions: []
    };
    selectedSupplierDetails = {};

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private maintenanceWarrantyService: MaintenanceWarrantyService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        warrantyCode: new UntypedFormControl(null),
        warrantyName: new UntypedFormControl(null),
        equipment: new UntypedFormControl(null),
        supplier: new UntypedFormControl(null),
        warrantyType: new UntypedFormControl(null),
        warrantyStartDate: new UntypedFormControl(null),
        warrantyEndDate: new UntypedFormControl(null),
        warrantyDescription: new UntypedFormControl(null),
        contactPerson: new UntypedFormControl(null),
        AMCStartDate: new UntypedFormControl(null),
        AMCEndDate: new UntypedFormControl(null),
        warrantyStatus: new UntypedFormControl("Active")
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        this.form.enable();
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.maintenanceWarrantyService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.maintenanceWarrantyService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.maintenanceWarrantyService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["warrantyCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["warrantyStatus"].setValue("Active");
            this.form.controls["warrantyStartDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["warrantyEndDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["AMCStartDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["AMCEndDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.maintenanceWarrantyService.getById(params["id"]);
                        } else {
                            return of({});
                        }
                    })
                )
                .subscribe((success: any) => {
                    this.spinner.hide();
                    if (Object.keys(success).length == 0) {
                        return;
                    }

                    if (success.warrantyStartDate) {
                        success.warrantyStartDate = this.utilityService.getFormatDate(
                            success.warrantyStartDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.warrantyEndDate) {
                        success.warrantyEndDate = this.utilityService.getFormatDate(
                            success.warrantyEndDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.AMCStartDate) {
                        success.AMCStartDate = this.utilityService.getFormatDate(success.AMCStartDate, "YYYY-MM-DD");
                    }
                    if (success.AMCEndDate) {
                        success.AMCEndDate = this.utilityService.getFormatDate(success.AMCEndDate, "YYYY-MM-DD");
                    }

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    openSupplierDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfSupplierListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action == "edit" ? "create" : this.action;
        modalRef.componentInstance.selectedSupplierDetails = this.selectedSupplierDetails;
        modalRef.componentInstance.supplierOptions = this.masterData.suppliersOptions;
        modalRef.componentInstance.supplier = this.form.controls["supplier"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedSupplierDetails = success?.selectedSupplierDetails;
                    this.form.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                }
            },
            (reason: any) => {}
        );
    }
}
