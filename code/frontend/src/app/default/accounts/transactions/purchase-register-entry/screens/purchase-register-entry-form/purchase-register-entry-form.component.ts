import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {ViewMRNModalComponent} from "../view-mrn-modal/view-mrn-modal.component";
import {PurchaseRegisterService} from "@services/accounts/purchaseRegister.service";
import {IPurchaseEntryMasterData} from "@mocks/models/accounts/transactions";
import {PURCHASE_ENTRY_FORM_ERRORS} from "@mocks/validations/accounts";
import {Location} from "@angular/common";
import {CancelPoComponent} from "@shared/modals";

@Component({
    selector: "app-purchase-register-entry-form",
    templateUrl: "./purchase-register-entry-form.component.html"
})
export class PurchaseRegisterEntryFormComponent implements OnInit {
    submitted = false;
    MRNList: any = [];
    masterData: IPurchaseEntryMasterData = {
        autoIncrementNo: "",
        purchaseCategoryOptions: [],
        suppliersOptions: []
    };
    action: string = "create";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        cancel: "Cancelled"
    };
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private purchaseRegisterService: PurchaseRegisterService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        PEntryNo: new UntypedFormControl(""),
        PEntryDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        supplier: new UntypedFormControl(""),
        supplierName: new UntypedFormControl(null, [Validators.required]),
        supplierGST: new UntypedFormControl(""),
        supplierCurrency: new UntypedFormControl(""),
        purchaseCategory: new UntypedFormControl(null, [Validators.required]),
        taxInvoiceNo: new UntypedFormControl(""),
        taxInvoiceDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        taxableAmt: new UntypedFormControl(""),
        SGSTAmt: new UntypedFormControl(""),
        CGSTAmt: new UntypedFormControl(""),
        IGSTAmt: new UntypedFormControl(""),
        totalAmt: new UntypedFormControl(""),
        TCSAmt: new UntypedFormControl(""),
        roundOffAmt: new UntypedFormControl(""),
        roundOffTotalAmt: new UntypedFormControl(""),
        remarks: new UntypedFormControl(""),
        cancellationReason: new UntypedFormControl(""),
        status: new UntypedFormControl("Awaiting Approval")
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
        if (this.validationService.checkErrors(this.form, PURCHASE_ENTRY_FORM_ERRORS)) {
            return;
        }
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
        this.purchaseRegisterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
            this.reset();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.purchaseRegisterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    getInitialData() {
        this.spinner.show();
        this.purchaseRegisterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["PEntryNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["PEntryDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["taxInvoiceDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        if (params["id"]) {
                            return this.purchaseRegisterService.getById(params["id"]);
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
                    success.PEntryDate = this.utilityService.getFormatDate(success.PEntryDate, "YYYY-MM-DD");
                    success.taxInvoiceDate = this.utilityService.getFormatDate(success.taxInvoiceDate, "yyyy-MM-DD");
                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);

                    if (this.action != "edit") {
                        this.form.disable();
                        if (["view", "cancel"].includes(this.action)) {
                            this.f["cancellationReason"].enable();
                        }
                    }
                });
        });
    }

    back() {
        this.location.back();
    }

    setSupplierDetails(ev: any) {
        this.form.controls["supplier"].setValue(ev?.supplier);
        this.form.controls["supplierGST"].setValue(ev?.supplierName);
        this.form.controls["supplierGST"].setValue(ev?.supplierGST);
        this.form.controls["supplierCurrency"].setValue(ev?.supplierCurrency);
        this.spinner.show();
        this.purchaseRegisterService.getAllMRNBySupplierId(this.form.controls["supplier"].value).subscribe(success => {
            this.MRNList = success;
            this.spinner.hide();
            console.log("success", success);
        });
    }

    setTotalGST() {
        let taxableAmt = this.f["taxableAmt"].value || 0;
        let SGSTAmt = this.f["SGSTAmt"].value || 0;
        let CGSTAmt = this.f["CGSTAmt"].value || 0;
        let IGSTAmt = this.f["IGSTAmt"].value || 0;

        if (SGSTAmt > 0 || CGSTAmt > 0) {
            this.f["IGSTAmt"].setValue(0.0);
            this.f["IGSTAmt"].value;
            this.f["IGSTAmt"].disable();
        } else {
            this.f["IGSTAmt"].enable();
        }

        if (IGSTAmt > 0) {
            this.f["SGSTAmt"].setValue(0.0);
            this.f["CGSTAmt"].setValue(0.0);

            this.f["SGSTAmt"].value;
            this.f["CGSTAmt"].value;
            this.f["SGSTAmt"].disable();
            this.f["CGSTAmt"].disable();
        } else {
            this.f["SGSTAmt"].enable();
            this.f["CGSTAmt"].enable();
        }

        let totalAmount = +(+taxableAmt + +SGSTAmt + +CGSTAmt + IGSTAmt).toFixed(2);

        this.f["totalAmt"].setValue(+totalAmount);
        this.setTotalAmount();
    }

    setTotalAmount() {
        let totalAmt = this.f["totalAmt"].value || 0;
        let TCSAmt = this.f["TCSAmt"].value || 0;
        let roundOffAmt = this.f["roundOffAmt"].value || 0;

        let totalRoundOffAmount = +(+totalAmt + +TCSAmt + +roundOffAmt).toFixed(2);

        this.f["roundOffTotalAmt"].setValue(+totalRoundOffAmount);
    }
    openCustomersDetailsModal() {
        const modalRef = this.modalService.open(ViewMRNModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.MRNList = this.MRNList;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                }
            },
            (reason: any) => {}
        );
    }
    openCancelModal() {
        if (this.action == "cancel" && !this.form.controls["cancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            return;
        }
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "Purchase Register Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel Purchase Register ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }
}
