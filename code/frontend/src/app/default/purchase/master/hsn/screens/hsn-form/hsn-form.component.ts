import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {HSNService} from "@services/purchase";
import {PURCHASE_HSN_FORM_ERRORS} from "@mocks/validations/purchase";
import {ValidationService} from "@core/components";
import {IPurchaseHSNMasterData} from "@mocks/models/purchase/masters";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CancelPoComponent} from "@shared/modals";

@Component({
    selector: "app-hsn-form",
    templateUrl: "./hsn-form.component.html"
})
export class HSNFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    earnings: any = [];
    masterData: IPurchaseHSNMasterData = {
        autoIncrementNo: ""
    };

    constructor(
        private hsnService: HSNService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location,
        private modalService: NgbModal
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        provisionType: new UntypedFormControl(true, [Validators.required]),
        hsnMasterEntryNo: new UntypedFormControl(""),
        hsnEntryDate: new UntypedFormControl(""),
        hsnCode: new UntypedFormControl("", [Validators.required, Validators.pattern("^[0-9]{4,8}$")]),
        isActive: new UntypedFormControl("Y", [Validators.required]),
        goodsDescription: new UntypedFormControl("", [Validators.required]),
        gstRate: new UntypedFormControl("", [Validators.required]),
        igstRate: new UntypedFormControl("", [Validators.required]),
        sgstRate: new UntypedFormControl("", [Validators.required]),
        cgstRate: new UntypedFormControl("", [Validators.required]),
        ugstRate: new UntypedFormControl("", [Validators.required]),
        revision: new UntypedFormGroup({
            revisionNo: new UntypedFormControl(""),
            revisionDate: new UntypedFormControl("", [Validators.required])
        })
    });

    get Revision() {
        return this.form.get("revision") as UntypedFormGroup;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, PURCHASE_HSN_FORM_ERRORS)) {
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
        this.hsnService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.hsnService.create(formData).subscribe(success => {
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
        this.hsnService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["hsnMasterEntryNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["isActive"].setValue("Y");
            this.form.controls["provisionType"].setValue(true);
            this.Revision.controls["revisionDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.Revision.controls["revisionNo"].setValue(1);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.hsnService.getById(params["id"]);
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
                    if (success.revision.length == 1) {
                        success.revision.revisionNo = success.revision[0].revisionNo;
                        if (success.revision[0].revisionDate) {
                            success.revision.revisionDate = this.utilityService.getFormatDate(
                                success.revision[0].revisionDate,
                                "YYYY-MM-DD"
                            );
                        }
                    }
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setUTGSTValue() {
        let sgstRate = this.form.controls["sgstRate"].value;
        this.form.controls["ugstRate"].setValue(sgstRate);
    }

    openCancelModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.HSNFlag = true;
        modalRef.componentInstance.heading = "HSN Master";
        modalRef.componentInstance.cancelText = `Any changes to the HSN master won't automatically reflect in existing purchase orders.`;
        modalRef.componentInstance.cancelTextTwo = `Please cancel old purchase orders and create new ones with updated HSN values if necessary.`;
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }

    HSNCodeCond() {
        if (this.action == "edit") {
            this.openCancelModal();
        } else {
            this.submit();
        }
    }
}
