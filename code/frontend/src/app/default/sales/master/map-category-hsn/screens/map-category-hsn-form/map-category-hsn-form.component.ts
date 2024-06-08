import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {MapCategoryHSNService} from "@services/sales";
import {MAP_CATEGORY_HSN_FORM_ERRORS} from "@mocks/validations/sales";
import {SpinnerService} from "@core/services";
import {InkHsnModalComponent} from "src/app/default/production/master/ink-master/screens/ink-hsn-modal/ink-hsn-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IMapCategoryHSNMasterData} from "@mocks/models/sales/master";
import {Location} from "@angular/common";
import {ProductCategoryModalComponent} from "../../../sku/screens/components";

@Component({
    selector: "app-map-category-hsn-form",
    templateUrl: "./map-category-hsn-form.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class MapCategoryHsnFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IMapCategoryHSNMasterData = {
        autoIncrementNo: "",
        productCategoriesOptions: [],
        salesHSNList: [],
        colourCodeJCOptions: []
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        hsnMapCategoryCode: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        HSN: new UntypedFormControl(null, [Validators.required]),
        HSNCode: new UntypedFormControl(null),
        colourName: new UntypedFormControl(null),
        status: new UntypedFormControl("Active"),
        description: new UntypedFormControl(null, [Validators.required]),
        igstRate: new UntypedFormControl(null, [Validators.required]),
        sgstRate: new UntypedFormControl(null, [Validators.required]),
        cgstRate: new UntypedFormControl(null, [Validators.required]),
        ugstRate: new UntypedFormControl(null)
    });

    constructor(
        private mapCategoryHSNService: MapCategoryHSNService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, MAP_CATEGORY_HSN_FORM_ERRORS)) {
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
        this.mapCategoryHSNService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.mapCategoryHSNService.create(formData).subscribe(success => {
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
        this.mapCategoryHSNService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["hsnMapCategoryCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.mapCategoryHSNService.getById(params["id"]);
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
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
    setHSNCode() {
        let hsn = this.masterData?.salesHSNList.find(
            (x: any) => x.hsnCode == this.form.controls["HSNCode"].value.trim()
        );
        this.form.controls["HSN"].setValue(hsn?._id);
        this.form.controls["description"].setValue(hsn?.goodsDescription);
        this.form.controls["igstRate"].setValue(hsn?.igstRate);
        this.form.controls["sgstRate"].setValue(hsn?.sgstRate);
        this.form.controls["cgstRate"].setValue(hsn?.cgstRate);
        this.form.controls["ugstRate"].setValue(hsn?.ugstRate);
    }

    openFormulationHSNModal() {
        const modalRef = this.modalService.open(InkHsnModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.HSNCodeArr = this.masterData?.salesHSNList;
        modalRef.componentInstance.editScreen = "Edit Screen";
        modalRef.componentInstance.HSNCode = this.form.controls["HSNCode"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["HSNCode"].setValue(success?.HSNSelectCode);
                    this.setHSNCode();
                }
            },
            (reason: any) => {}
        );
    }
    openProductCategoryModal() {
        const modalRef = this.modalService.open(ProductCategoryModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.productCategoryList = this.masterData?.productCategoriesOptions;
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
}
