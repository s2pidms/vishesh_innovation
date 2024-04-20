import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {IMouldMasterData} from "@mocks/models/settings/masters";
import {MouldMasterService} from "@services/settings/mouldMaster.service";
import {MOULD_MASTER_FORM_ERRORS} from "@mocks/validations/settings/moduleMaster.validation";
import {Location} from "@angular/common";
import {DetailsOfSupplierListComponent} from "@shared/modals";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-mould-master-form",
    templateUrl: "./mould-master-form.component.html"
})
export class MouldMasterFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    selectedSupplierDetails = {};
    masterData: IMouldMasterData = {
        autoIncrementNo: "",
        suppliersOptions: [],
        mouldTypeOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        mouldNo: new UntypedFormControl(null, [Validators.required]),
        mouldName: new UntypedFormControl(null, [Validators.required]),
        mouldType: new UntypedFormControl(null, [Validators.required]),
        noOfCavities: new UntypedFormControl(null),
        mouldTBDDimension: new UntypedFormControl(null),
        // TBDPerWidth: new UntypedFormControl(null),
        // TBDPerLength: new UntypedFormControl(null),
        supplier: new UntypedFormControl(null),
        mouldSupplier: new UntypedFormControl(null, [Validators.required]),
        partNo: new UntypedFormControl(null, [Validators.required]),
        mouldBatchDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        status: new UntypedFormControl("Active")
    });

    constructor(
        private mouldMasterService: MouldMasterService,
        private router: Router,
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

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, MOULD_MASTER_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (formData.revision) {
            formData.revision = [formData.revision];
        }
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.mouldMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.mouldMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.mouldMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["mouldNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.mouldMasterService.getById(params["id"]);
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
                    if (success.mouldBatchDate) {
                        success.mouldBatchDate = this.utilityService.getFormatDate(
                            success?.mouldBatchDate,
                            "YYYY-MM-DD"
                        );
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
                    this.selectedSupplierDetails = success?.selectedSupplierDetails;
                    this.form.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                    this.form.controls["mouldSupplier"].setValue(success?.selectedSupplierDetails?.supplierName);
                }
            },
            (reason: any) => {}
        );
    }
    setSupplierName(ev: any) {
        this.form.controls["mouldSupplier"].setValue(ev.supplierName);
    }
}
