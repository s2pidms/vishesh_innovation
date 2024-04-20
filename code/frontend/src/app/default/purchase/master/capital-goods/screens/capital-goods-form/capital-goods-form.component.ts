import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {CapitalGoodsService} from "@services/purchase";
import {CAPITAL_GOODS_ERRORS} from "@mocks/validations/purchase/capital-goods.validation";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {ICapitalGoodsMasterData} from "@mocks/models/purchase/masters";
import {DetailsOfSupplierListComponent} from "@shared/modals";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-capital-goods-form",
    templateUrl: "./capital-goods-form.component.html"
})
export class CapitalGoodsFormComponent implements OnInit {
    technicalSheetFile: any = null;
    submitted = false;
    action: string = "create";
    masterData: ICapitalGoodsMasterData = {
        autoIncrementNo: "",
        suppliersOptions: [],
        UOMOptions: [],
        hsnCodes: []
    };
    selectedSupplierDetails = {};

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        capitalGoodsNo: new UntypedFormControl("", [Validators.required]),
        capitalGoodsName: new UntypedFormControl("", [Validators.required]),
        capitalGoodsDescription: new UntypedFormControl("", [Validators.required]),
        capitalGoodsSpecification: new UntypedFormControl(""),
        hsnCode: new UntypedFormControl(null, [Validators.required]),
        UOM: new UntypedFormControl(null, [Validators.required]),
        technicalSheetFile: new UntypedFormControl(""),
        technicalSheetFileUrl: new UntypedFormControl(null),

        isActive: new UntypedFormControl(true),

        supplierInfo: new UntypedFormGroup({
            _id: new UntypedFormControl(null),
            supplier: new UntypedFormControl("", [Validators.required]),
            supplierPartNo: new UntypedFormControl(""),
            currency: new UntypedFormControl(""),
            purchaseCost: new UntypedFormControl("", [Validators.required])
        })
    });

    get supplierForm() {
        return this.form.get("supplierInfo") as UntypedFormGroup;
    }

    constructor(
        private capitalGoodsService: CapitalGoodsService,
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

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, CAPITAL_GOODS_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        let capitalGoodsFormData = new FormData();
        capitalGoodsFormData.append("key", "technicalSheet");

        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    capitalGoodsFormData.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    capitalGoodsFormData.append(key, formData[key]);
                }
            }
        }

        if (this.technicalSheetFile) {
            capitalGoodsFormData.append("technicalSheetFile", this.technicalSheetFile, this.technicalSheetFile.name);
        }

        if (formData._id) {
            this.update(formData._id, capitalGoodsFormData);
        } else {
            delete formData._id;
            this.create(capitalGoodsFormData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.capitalGoodsService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.capitalGoodsService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.capitalGoodsService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["capitalGoodsNo"].setValue(this.masterData?.autoIncrementNo);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.capitalGoodsService.getById(params["id"]);
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

    setCurrency(ev: any) {
        console.log("ev", ev);

        this.supplierForm.controls["currency"].setValue(ev.currency);
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
        modalRef.componentInstance.supplier = this.supplierForm.controls["supplier"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedSupplierDetails = success?.selectedSupplierDetails;
                    this.supplierForm.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                    this.setCurrency(this.selectedSupplierDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
