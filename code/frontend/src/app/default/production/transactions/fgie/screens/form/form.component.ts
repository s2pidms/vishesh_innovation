import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FinishedGoodsInwardEntryService} from "@services/stores";
import {mergeMap, of} from "rxjs";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {Finished_Goods_Inward_ERRORS} from "@mocks/validations/production";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

export interface FGINDetails {
    _id: string;
    SKUId: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    FGINQty: number;
    manufacturingDate: Date;
    expiryDate: Date;
    batchNo: string;
    SKUTableName: string;
    SKUTableNum: string;
}
@Component({
    selector: "app-form",
    templateUrl: "./form.component.html"
})
export class FormComponent implements OnInit {
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private finishedGoodsInwardEntryServices: FinishedGoodsInwardEntryService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private router: Router
    ) {}
    action: string = "";
    submitted = false;
    allData = [];
    SKUOption: any = [];
    UOMOption: any = [];
    skuDetailsArray: any = [];
    selectedSKU: any = {};
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        FGINNo: new UntypedFormControl(null),
        FGINDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        SKUId: new UntypedFormControl(null, [Validators.required]),
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null, [Validators.required]),
        UOM: new UntypedFormControl(null, [Validators.required]),
        manufacturingDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        expiryDate: new UntypedFormControl(null),
        FGINQuantity: new UntypedFormControl(null, [Validators.required]),
        batchNo: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl("Created")
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getInitialData() {
        // get master data
        this.spinner.show();

        this.finishedGoodsInwardEntryServices.getAllMasterData({}).subscribe(success => {
            this.allData = success.SKUMasters;

            this.form.controls["status"].setValue("Created");

            // set  dropdowns array
            this.SKUOption = success.SKUMasters.map((x: any) => {
                return {
                    label: x.SKUName,
                    skuNum: x.SKUNo,
                    value: x._id,
                    skuDescription: x.SKUDescription,
                    uom: x.primaryUnit,
                    shelfLife: x.shelfLife
                };
            });

            // patch autoIncrementNo
            this.form.controls["FGINNo"].setValue(success.autoIncrementNo);
            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        if (params["id"]) {
                            // get patch data
                            return this.finishedGoodsInwardEntryServices.getById(params["id"]);
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
                    // patch all forms fields

                    this.form.patchValue(success);
                    // disable form if action is not 'Edit'
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, Finished_Goods_Inward_ERRORS)) {
            return;
        }
        let obj = this.form.value;
        this.create(obj);
    }
    create(formData: any) {
        this.spinner.show();

        this.finishedGoodsInwardEntryServices.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
        });
    }
    reset() {
        this.form.reset();
        this.skuDetailsArray = [];
        this.collection = this.skuDetailsArray.length;
        this.form.controls["FGINDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
        this.form.controls["manufacturingDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
        this.form.controls["status"].setValue("Created");
    }

    setExpiryDate() {
        let manufacturingDate = this.f["manufacturingDate"].value;
        let expiryDate = this.f["expiryDate"].value;

        if (manufacturingDate > expiryDate) {
            this.toastService.warning("ExpiryDate Should be Greater Than ManufacturingDate !");
            this.f["expiryDate"].reset();
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;

                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;

                break;
            default:
                break;
        }
    }

    setDetails(event: any) {
        this.selectedSKU = event;
        this.UOMOption = [
            {
                label: event?.uom,
                value: event?.uom
            }
        ];
        this.form.controls["UOM"].setValue(event?.uom);
        this.form.controls["SKUDescription"].setValue(event?.skuDescription);
        this.form.controls["SKUId"].setValue(event?.value);
        this.form.controls["SKUName"].setValue(event?.label);
        this.form.controls["SKUNo"].setValue(event?.skuNum);
        if (event.shelfLife) {
            this.form.controls["expiryDate"].setValue(
                this.utilityService.getAddFormat(this.form.value.manufacturingDate, event.shelfLife)
            );
        }
    }
    changeMFG() {
        if (this.selectedSKU.shelfLife) {
            this.form.controls["expiryDate"].setValue(
                this.utilityService.getAddFormat(this.form.value.manufacturingDate, this.selectedSKU.shelfLife)
            );
        }
    }
    addFGINInfo() {
        if (this.validationService.checkErrors(this.form, Finished_Goods_Inward_ERRORS)) {
            return;
        }
        let SKUNUM = this.SKUOption.find((x: any) => x.value == this.form.controls["SKUId"].value)?.skuNum ?? "";

        let SKUNAME = this.SKUOption.find((x: any) => x.value == this.form.controls["SKUId"].value)?.label ?? "";

        let obj = this.form.value;
        obj.SKUTableName = SKUNAME;
        obj.SKUTableNum = SKUNUM;
        delete obj.FGINDetails;
        this.skuDetailsArray.push(obj);
        this.collection = this.skuDetailsArray.length;
        this.form.reset();
    }
    deleteDetails(i: number) {
        this.skuDetailsArray.splice(i, 1);
    }
}
