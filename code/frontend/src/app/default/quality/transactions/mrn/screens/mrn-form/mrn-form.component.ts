import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialReleaseNoteService} from "@services/quality";
import {MRNDetails} from "@interfaces/MRNDetails";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {MrnGrnRemarksComponent, MrnQclModalComponent} from "../components";
import {MRN_MFG_DATE_PERCENTAGE_SHELF_LIFE} from "@mocks/constant";
import {MRNMasterData} from "@mocks/models/quality/transactions";
import {CancelPoComponent} from "@shared/modals";
@Component({
    selector: "app-mrn-form",
    templateUrl: "./mrn-form.component.html",
    styleUrls: ["./mrn-form.component.scss"]
})
export class MRNFormComponent implements OnInit {
    submitted = false;
    btnFlag = false;
    action: string = "create";
    MRNDetailsArray: MRNDetails[] = [];

    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    GRNListArr: any = [];
    GRNFilter: any = [];
    supplierInvoice: any = [];
    items: any = [];
    filterItems: any = [];
    statusArr: any = {
        create: "Created",
        edit: "Partially Released",
        partialRelease: "Partially Released",
        generate: "Report Generated",
        release: "Released",
        rejected: "Closed"
    };
    rejectFlag: boolean = false;
    releasedFlag: boolean = false;
    partialRFlag: boolean = false;
    masterData: MRNMasterData = {
        autoIncrementNo: "",
        locationOptions: [],
        suppliersOptions: [],
        grnList: [],
        QCLevelsOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        MRNNumber: new UntypedFormControl(null, [Validators.required]),
        MRNDate: new UntypedFormControl(null, [Validators.required]),
        GRNNumber: new UntypedFormControl(null),
        supplier: new UntypedFormControl(null),
        supplierInvoice: new UntypedFormControl(null),
        supplierDate: new UntypedFormControl(null, [Validators.required]),
        MRNStatus: new UntypedFormControl("Partially Released", [Validators.required]),
        MRNDetails: new UntypedFormControl([]),
        deliveryLocation: new UntypedFormControl(null),
        GRNRemarks: new UntypedFormControl(null),
        MRNRemarks: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private router: Router,
        private materialReleaseNoteService: MaterialReleaseNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    openCancelModal(status: string) {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "MRN";
        modalRef.componentInstance.cancelText =
            "Do you want to proceed further without filling Material Inspection Observations?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit(status);
                }
            },
            (reason: any) => {}
        );
    }

    L3Condition(status: string) {
        if (this.MRNDetailsArray.some((x: any) => x.QCLevels == "L3" && x.QCLevelsDetails.length == 0)) {
            this.openCancelModal(status);
        } else {
            this.submit(status);
        }
    }

    submit(status: string) {
        this.submitted = true;
        this.form.controls["MRNStatus"].setValue(status);
        this.form.value.MRNDetails = this.MRNDetailsArray;
        this.form.value.balanceRejectedQty = this.form.value.rejectedQty;

        if (this.form.invalid) {
            this.toastService.warning("Please fill all required field !");
            return;
        }

        this.form.enable();
        let formData: any = this.form.value;
        formData.MRNDetails = this.MRNDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.materialReleaseNoteService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/quality/transactions/mrn/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.materialReleaseNoteService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/quality/transactions/mrn/list"]);
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.materialReleaseNoteService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["MRNNumber"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["MRNDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.GRNListArr = result.grnList;
            this.form.controls["supplier"].disable();

            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.materialReleaseNoteService.getById(params["id"]);
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
                    this.MRNDetailsArray = success.MRNDetails.map((ele: any, idx: number) => {
                        return {
                            MRNLineNumber: ele?.MRNLineNumber,
                            item: ele.item._id,
                            GRNLineNumber: ele.GRNLineNumber,
                            POLineNumber: ele.POLineNumber,
                            itemCode: ele.item.itemCode,
                            itemName: ele.item.itemName,
                            itemDescription: ele.item.itemDescription,
                            status: ele.status,
                            deviationApprovedBy: ele.deviationApprovedBy,
                            QCLevels: ele.QCLevels,
                            QCLevelsDetails: ele.QCLevelsDetails,
                            conversionOfUnits: ele.item.conversionOfUnits,
                            primaryUnit: ele.primaryUnit,
                            secondaryUnit: ele.secondaryUnit,
                            primaryToSecondaryConversion: ele?.primaryToSecondaryConversion,
                            secondaryToPrimaryConversion: ele?.secondaryToPrimaryConversion,
                            batchNo: ele.batchNo,
                            shelfLife: ele.item.shelfLife,
                            batchDate: this.utilityService.getFormatDate(ele.batchDate, "YYYY-MM-DD"),
                            UOM: ele.UOM,
                            GRNQty: ele.GRNQty ?? 0,
                            balancedQty: ele.balancedQty,
                            standardRate: ele.standardRate,
                            purchaseRate: ele.purchaseRate,
                            rejectedQty: ele.rejectedQty,
                            releasedQty: ele.releasedQty
                        };
                    });
                    this.rejectFlag = success.MRNDetails.some((x: any) => x.rejectedQty != x.GRNQty);
                    this.releasedFlag = success.MRNDetails.some((x: any) => x.releasedQty != x.GRNQty);
                    this.partialRFlag = this.releasedFlag && this.rejectFlag ? true : false;
                    this.collection = this.MRNDetailsArray.length;
                    if (success.GRNNumber) {
                        this.GRNListArr = [success.GRNNumber];
                    }
                    if (success.supplier) {
                        this.masterData.suppliersOptions = [success.supplier];
                    }
                    success.supplier = success?.supplier?._id;

                    success.GRNNumber = success.GRNNumber._id;
                    if (success.supplierDate) {
                        success.supplierDate = this.utilityService.getFormatDate(success.supplierDate, "YYYY-MM-DD");
                    }
                    if (success.MRNDate) {
                        success.MRNDate = this.utilityService.getFormatDate(success.MRNDate, "YYYY-MM-DD");
                    }
                    success.MRNStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    this.form.controls["supplier"].disable();
                    // disable form if action is not 'Edit'
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
    getTooltipOfQCLevels(QCLevels: any) {
        return this.masterData.QCLevelsOptions.filter((x: any) => x.parameterName == QCLevels) || [];
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

    getGrn(event: any) {
        let grn = this.GRNListArr.find((x: any) => x._id == this.f["GRNNumber"].value);
        this.form.controls["supplier"].setValue(grn.supplier);
        this.form.controls["supplierInvoice"].setValue(grn.supplierInvoiceRef);
        this.form.controls["GRNRemarks"].setValue(grn.remarks);
        this.form.controls["deliveryLocation"].setValue(grn.deliveryLocation);
        this.form.controls["supplierDate"].setValue(
            this.utilityService.getFormatDate(grn.supplierInvoiceRefDate, "YYYY-MM-DD")
        );

        this.MRNDetailsArray = grn.GRNDetails.map((ele: any, idx: number) => {
            return {
                MRNLineNumber: idx + 1,
                item: ele.item._id,
                GRNLineNumber: ele.GRNLineNumber,
                POLineNumber: ele.POLineNumber,
                itemCode: ele.item.itemCode,
                itemName: ele.item.itemName,
                itemType: ele.item.itemType,
                shelfLife: ele.item.shelfLife,
                QCLevels: ele.item.QCLevels,
                QCLevelsDetails: [],
                itemDescription: ele.item.itemDescription,
                conversionOfUnits: ele.item.conversionOfUnits,
                primaryUnit: ele?.primaryUnit,
                secondaryUnit: ele?.secondaryUnit,
                primaryToSecondaryConversion: ele?.primaryToSecondaryConversion,
                secondaryToPrimaryConversion: ele?.secondaryToPrimaryConversion,
                batchNo: null,
                batchDate: this.utilityService.getFormatDate(ele.batchDate, "YYYY-MM-DD"),
                UOM: ele.UOM,
                GRNQty: ele.GRNQty ?? 0,
                balancedQty: ele.balancedQty,
                standardRate: ele.standardRate,
                purchaseRate: ele.purchaseRate,
                rejectedQty: ele.rejectedQty,
                releasedQty: ele.releasedQty
            };
        });
        this.collection = this.MRNDetailsArray.length;
    }

    changeREJQty(MRNLineNumber: any, ele: any) {
        let index: number = this.MRNDetailsArray.map((x: any) => x.MRNLineNumber).indexOf(MRNLineNumber);
        if (ele.rejectedQty > ele.GRNQty) {
            this.MRNDetailsArray[index].rejectedQty = 0;
        }
        this.MRNDetailsArray[index].releasedQty = ele.GRNQty - ele.rejectedQty;
        this.rejectFlag = this.MRNDetailsArray.some(x => x.rejectedQty != x.GRNQty);
        this.releasedFlag = this.MRNDetailsArray.some(x => x.releasedQty != x.GRNQty);
        this.partialRFlag = this.releasedFlag && this.rejectFlag ? true : false;
    }

    changeRelQty(MRNLineNumber: any, ele: any) {
        let index: number = this.MRNDetailsArray.map((x: any) => x.MRNLineNumber).indexOf(MRNLineNumber);
        if (ele.releasedQty > ele.GRNQty) {
            this.MRNDetailsArray[index].releasedQty = 0;
        }
        this.MRNDetailsArray[index].rejectedQty = ele.GRNQty - ele.releasedQty;
        this.rejectFlag = this.MRNDetailsArray.some(x => x.rejectedQty != x.GRNQty);
        this.releasedFlag = this.MRNDetailsArray.some(x => x.releasedQty != x.GRNQty);
        this.partialRFlag = this.releasedFlag && this.rejectFlag ? true : false;

        if (ele.shelfLife && ele.batchDate) {
            let expiryDate = this.utilityService.getAddFormat(ele.batchDate, ele.shelfLife);
            let MRNDate = this.f["MRNDate"].value;
            let MRNDateDiff = this.utilityService.getDiffDate(expiryDate, MRNDate, "days");
            let months = MRNDateDiff / 30;
            let percentageShelfLife = ele.shelfLife * MRN_MFG_DATE_PERCENTAGE_SHELF_LIFE;

            if (months < percentageShelfLife) {
                this.toastService.warning("Balance life of Material is only 85% of its Shelf life");
            }
        }
    }
    relQtyChange(eve: any, MRNLineNumber: number) {
        let index: number = this.MRNDetailsArray.map((x: any) => x.MRNLineNumber).indexOf(MRNLineNumber);
        this.MRNDetailsArray[index].releasedQty = Math.abs(eve);
    }
    rejQtyChange(eve: any, MRNLineNumber: number) {
        let index: number = this.MRNDetailsArray.map((x: any) => x.MRNLineNumber).indexOf(MRNLineNumber);
        this.MRNDetailsArray[index].rejectedQty = Math.abs(eve);
    }
    openMRNAndGRMRemarksModal() {
        const modalRef = this.modalService.open(MrnGrnRemarksComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.GRNRemarks = this.form.controls["GRNRemarks"].value;
        modalRef.componentInstance.MRNRemarks = this.form.controls["MRNRemarks"].value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["GRNRemarks"].setValue(success?.GRNRemarks);
                    this.form.controls["MRNRemarks"].setValue(success?.MRNRemarks);
                }
            },
            (reason: any) => {}
        );
    }
    openQCLModal(item: any) {
        let index: number = this.MRNDetailsArray.map((x: any) => x.MRNLineNumber).indexOf(item.MRNLineNumber);

        const modalRef = this.modalService.open(MrnQclModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.data = item;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.MRNDetailsArray[index].QCLevelsDetails = success.MRNMaterialInspectionArr;
                }
            },
            (reason: any) => {}
        );
    }
}
