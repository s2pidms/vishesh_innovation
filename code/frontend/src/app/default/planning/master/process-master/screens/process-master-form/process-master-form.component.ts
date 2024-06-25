import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {AssetAllocationModalComponent} from "../components/asset-allocation-modal/asset-allocation-modal.component";
import {ProcessMasterService} from "@services/planning";
import {PROCESS_MASTER_FORM_ERRORS} from "@mocks/validations/planning";
import {Location} from "@angular/common";
import {IProcessMasterData} from "@mocks/models/planning/masters";
import {CHILD_ITEM_SOURCE_OF_MFG, PROCESS_MASTER_SOURCE_OF_MFG} from "@mocks/constant";

@Component({
    selector: "app-process-master-form",
    templateUrl: "./process-master-form.component.html"
})
export class ProcessMasterFormComponent implements OnInit {
    ESCPreviewArr: any = [];
    submitted = false;
    action: string = "create";
    sourceOfMfg: any = PROCESS_MASTER_SOURCE_OF_MFG;
    masterData: IProcessMasterData = {
        autoIncrementNo: "",
        labourList: [],
        processList: [],
        assetMasterList: []
    };
    skilledLabour: any = {};
    semiSkilledLabour: any = {};
    unSkilledLabour: any = {};
    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private processMasterService: ProcessMasterService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        processId: new UntypedFormControl(null, [Validators.required]),
        processName: new UntypedFormControl(null, [Validators.required]),
        sourceOfManufacturing: new UntypedFormControl(null, [Validators.required]),
        primaryAssetAllocation: new UntypedFormControl(null),
        skilledRatePerHr: new UntypedFormControl(null),
        semiSkilledRatePerHr: new UntypedFormControl(null),
        unSkilledRatePerHr: new UntypedFormControl(null),
        totalRatePerHr: new UntypedFormControl(null),
        unitProcessOutput: new UntypedFormControl(null),
        standardOutputPerHr: new UntypedFormControl(null),
        allocationOfSkilledLabour: new UntypedFormControl(null),
        allocationOfSemiSkilledLabour: new UntypedFormControl(null),
        allocationOfUnSkilledLabour: new UntypedFormControl(null),
        totalLabourHeadCount: new UntypedFormControl(null),
        assetAllocationDetails: new UntypedFormControl([]),
        totalAllocatedAssetCostPerHr: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
    });
    get f() {
        return this.form.controls;
    }
    ngOnInit(): void {
        // this.f["sourceOfManufacturing"].setValue(this.sourceOfManufacturing);
        // this.collection = this.supplierDetails.length;
        this.setSourceOfManufacturing();
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.setSourceOfManufacturing();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        // this.form.enable();
        // let obj: any = {};
        // obj.sourceOfManufacturing = this.f["sourceOfManufacturing"].value;
        if (this.validationService.checkErrors(this.form, PROCESS_MASTER_FORM_ERRORS)) {
            return;
        }

        this.form.enable();

        let formData: any = this.form.value;
        if (formData.totalAllocatedAssetCostPerHr) {
            formData.assetAllocationDetails = this.masterData?.assetMasterList.filter((x: any) => x?.isSelect == true);
        }

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.processMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.processMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    setSourceOfManufacturing() {
        let sourceOfManufacturing = this.f["sourceOfManufacturing"].value;
        if (sourceOfManufacturing == "Outsourced") {
            this.f["primaryAssetAllocation"].setValue(null);
            this.f["unitProcessOutput"].setValue(null);
            this.f["allocationOfSkilledLabour"].setValue(null);
            this.f["skilledRatePerHr"].setValue(null);
            this.f["allocationOfSemiSkilledLabour"].setValue(null);
            this.f["semiSkilledRatePerHr"].setValue(null);
            this.f["allocationOfUnSkilledLabour"].setValue(null);
            this.f["unSkilledRatePerHr"].setValue(null);
            this.f["totalLabourHeadCount"].setValue(null);
            this.f["totalRatePerHr"].setValue(null);
            this.f["totalAllocatedAssetCostPerHr"].setValue(null);
            this.f["primaryAssetAllocation"].disable();
            this.f["unitProcessOutput"].disable();
            this.f["allocationOfSkilledLabour"].disable();
            this.f["skilledRatePerHr"].disable();
            this.f["allocationOfSemiSkilledLabour"].disable();
            this.f["semiSkilledRatePerHr"].disable();
            this.f["allocationOfUnSkilledLabour"].disable();
            this.f["unSkilledRatePerHr"].disable();
            this.f["totalLabourHeadCount"].disable();
            this.f["totalRatePerHr"].disable();
            // this.btnDisable = true;
        } else {
            this.form.enable();

            if (this.action == "edit") {
                this.f["processName"].disable();
            }
            this.f["skilledRatePerHr"].setValue(this.skilledLabour?.salaryPerHour);
            this.f["semiSkilledRatePerHr"].setValue(this.semiSkilledLabour?.salaryPerHour);
            this.f["unSkilledRatePerHr"].setValue(this.unSkilledLabour?.salaryPerHour);
        }
    }
    getInitialData() {
        this.spinner.show();
        this.processMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["processId"].setValue(this.masterData?.autoIncrementNo);
            this.f["status"].setValue("Active");
            this.skilledLabour = this.masterData?.labourList?.find(x => x?.category == "Skilled Labour");
            this.f["skilledRatePerHr"].setValue(this.skilledLabour?.salaryPerHour);
            this.semiSkilledLabour = this.masterData?.labourList?.find(x => x?.category == "Semi-Skilled Labour");
            this.f["semiSkilledRatePerHr"].setValue(this.semiSkilledLabour?.salaryPerHour);
            this.unSkilledLabour = this.masterData?.labourList?.find(x => x?.category == "Un-Skilled Labour");
            this.f["unSkilledRatePerHr"].setValue(this.unSkilledLabour?.salaryPerHour);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.processMasterService.getById(params["id"]);
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

                    if (success.assetAllocationDetails.length == 0) {
                        this.ESCPreviewArr = this.masterData.assetMasterList;
                    } else {
                        success.assetAllocationDetails = success.assetAllocationDetails;
                        let assetDetails = this.masterData?.assetMasterList;
                        this.masterData.assetMasterList = success.assetAllocationDetails;

                        for (const ele of success.assetAllocationDetails) {
                            assetDetails = assetDetails.filter((x: any) => x.assetCode != ele.assetCode);
                            this.ESCPreviewArr = [...success.assetAllocationDetails, ...assetDetails];
                        }
                    }

                    this.form.patchValue(success);
                    this.setSourceOfManufacturing();
                    if (this.action == "view") {
                        this.form.disable();
                    }
                    if (this.action == "edit") {
                        this.f["processName"].disable();
                    }
                });
        });
    }

    setTotalLabourHeadCount() {
        let allocationOfSkilledLabour = this.f["allocationOfSkilledLabour"].value || 0;
        let allocationOfSemiSkilledLabour = this.f["allocationOfSemiSkilledLabour"].value || 0;
        let allocationOfUnSkilledLabour = this.f["allocationOfUnSkilledLabour"].value || 0;
        let skilledRatePerHr = this.f["skilledRatePerHr"].value || 0;
        let semiSkilledRatePerHr = this.f["semiSkilledRatePerHr"].value || 0;
        let unSkilledRatePerHr = this.f["unSkilledRatePerHr"].value || 0;

        let totalLabour = +allocationOfSkilledLabour + +allocationOfSemiSkilledLabour + +allocationOfUnSkilledLabour;
        let totalLabourRate =
            +(+allocationOfSkilledLabour * +skilledRatePerHr).toFixed(2) +
            +(+allocationOfSemiSkilledLabour * +semiSkilledRatePerHr).toFixed(2) +
            +(+allocationOfUnSkilledLabour * +unSkilledRatePerHr).toFixed(2);

        this.f["totalLabourHeadCount"].setValue(+totalLabour);
        this.f["totalRatePerHr"].setValue(+totalLabourRate);
    }

    openAssetAllocationModal() {
        if (this.f["sourceOfManufacturing"].value != "Outsourced") {
            const modalRef = this.modalService.open(AssetAllocationModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.assetAllocationList = this.masterData?.assetMasterList;
            modalRef.componentInstance.ESCPreviewArr = this.ESCPreviewArr;
            modalRef.componentInstance.totalAllocatedAssetCostPerHr = this.f["totalAllocatedAssetCostPerHr"].value;
            modalRef.componentInstance.primaryAssetAllocation = this.f["primaryAssetAllocation"].value;
            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.masterData.assetMasterList = success?.assetAllocationList;
                        this.f["totalAllocatedAssetCostPerHr"].setValue(success?.totalAllocatedAssetCostPerHr);
                        this.f["primaryAssetAllocation"].setValue(success?.primaryAssetAllocation);
                    }
                },
                (reason: any) => {}
            );
        }
    }
}
