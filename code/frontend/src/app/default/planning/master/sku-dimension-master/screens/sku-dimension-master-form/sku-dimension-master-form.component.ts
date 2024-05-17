import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SpinnerService, ToastService} from "@core/services";
import {SKU_MASTER_DIMENSIONS_UNITS} from "@mocks/constant";
import {mergeMap, of} from "rxjs";
import {SKUService} from "@services/sales";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: "app-sku-dimension-master-form",
    templateUrl: "./sku-dimension-master-form.component.html",
    styleUrls: ["./sku-dimension-master-form.component.scss"]
})
export class SkuDimensionMasterFormComponent implements OnInit {
    @Input() action: any = "";
    @Input() dimensionsDetails: any = {};
    @Output() saveData = new EventEmitter<any>();
    actualUnits: any = "";
    layoutUnits: any = "";
    _id: any = "";
    DimensionsUnitsObj = SKU_MASTER_DIMENSIONS_UNITS;
    DimensionsUnits: any = this.DimensionsUnitsObj.getAllSKUMasterDimensionsUnit();
    form: any = new UntypedFormGroup({
        actualDimensions: new UntypedFormGroup({
            unit: new UntypedFormControl("mm"),
            width: new UntypedFormControl(null),
            length: new UntypedFormControl(null),
            ups: new UntypedFormControl(1),
            area: new UntypedFormControl(null),
            mSqArea: new UntypedFormControl(null)
        }),
        layoutDimensions: new UntypedFormGroup({
            unit: new UntypedFormControl("mm"),
            width: new UntypedFormControl(null),
            length: new UntypedFormControl(null),
            ups: new UntypedFormControl(null),
            area: new UntypedFormControl(null),
            mSqArea: new UntypedFormControl(null),
            wastePercentage: new UntypedFormControl(null)
        })
    });

    get f() {
        return this.form.controls;
    }
    get actualDimensionsData() {
        return this.form.get("actualDimensions") as UntypedFormGroup;
    }
    get layoutDimensionsData() {
        return this.form.get("layoutDimensions") as UntypedFormGroup;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private skuService: SKUService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        // this.form.patchValue(this.dimensionsDetails);
        this.actualUnits = this.actualDimensionsData.controls["unit"].value;
        this.layoutUnits = this.layoutDimensionsData.controls["unit"].value;

        // if (this.action == "view" || this.action == "Converted to SKU") {
        //     this.form.disable();
        // }
        this.actualDimensionsData.controls["ups"].disable();
    }

