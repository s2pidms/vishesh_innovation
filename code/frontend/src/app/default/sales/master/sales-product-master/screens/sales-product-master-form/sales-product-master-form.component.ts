import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of, reduce} from "rxjs";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PRODUCT_MASTER_SOURCE_OF_MFG} from "@mocks/constant";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {ProductCategoryModalComponent} from "src/app/default/sales/master/sku/screens/product-category-modal/product-category-modal.component";
import {ISalesProductMasterData} from "@mocks/models/sales/master";
import {SalesProductMasterService} from "@services/sales";
import {MouldInfoModalComponent} from "../mould-info-modal/mould-info-modal.component";
import {SALES_PRODUCT_MASTER_FORM_ERRORS} from "@mocks/validations/sales/salesProductMaster.validation";
import {ProductPackingStdModalComponent} from "../product-packing-std-modal/product-packing-std-modal.component";

@Component({
    selector: "app-sales-product-master-form",
    templateUrl: "./sales-product-master-form.component.html"
})
export class SalesProductMasterFormComponent implements OnInit {
    active: number = 1;
    submitted = false;
    action: string = "create";
    productSourceOfMFGObj: any = PRODUCT_MASTER_SOURCE_OF_MFG;

    masterData: ISalesProductMasterData = {
        // autoIncrementNo: "",
        productCategories: [],
        shoulderType: [],
        orificeOptions: [],
        threadTypeOptions: [],
        finishCapOptions: [],
        mouldList: []
    };

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        productMasterNo: new UntypedFormControl(null, [Validators.required]),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        capDia: new UntypedFormControl(null),
        capHeight: new UntypedFormControl(null),
        capFinish: new UntypedFormControl(null),
        threadType: new UntypedFormControl(null),
        orifice: new UntypedFormControl(null),
        shoulderType: new UntypedFormControl(null),
        weight: new UntypedFormControl(null),
        status: new UntypedFormControl("Active"),
        mouldInfo: new UntypedFormControl([]),
        packingStdDetails: new UntypedFormControl({
            qtyPerPrimaryPack: new UntypedFormControl(null),
            qtyPerSecondaryPack: new UntypedFormControl(null)
        })
    });

    get f() {
        return this.form.controls;
    }
    get packingStdDetailsData() {
        return this.form.get("packingStdDetails") as UntypedFormGroup;
    }
    constructor(
        private salesProductMasterService: SalesProductMasterService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService
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
        this.form.enable();
        if (this.validationService.checkErrors(this.form, SALES_PRODUCT_MASTER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.mouldInfo = this.masterData?.mouldList;

        if (formData._id) {
            this.update(formData._id, formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.salesProductMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.salesProductMasterService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    getInitialData() {
        this.spinner.show();
        this.salesProductMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.masterData.mouldList = this.masterData.mouldList.map((x: any) => {
                x.select = false;
                return x;
            });
            // this.form.controls["productMasterNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.salesProductMasterService.getById(params["id"]);
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
                    success.status = success.status;
                    this.masterData.mouldList = success.mouldInfo;
                    this.form.patchValue(success);
                    this.form.controls["productCategory"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
    openProductCategoryModal() {
        const modalRef = this.modalService.open(ProductCategoryModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.productCategoryList = this.masterData?.productCategories;
        modalRef.componentInstance.productCategory = this.form.controls["productCategory"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["productCategory"].setValue(success?.selectedProductCategory);
                }
            },
            (reason: any) => {}
        );
    }
    openMouldInfoModal() {
        const modalRef = this.modalService.open(MouldInfoModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.mouldInfo = this.masterData?.mouldList;
        // modalRef.componentInstance.productCategory = this.form.controls["productCategory"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);

                    this.masterData.mouldList = success;
                }
            },
            (reason: any) => {}
        );
    }

    openPackingStdModal() {
        const modalRef = this.modalService.open(ProductPackingStdModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.packingStdDetailsData = this.packingStdDetailsData.value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.form.controls["packingStdDetails"].patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }

    findValue(array: any, value: any) {
        return array?.find((x: any) => x?.parameterName == value)?.parameterLabel;
    }

    setValue(value: any, formField: any) {
        let data: any = "";
        if (formField == "productCategory") {
            data = this.masterData?.productCategories?.find((x: any) => x?.label == value)?.productNumber;
        }
        if (formField == "threadType") {
            data = this.findValue(this.masterData?.threadTypeOptions, value);
        }
        if (formField == "capFinish") {
            data = this.findValue(this.masterData?.finishCapOptions, value);
        }
        if (formField == "orifice") {
            data = this.findValue(this.masterData?.orificeOptions, value);
        }
        if (formField == "shoulderType") {
            data = this.findValue(this.masterData?.shoulderType, value);
        }

        return data ? data : value;
    }

    setProductCode() {
        let keys = ["productCategory", "capDia", "threadType", "capHeight", "capFinish", "orifice", "shoulderType"];
        let productMasterNo = keys.reduce((accumulator, currentValue) => {
            if (this.f[currentValue].value) {
                let str = String(this.f[currentValue].value);
                if (["NA", "Not Applicable"].includes(str)) {
                    return accumulator;
                }
                if (str) {
                    // if (str.includes("-")) {
                    // if (this.f["threadType"].value == this.f[currentValue].value) {
                    // str =  this.f[currentValue].value
                    // } else {
                    //     str = this.f[currentValue].value.split("-")[0].trim();
                    // }
                    // }

                    str = this.setValue(this.f[currentValue].value, currentValue);
                }
                accumulator = accumulator + "/" + str;
            }
            return accumulator;
        }, "ATP");
        this.f["productMasterNo"].setValue(productMasterNo);
    }
}
