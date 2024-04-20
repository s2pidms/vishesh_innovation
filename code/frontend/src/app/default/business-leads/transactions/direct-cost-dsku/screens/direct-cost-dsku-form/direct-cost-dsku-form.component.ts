import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {
    AssetCostModalComponent,
    LabourCostModalComponent,
    ToolingCostModalComponent
} from "src/app/default/planning/master/direct-cost/screens/components";
import {DirectCostForDSKUService} from "@services/business-leads";
import {DIRECT_COST_FOR_DSKU_FORM_ERRORS} from "@mocks/validations/business-leads";
import {DirectCostForDSKUMasterData} from "@mocks/models/business-leads/masters";

@Component({
    selector: "app-direct-cost-dsku-form",
    templateUrl: "./direct-cost-dsku-form.component.html"
})
export class DirectCostDskuFormComponent implements OnInit {
    get f() {
        return this.form.controls;
    }

    oldAssetAllocationData: any = [];
    SKUList: any = [];
    ESCPreviewArr: any = [];
    toolingCostDetails: any = [
        {
            toolingDescription: "",
            toolingCost: 0,
            CAUnits: 0,
            toolingCostPerUnit: 0
        }
    ];
    oldToolingCostDetails: any = [
        {
            toolingDescription: "",
            toolingCost: 0,
            CAUnits: 0,
            toolingCostPerUnit: 0
        }
    ];
    submitted = false;
    action: string = "create";
    masterData: DirectCostForDSKUMasterData = {
        autoIncrementNo: "",
        processList: [],
        productCategories: []
    };
    toolingCAQty: number = 0;
    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private directCostForDSKUService: DirectCostForDSKUService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        directCostNo: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        DSKU: new UntypedFormControl(null),
        DSKUNo: new UntypedFormControl(null, [Validators.required]),
        DSKUName: new UntypedFormControl(null, [Validators.required]),
        DSKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        totalLabourCostPerUnit: new UntypedFormControl(null, [Validators.required]),
        totalAssetCostPerUnit: new UntypedFormControl(null, [Validators.required]),
        totalToolingCostPerUnit: new UntypedFormControl(null, [Validators.required]),
        totalCostPerUnit: new UntypedFormControl(null),
        directCostDetails: new UntypedFormControl([]),
        toolingCostDetails: new UntypedFormControl([])
    });

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.SKUList = [];
        this.toolingCostDetails = JSON.parse(JSON.stringify(this.oldToolingCostDetails));
        this.toolingCAQty = 0;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, DIRECT_COST_FOR_DSKU_FORM_ERRORS)) {
            return;
        }

        this.form.enable();
        let formData: any = this.form.value;
        formData.directCostDetails = this.masterData.processList;
        formData.toolingCostDetails = this.toolingCostDetails;

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.directCostForDSKUService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.directCostForDSKUService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.directCostForDSKUService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["directCostNo"].setValue(this.masterData.autoIncrementNo);
            if (this.masterData.processList) {
                this.oldAssetAllocationData = JSON.parse(JSON.stringify(this.masterData.processList));
            }

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.directCostForDSKUService.getById(params["id"]);
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
                    success.directCostDetails = success.directCostDetails;
                    let assetDetails = this.masterData.processList;
                    this.masterData.processList = success.directCostDetails;
                    for (const ele of success.directCostDetails) {
                        assetDetails = assetDetails.filter((x: any) => x.processId != ele.processId);
                        this.ESCPreviewArr = [...success.directCostDetails, ...assetDetails];
                        this.oldAssetAllocationData = [...success.directCostDetails, ...assetDetails];
                    }

                    this.toolingCostDetails = success.toolingCostDetails;

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
        this.SKUList = [];
        this.masterData.processList = JSON.parse(JSON.stringify(this.oldAssetAllocationData));
        this.toolingCostDetails = JSON.parse(JSON.stringify(this.oldToolingCostDetails));
        this.toolingCAQty = 0;
        this.form.controls["DSKU"].setValue(null);
        this.form.controls["DSKUNo"].setValue(null);
        this.form.controls["DSKUName"].setValue(null);
        this.form.controls["DSKUDescription"].setValue(null);
        this.form.controls["UOM"].setValue(null);
        let productCategory = this.form.controls["productCategory"].value;
        this.spinner.show();
        this.directCostForDSKUService.getDSKUData({category: productCategory}).subscribe(success => {
            if (success) {
                this.SKUList = success;
            }
            this.spinner.hide();
        });
    }

    setSKUDetails(ev: any) {
        this.form.controls["DSKU"].setValue(ev?._id);
        this.directCostForDSKUService.checkSKUExistsByDSKUIdId(ev?._id).subscribe();
        this.form.controls["DSKUNo"].setValue(ev?.dSKUNo);
        this.form.controls["DSKUName"].setValue(ev?.SKUName);
        this.form.controls["DSKUDescription"].setValue(ev?.SKUDescription);
        this.form.controls["UOM"].setValue(ev?.primaryUnit);
        this.toolingCAQty = ev?.toolingCAQty || 0;
        this.masterData.processList = this.masterData.processList.map((x: any) => {
            x.CAUnits = ev?.processCAQty || 0;
            return x;
        });
        this.toolingCostDetails = this.toolingCostDetails.map((x: any) => {
            x.CAUnits = ev?.toolingCAQty || 0;
            return x;
        });
    }

    calTotalCostPerUnit() {
        let totalLabourCostPerUnit = +this.form.controls["totalLabourCostPerUnit"].value || 0;
        let totalAssetCostPerUnit = +this.form.controls["totalAssetCostPerUnit"].value || 0;
        let totalToolingCostPerUnit = +this.form.controls["totalToolingCostPerUnit"].value || 0;

        this.form.controls["totalCostPerUnit"].setValue(
            +(totalLabourCostPerUnit + totalAssetCostPerUnit + totalToolingCostPerUnit).toFixed(2)
        );
    }

    openLabourCostModal() {
        const modalRef = this.modalService.open(LabourCostModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.processList = this.masterData.processList;
        modalRef.componentInstance.ESCPreviewArr = this.ESCPreviewArr;
        modalRef.componentInstance.oldAssetAllocationData = this.oldAssetAllocationData;
        modalRef.componentInstance.totalLabourCostPerUnit = this.form.controls["totalLabourCostPerUnit"].value;
        modalRef.componentInstance.totalAssetCostPerUnit = this.form.controls["totalAssetCostPerUnit"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.masterData.processList = success?.processList;
                    this.oldAssetAllocationData = success?.oldAssetAllocationData;
                    this.form.controls["totalLabourCostPerUnit"].setValue(success?.totalLabourCostPerUnit);
                    this.form.controls["totalAssetCostPerUnit"].setValue(success?.totalAssetCostPerUnit);
                    this.calTotalCostPerUnit();
                }
            },
            (reason: any) => {}
        );
    }
    openAssetCostModal() {
        const modalRef = this.modalService.open(AssetCostModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.processList = this.masterData.processList;
        modalRef.componentInstance.ESCPreviewArr = this.ESCPreviewArr;
        modalRef.componentInstance.oldAssetAllocationData = this.oldAssetAllocationData;
        modalRef.componentInstance.totalAssetCostPerUnit = this.form.controls["totalAssetCostPerUnit"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.masterData.processList = success?.processList;
                    this.oldAssetAllocationData = success?.oldAssetAllocationData;
                    this.form.controls["totalAssetCostPerUnit"].setValue(success?.totalAssetCostPerUnit);
                    this.form.controls["totalLabourCostPerUnit"].setValue(success?.totalLabourCostPerUnit);
                    this.calTotalCostPerUnit();
                }
            },
            (reason: any) => {}
        );
    }
    openToolingCostModal() {
        const modalRef = this.modalService.open(ToolingCostModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.toolingCostDetails = this.toolingCostDetails;
        modalRef.componentInstance.ESCPreviewArr = this.ESCPreviewArr;
        modalRef.componentInstance.toolingCAQty = this.toolingCAQty;
        modalRef.componentInstance.totalToolingCostPerUnit = this.form.controls["totalToolingCostPerUnit"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.toolingCostDetails = success?.toolingCostDetails;
                    this.form.controls["totalToolingCostPerUnit"].setValue(success?.totalToolingCostPerUnit);
                    this.calTotalCostPerUnit();
                }
            },
            (reason: any) => {}
        );
    }
}
