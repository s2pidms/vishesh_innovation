import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {CostSheetForDskuDetailsComponent} from "../cost-sheet-for-dsku-details/cost-sheet-for-dsku-details.component";
import {CostSheetForDSKUService} from "@services/business-leads";
import {COST_SHEET_FOR_DSKU_FORM_ERRORS} from "@mocks/validations/business-leads";
import {ICostSheetForDSKUMasterData} from "@mocks/models/business-leads/transactions";

@Component({
    selector: "app-cost-sheet-for-dsku-form",
    templateUrl: "./cost-sheet-for-dsku-form.component.html"
})
export class CostSheetForDskuFormComponent implements OnInit {
    oldAssetAllocationData: any = [];
    DSKUList: any = [];
    costDetailsArr: any = [];
    submitted = false;
    action: string = "create";
    masterData: ICostSheetForDSKUMasterData = {
        autoIncrementNo: "",
        categoryOptions: []
    };
    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private costSheetForDSKUService: CostSheetForDSKUService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        DSKUCostSheetNo: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        DSKU: new UntypedFormControl(null),
        DSKUNo: new UntypedFormControl(null, [Validators.required]),
        DSKUName: new UntypedFormControl(null, [Validators.required]),
        DSKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        sellingPrice: new UntypedFormControl(null, [Validators.required]),
        DSKUCostDetails: new UntypedFormControl([])
    });

    ngOnInit(): void {
        this.getInitialData();
    }
    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.DSKUList = [];
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, COST_SHEET_FOR_DSKU_FORM_ERRORS)) {
            return;
        }

        let valueCheckArr = this.costDetailsArr.filter((x: any) =>
            ["Direct Material", "Direct Labour", "Direct Expenses", "Profit"].includes(x.costHead)
        );

        if (valueCheckArr.some((x: any) => x.costPerUnit <= 0) == true) {
            this.toastService.warning(
                "Ensure Direct Material, Direct Labour, Direct Expenses, and Profit values are greater than 0"
            );
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;
        formData.DSKUCostDetails = this.costDetailsArr;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.costSheetForDSKUService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.costSheetForDSKUService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.costSheetForDSKUService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["DSKUCostSheetNo"].setValue(this.masterData.autoIncrementNo);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.costSheetForDSKUService.getById(params["id"]);
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
                    this.costDetailsArr = success.DSKUCostDetails;

                    this.form.patchValue(success);
                    this.form.controls["productCategory"].disable();
                    this.form.controls["DSKUNo"].disable();
                    this.form.controls["DSKUName"].disable();
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }

    getDSKUData() {
        this.DSKUList = [];
        this.form.controls["DSKU"].setValue(null);
        this.form.controls["DSKUNo"].setValue(null);
        this.form.controls["DSKUName"].setValue(null);
        this.form.controls["DSKUDescription"].setValue(null);
        this.form.controls["UOM"].setValue(null);
        this.form.controls["sellingPrice"].setValue(null);
        let productCategory = this.form.controls["productCategory"].value;
        this.spinner.show();
        this.costSheetForDSKUService.getDSKUInCostSheet({category: productCategory}).subscribe(success => {
            if (success) {
                this.DSKUList = success;
            }
            this.spinner.hide();
        });
    }

    setDSKUDetails(ev: any) {
        this.form.controls["DSKU"].setValue(ev?._id);
        this.form.controls["DSKUNo"].setValue(ev?.dSKUNo);
        this.form.controls["DSKUName"].setValue(ev?.SKUName);
        this.form.controls["DSKUDescription"].setValue(ev?.SKUDescription);
        this.form.controls["UOM"].setValue(ev?.primaryUnit);
        this.costSheetForDSKUService.getDSKUCostSheetDetailsByDSKUId(ev?._id).subscribe(success => {
            if (success) {
                this.costDetailsArr = success;
                // this.setSellingPrice();
            }
            this.spinner.hide();
        });
    }

    setSellingPrice() {
        let sellingPrice = this.costDetailsArr.find((x: any) => x.costHead == "Selling Price")?.costPerUnit || 0;
        this.form.controls["sellingPrice"].setValue(+sellingPrice.toFixed(2));
    }

    openCostDetailsModal() {
        if (!this.form.controls["DSKUNo"].value) {
            this.toastService.warning("First Select D-SKU");
            return;
        }

        const modalRef = this.modalService.open(CostSheetForDskuDetailsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.costDetailsArr = this.costDetailsArr;
        modalRef.componentInstance.oldAssetAllocationData = this.oldAssetAllocationData;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.costDetailsArr = success;
                    this.setSellingPrice();
                }
            },
            (reason: any) => {}
        );
    }
}