    getInitialData() {
        this.spinner.show();
        // this.skuService.getAllMasterData({}).subscribe(result => {

        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    // this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.skuService.getByIdForSKUDimAttributes(params["id"]);
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

                // if (success.PFDetails) {
                //     success.PFDetails = success.PFDetails;
                //     let specificationListData = this.masterData?.processMasterList;
                //     this.masterData.processMasterList = success.PFDetails;
                //     for (const ele of success.PFDetails) {
                //         specificationListData = specificationListData.filter(
                //             (x: any) => x.processId != ele.processId
                //         );
                //         this.ESCPreviewArr = [...success.PFDetails, ...specificationListData];
                //     }
                //     // this.masterData.processMasterList = success.PFDetails;
                //     this.collection = this.masterData?.processMasterList.length;
                // }
                this.form.patchValue(success?.dimensionsDetails);
                this._id = success?._id;
                if (this.action == "view") {
                    // this.isESCPreview = true;
                    // this.isConditionPreview = true;
                    // this.isPreview = true;
                    this.form.disable();
                }
            });
        // });
    }

    setActualUnits(event: any) {
        this.actualUnits = event.target.value;
        this.actualDimensionsData.controls["width"].setValue(null);
        this.actualDimensionsData.controls["length"].setValue(null);
        this.setActualArea();
    }
    setLayoutUnits(event: any) {
        this.layoutUnits = event.target.value;
        this.layoutDimensionsData.controls["width"].setValue(null);
        this.layoutDimensionsData.controls["length"].setValue(null);
        this.layoutDimensionsData.controls["ups"].setValue(null);
        this.setLayoutArea();
    }
    setActualArea() {
        let width = this.actualDimensionsData.controls["width"].value;
        let length = this.actualDimensionsData.controls["length"].value;
        let ups = this.actualDimensionsData.controls["ups"].value;
        let areaCal = +((+width * +length) / ups).toFixed(2);
        this.actualDimensionsData.controls["area"].setValue(areaCal);

        if (this.actualUnits == this.DimensionsUnitsObj.mm) {
            let mSqAreaCal = +(+areaCal / 1000000).toFixed(4);
            this.actualDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
        }
        if (this.actualUnits == this.DimensionsUnitsObj.cm) {
            let mSqAreaCal = +(+areaCal / 10000).toFixed(4);
            this.actualDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
        }
        if (this.actualUnits == this.DimensionsUnitsObj.inch) {
            let mSqAreaCal = +(+areaCal / 1550).toFixed(4);
            this.actualDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
        }
        if (this.actualUnits == this.DimensionsUnitsObj.ft) {
            let mSqAreaCal = +(+areaCal / 10.764).toFixed(4);
            this.actualDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
        }
        if (this.actualUnits == this.DimensionsUnitsObj.m) {
            this.actualDimensionsData.controls["mSqArea"].setValue(areaCal);
        }
        this.setLayoutArea();
    }
    setLayoutArea() {
        let width = this.layoutDimensionsData.controls["width"].value;
        let length = this.layoutDimensionsData.controls["length"].value;
        let ups = this.layoutDimensionsData.controls["ups"].value;
        let actualMSqArea = this.actualDimensionsData.controls["mSqArea"].value;
        let areaCal = +((+width * +length) / ups).toFixed(2);
        this.layoutDimensionsData.controls["area"].setValue(areaCal);

        if (this.layoutUnits == this.DimensionsUnitsObj.mm) {
            let mSqAreaCal = +(+areaCal / 1000000).toFixed(4);
            this.layoutDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
            let wastePercentageCal = +(((mSqAreaCal - actualMSqArea) / mSqAreaCal) * 100).toFixed(2);
            this.layoutDimensionsData.controls["wastePercentage"].setValue(wastePercentageCal);
        }
        if (this.layoutUnits == this.DimensionsUnitsObj.cm) {
            let mSqAreaCal = +(+areaCal / 10000).toFixed(4);
            this.layoutDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
            let wastePercentageCal = +(((mSqAreaCal - actualMSqArea) / mSqAreaCal) * 100).toFixed(2);
            this.layoutDimensionsData.controls["wastePercentage"].setValue(wastePercentageCal);
        }
        if (this.layoutUnits == this.DimensionsUnitsObj.inch) {
            let mSqAreaCal = +(+areaCal / 1550).toFixed(4);
            this.layoutDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
            let wastePercentageCal = +(((mSqAreaCal - actualMSqArea) / mSqAreaCal) * 100).toFixed(2);
            this.layoutDimensionsData.controls["wastePercentage"].setValue(wastePercentageCal);
        }
        if (this.layoutUnits == this.DimensionsUnitsObj.ft) {
            let mSqAreaCal = +(+areaCal / 10.764).toFixed(4);
            this.layoutDimensionsData.controls["mSqArea"].setValue(mSqAreaCal);
            let wastePercentageCal = +(((mSqAreaCal - actualMSqArea) / mSqAreaCal) * 100).toFixed(2);
            this.layoutDimensionsData.controls["wastePercentage"].setValue(wastePercentageCal);
        }
        if (this.layoutUnits == this.DimensionsUnitsObj.m) {
            this.layoutDimensionsData.controls["mSqArea"].setValue(areaCal);
            let mSqAreaCal = this.layoutDimensionsData.controls["mSqArea"].value;
            let wastePercentageCal = +(((areaCal - actualMSqArea) / areaCal) * 100).toFixed(2);
            this.layoutDimensionsData.controls["wastePercentage"].setValue(wastePercentageCal);
        }
    }
    reset() {
        this.form.reset();
        this.actualDimensionsData.controls["ups"].setValue(1);
        this.actualDimensionsData.controls["unit"].setValue("mm");
        this.layoutDimensionsData.controls["unit"].setValue("mm");
        this.actualUnits = this.actualDimensionsData.controls["unit"].value;
        this.layoutUnits = this.layoutDimensionsData.controls["unit"].value;

        this.getInitialData();
        // this.actualUnits = this.actualDimensionsData.controls["unit"].value;
        // this.layoutUnits = this.layoutDimensionsData.controls["unit"].value;
    }

    dismissModel() {
        let AD = this.actualDimensionsData.value;
        let LD = this.layoutDimensionsData.value;
        if (!AD.width) {
            this.toastService.warning("Actual Dimensions Width is required !");
            return;
        }
        if (!AD.length) {
            this.toastService.warning("Actual Dimensions Length is required !");
            return;
        }
        if (!LD.width) {
            this.toastService.warning("Layout Dimensions Width is required !");
            return;
        }
        if (!LD.length) {
            this.toastService.warning("Layout Dimensions Length is required !");
            return;
        }
        if (!LD.ups) {
            this.toastService.warning("Layout Dimensions Ups is required !");
            return;
        }
        this.saveData.emit({data: this.form.value, key: "dimensionsDetails"});
        this.toastService.success("Dimensions Saved");
    }

    submit() {
        let AD = this.actualDimensionsData.value;
        let LD = this.layoutDimensionsData.value;
        if (!AD.width) {
            this.toastService.warning("Actual Dimensions Width is required !");
            return;
        }
        if (!AD.length) {
            this.toastService.warning("Actual Dimensions Length is required !");
            return;
        }
        if (!LD.width) {
            this.toastService.warning("Layout Dimensions Width is required !");
            return;
        }
        if (!LD.length) {
            this.toastService.warning("Layout Dimensions Length is required !");
            return;
        }
        if (!LD.ups) {
            this.toastService.warning("Layout Dimensions Ups is required !");
            return;
        }

        this.form.enable();

        // if (this.masterData.processMasterList.length == 0) {
        //     this.toastService.warning("At least one row is Required");
        //     return;
        // }

        let formData: any = {dimensionsDetails: this.form.value};

        if (LD.area) {
            formData.SKUDimStatus = "Active";
        }

        let SKUformData = new FormData();
        SKUformData.append("key", "Sku");

        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    SKUformData.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    SKUformData.append(key, formData[key]);
                }
            }
        }

        console.log("formData", formData);

        this.update(this._id, SKUformData);
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.skuService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
}
