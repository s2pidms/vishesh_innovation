import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService, AppGlobalService} from "@core/services";
import {AssetMasterService} from "@services/finance";
import {ASSET_MASTER_FORM_ERRORS} from "@mocks/validations/finance";
import {IAssetMasterData} from "@mocks/models/finance/masters";
import {AssetCostingModalComponent} from "../components/asset-costing-modal/asset-costing-modal.component";

@Component({
    selector: "app-asset-master-form",
    templateUrl: "./asset-master-form.component.html"
})
export class AssetMasterFormComponent implements OnInit {
    assetTypeArr: any = [];
    autoIncValues: any = {};
    // depreciation: any = null;
    // energySpecification: any = null;
    submitted = false;
    action: string = "create";
    menuItemId: string = "";
    financeMenuItemId: string = "64a6c1e33339d4dc9d8141ad";
    masterData: IAssetMasterData = {
        assetClassOptions: [],
        assetConfigurationOptions: [],
        locationOptions: []
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private assetMasterService: AssetMasterService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private appGlobalService: AppGlobalService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        assetType: new UntypedFormControl(null),
        assetClassId: new UntypedFormControl(null, [Validators.required]),
        assetCode: new UntypedFormControl(null, [Validators.required]),
        assetName: new UntypedFormControl(null, [Validators.required]),
        assetDescription: new UntypedFormControl(null, [Validators.required]),
        // assetSerialNumber: new UntypedFormControl(null),
        // countryOfOrigin: new UntypedFormControl(null),
        // assetModel: new UntypedFormControl(null),
        // manufacturer: new UntypedFormControl(null),
        // supplier: new UntypedFormControl(null),
        assetPurchaseDate: new UntypedFormControl(null),
        // installationDate: new UntypedFormControl(null),
        assetPurchaseCost: new UntypedFormControl(null, [Validators.required]),
        // warrantyExpiryDate: new UntypedFormControl(null),
        location: new UntypedFormControl(null),
        // depreciationMethod: new UntypedFormControl(null),
        // estimatedUsefulLife: new UntypedFormControl(null),
        // depreciationRate: new UntypedFormControl(null),
        depreciationStartDate: new UntypedFormControl(null),
        costingInput: new UntypedFormControl({}),
        status: new UntypedFormControl("Active", [Validators.required]),
        totalAssetCostPerHr: new UntypedFormControl(null),
        totalAssetCostPerShift: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.menuItemId = this.appGlobalService.menuItemId;
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    reset() {
        this.form.reset();
        // this.depreciation = null;
        // this.energySpecification = null;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, ASSET_MASTER_FORM_ERRORS)) {
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
        this.assetMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/finance/master/cost_sheet/asset_master/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.assetMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/finance/master/cost_sheet/asset_master/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.assetMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.autoIncValues = result?.autoIncValues;
            this.form.controls["assetPurchaseDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.setDepreciationStartDate();
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.assetMasterService.getById(params["id"]);
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

                    if (success.assetClassId) {
                        let assetModalCondObj = this.masterData?.assetClassOptions.find(
                            (x: any) => x._id == success?.assetClassId
                        );

                        // this.depreciation = assetModalCondObj?.depreciation;
                        // this.energySpecification = assetModalCondObj?.energySpecification;
                    }

                    if (success.costingInput && success.costingInput.depreciationStartDate) {
                        success.costingInput.depreciationStartDate = this.utilityService.getFormatDate(
                            success.costingInput.depreciationStartDate,
                            "YYYY-MM-DD"
                        );
                    }

                    if (success.assetPurchaseDate) {
                        success.assetPurchaseDate = this.utilityService.getFormatDate(
                            success.assetPurchaseDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.depreciationStartDate) {
                        success.depreciationStartDate = this.utilityService.getFormatDate(
                            success.depreciationStartDate,
                            "YYYY-MM-DD"
                        );
                    }
                    // if (success.warrantyExpiryDate) {
                    //     success.warrantyExpiryDate = this.utilityService.getFormatDate(
                    //         success.warrantyExpiryDate,
                    //         "YYYY-MM-DD"
                    //     );
                    // }
                    // if (success.installationDate) {
                    //     success.installationDate = this.utilityService.getFormatDate(
                    //         success.installationDate,
                    //         "YYYY-MM-DD"
                    //     );
                    // }
                    this.form.patchValue(success);
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }

    setDepreciationStartDate() {
        let assetPurchaseDate = this.f["assetPurchaseDate"].value;
        let futureDays = this.utilityService.setFutureDateInDays(assetPurchaseDate, 15);
        this.f["depreciationStartDate"].setValue(futureDays);
    }
    setAssetClassDetails(ev: any) {
        // this.depreciation = ev?.depreciation;
        // this.energySpecification = ev?.energySpecification;
        this.form.controls["assetType"].setValue(ev?.assetClassName);
        if (this.action == "create" && ev.assetClassName) {
            this.form.controls["assetCode"].setValue(this.autoIncValues[ev.assetClassName]);
        }
    }

    openInfoModal() {
        const modalRef = this.modalService.open(AssetCostingModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        // modalRef.componentInstance.depreciationCondition = this.depreciation;
        // modalRef.componentInstance.energySpecification = this.energySpecification;
        // modalRef.componentInstance.depreciationMethodArr = this.masterData?.depreciationMethodOptions;
        modalRef.componentInstance.assetConfiguration = this.masterData?.assetConfigurationOptions;
        modalRef.componentInstance.assetPurchaseCost = this.form.controls["assetPurchaseCost"].value;
        modalRef.componentInstance.costingInput = this.form.controls["costingInput"].value;
        modalRef.componentInstance.totalAssetCostPerHr = this.form.controls["totalAssetCostPerHr"].value;
        modalRef.componentInstance.totalAssetCostPerShift = this.form.controls["totalAssetCostPerShift"].value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["costingInput"].patchValue(success);
                    this.form.controls["totalAssetCostPerHr"].setValue(success?.totalAssetCostPerHr);
                    this.form.controls["totalAssetCostPerShift"].setValue(success?.totalAssetCostPerShift);
                }
            },
            (reason: any) => {}
        );
    }
}
