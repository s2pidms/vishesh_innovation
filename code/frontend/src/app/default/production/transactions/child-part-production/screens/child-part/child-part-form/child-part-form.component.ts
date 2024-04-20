import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {CHILD_PART_PRODUCTION_FORM_ERRORS} from "@mocks/validations/production";
import {ChildPartService} from "@services/production";
import {mergeMap, of} from "rxjs";
import {IChildPartDetailsArray, IProductionOfChildPartMasterData} from "@mocks/models/production/transactions";

@Component({
    selector: "app-child-part-form",
    templateUrl: "./child-part-form.component.html",
})
export class ChildPartFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    submitted = false;
    action: string = "create";
    // IChildPartDetailsArray[]
    ESCPreviewArr: any = [];
    machineName: any = [];
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        cancel: "Cancelled"
    };
    masterData: IProductionOfChildPartMasterData = {
        autoIncrementNo: "",
        productionShiftOptions: [],
        mapProcessMachineListOptions: [],
        childItemListOptions: []
    };

    constructor(
        private childPartService: ChildPartService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        childPartCode: new UntypedFormControl(null),
        processName: new UntypedFormControl(null, [Validators.required]),
        process: new UntypedFormControl(null),
        processCode: new UntypedFormControl(null),
        machineName: new UntypedFormControl(null, [Validators.required]),
        machine: new UntypedFormControl(null),
        machineCode: new UntypedFormControl(null),
        productionDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        productionShift: new UntypedFormControl(null, [Validators.required]),
        operatingStaff: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Approval"),
        childPartProductionDetails: new UntypedFormControl([]),
        remarks: new UntypedFormControl(null),
        cancelRemarks: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.form.reset();
        this.machineName = [];
        this.masterData.childItemListOptions = [];
        this.collection = this.masterData?.childItemListOptions.length;
        this.isPreview = false;
        this.isESCPreview = false;
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        if (this.action == "cancel" && !this.form.controls["cancelRemarks"].value) {
            this.toastService.warning("Cancel Remarks is Required");
            return;
        }
        this.form.enable();
        if (this.validationService.checkErrors(this.form, CHILD_PART_PRODUCTION_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.childPartProductionDetails = this.masterData?.childItemListOptions;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path]);
    }

    create(formData: any) {
        this.spinner.show();
        this.childPartService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/production/transactions/child_part_production/child_part/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.childPartService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/production/transactions/child_part_production/child_part/list"]);
        });
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
    getInitialData() {
        this.spinner.show();
        this.childPartService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["childPartCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["productionDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue("Awaiting Approval");
            this.collection = this.masterData?.childItemListOptions.length;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.childPartService.getById(params["id"]);
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
                    this.masterData.childItemListOptions = success.childPartProductionDetails;

                    this.collection = this.masterData?.childItemListOptions.length;
                    if (success.productionDate) {
                        success.productionDate = this.utilityService.getFormatDate(
                            success?.productionDate,
                            "YYYY-MM-DD"
                        );
                    }

                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);

                    if (this.action != "create") {
                        this.form.disable();
                        if (this.action == "edit") {
                            this.form.controls["remarks"].enable();
                        }
                        if (this.action == "cancel") {
                            this.form.controls["cancelRemarks"].enable();
                        }
                    }
                });
        });
    }

    changeRejQty(ele: any, i: any) {
        let index = this.masterData?.childItemListOptions.map((x: any) => x.itemCode).indexOf(ele?.itemCode);
        if (ele.rejectedQty > ele.batchQty) {
            this.masterData.childItemListOptions[index].rejectedQty = 0;
        }
        this.masterData.childItemListOptions[index].outputQty = ele.batchQty - ele.rejectedQty;
    }

    changeOutPutQty(ele: any, i: any) {
        let index = this.masterData?.childItemListOptions.map((x: any) => x.itemCode).indexOf(ele?.itemCode);
        if (ele.outputQty > ele.batchQty) {
            this.masterData.childItemListOptions[index].outputQty = 0;
        }
        this.masterData.childItemListOptions[index].rejectedQty = ele.batchQty - ele.outputQty;
    }

    setRejQty(eve: any, ele: any) {
        let index = this.masterData?.childItemListOptions.map((x: any) => x.itemCode).indexOf(ele?.itemCode);
        this.masterData.childItemListOptions[index].rejectedQty = Math.abs(eve);
    }
    setOutPutQty(eve: any, ele: any) {
        let index = this.masterData?.childItemListOptions.map((x: any) => x.itemCode).indexOf(ele?.itemCode);
        this.masterData.childItemListOptions[index].outputQty = Math.abs(eve);
    }

    setMachineNames(ev: any) {
        this.machineName = [];
        this.form.controls["machineName"].setValue(null);
        this.form.controls["process"].setValue(ev?.process);
        this.form.controls["processCode"].setValue(ev?.processCode);
        this.machineName = ev?.machineDetails;
    }

    setMachineId(ev: any) {
        this.form.controls["machine"].setValue(ev?.machine);
        this.form.controls["machineCode"].setValue(ev?.machineCode);
    }

    preview() {
        this.search = "";
        this.ESCPreviewArr = this.masterData?.childItemListOptions;
        this.masterData.childItemListOptions = this.masterData?.childItemListOptions.filter((x: any) => x.batchQty > 0);
        if (this.masterData?.childItemListOptions.length > 0) {
            this.isPreview = true;
            this.isESCPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
            this.isESCPreview = true;
        }
        this.collection = this.masterData?.childItemListOptions.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.masterData.childItemListOptions = this.ESCPreviewArr;
        this.collection = this.masterData?.childItemListOptions.length;
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.masterData.childItemListOptions = this.masterData?.childItemListOptions;
        } else {
            this.masterData.childItemListOptions = [...this.masterData?.childItemListOptions].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
