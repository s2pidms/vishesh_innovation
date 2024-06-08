import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ToastService, UtilityService} from "@core/services";
import {UOM_MASTER_FORM_ERRORS} from "@mocks/validations/settings/UOMMaster.validation";
import {CustomerPDIRMappingService} from "@services/settings";
import {SpinnerService} from "@core/services";
import {PDIR_ENTRY_TEMPLATE_NAME} from "@mocks/constant";
import {ICustomerPDIRMappingMasterData} from "@mocks/models/settings/masters";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailsOfCustomersListComponent} from "@shared/modals";
import {Location} from "@angular/common";

@Component({
    selector: "app-pdir-mapping-form",
    templateUrl: "./pdir-mapping-form.component.html"
})
export class PdirMappingFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    templateNameObj: any = PDIR_ENTRY_TEMPLATE_NAME;
    templateNameArr: any = this.templateNameObj.getAllTemplateName();
    module: any = "";
    masterData: ICustomerPDIRMappingMasterData = {
        autoIncrementNo: "",
        customersOptions: []
    };
    selectedCustomerDetails = {};
    form = new FormGroup({
        _id: new FormControl(null),
        mapCode: new FormControl(""),
        customerName: new FormControl(null),
        customer: new FormControl(null),
        template: new FormControl(null)
    });

    constructor(
        private customerPDIRMappingService: CustomerPDIRMappingService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, UOM_MASTER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.customerPDIRMappingService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.customerPDIRMappingService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    setCustomerName(event: any) {
        this.form.controls["customerName"].setValue(event?.customerName);
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.customerPDIRMappingService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["mapCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.customerPDIRMappingService.getById(params["id"]);
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
                    this.form.patchValue(success);
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }
    openCustomersDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfCustomersListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedCustomerDetails = this.selectedCustomerDetails;
        modalRef.componentInstance.customerOptions = this.masterData.customersOptions;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.setCustomerName(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
