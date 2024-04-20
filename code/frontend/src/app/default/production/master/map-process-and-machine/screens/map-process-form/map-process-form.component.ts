import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {MapProcessMachineService} from "@services/production";
import {MAP_PROCESS_FORM_ERRORS} from "@mocks/validations/production/mapProcess.validation";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {IMapProcessAndMachineMasterData} from "@mocks/models/production/masters";

@Component({
    selector: "app-map-process-form",
    templateUrl: "./map-process-form.component.html"
})
export class MapProcessFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    submitted = false;
    action: string = "create";
    btnDisable = false;
    machineDetailsArr: any = [];
    masterData: IMapProcessAndMachineMasterData = {
        autoIncrementNo: "",
        processOptions: [],
        machineOptions: []
    };
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        mapCode: new UntypedFormControl(null),
        process: new UntypedFormControl(null),
        processCode: new UntypedFormControl(null, [Validators.required]),
        processName: new UntypedFormControl(null),
        status: new UntypedFormControl("Active"),
        machineDetails: new UntypedFormGroup({
            index: new UntypedFormControl(-1),
            machine: new UntypedFormControl(null),
            machineCode: new UntypedFormControl(null),
            machineName: new UntypedFormControl(null),
            machineDescription: new UntypedFormControl(null),
            machineType: new UntypedFormControl(null)
        })
    });
    get machineDetailsData() {
        return this.form.get("machineDetails") as UntypedFormGroup;
    }
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private mapProcessMachineService: MapProcessMachineService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    get f() {
        return this.form.controls;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.flag = -1;
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
    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, MAP_PROCESS_FORM_ERRORS)) {
            return;
        }
        if (this.machineDetailsArr.length == 0) {
            this.toastService.warning("at least one row is required !");
            return;
        }
        let formData: any = this.form.value;
        formData.machineDetails = this.machineDetailsArr;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    patchItem(formData: any, index: number, action: string) {
        formData.index = index;
        this.machineDetailsData.patchValue(formData);
        if (action == "view") {
            this.btnDisable = true;
            this.machineDetailsData.disable();
        } else {
            this.machineDetailsData.enable();
            this.btnDisable = false;
        }
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.machineDetailsArr.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.machineDetailsArr.length;
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.mapProcessMachineService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/production/master/map_process_and_machine/list"]);
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.mapProcessMachineService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/production/master/map_process_and_machine/list"]);
        });
    }
    reset() {
        this.form.reset();
        this.machineDetailsArr = [];
        this.collection = this.machineDetailsArr.length;
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.mapProcessMachineService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["mapCode"].setValue(result.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.mapProcessMachineService.getById(params["id"]);
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
                    if (success.machineDetails) {
                        this.machineDetailsArr = success.machineDetails;
                    }
                    this.collection = this.machineDetailsArr.length;
                    this.form.patchValue(success);
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }

    setProcessId(event: any) {
        if (event._id) {
            this.form.controls["process"].setValue(event._id);
        }

        if (event.processCode) {
            this.form.controls["processCode"].setValue(event.processCode);
        }
        if (event.processName) {
            this.form.controls["processName"].setValue(event.processName);
        }
    }
    setMachineId(event: any) {
        this.machineDetailsData.controls["machine"].setValue(event?._id);
        this.machineDetailsData.controls["machineCode"].setValue(event?.assetCode);
        this.machineDetailsData.controls["machineName"].setValue(event?.assetName);
        this.machineDetailsData.controls["machineDescription"].setValue(event?.assetDescription);
        this.machineDetailsData.controls["machineType"].setValue(event?.assetType);
    }

    addMachineDetails() {
        let obj: any = this.machineDetailsData.value;
        if (!obj.machineCode) {
            this.toastService.warning("Machine Code is required !");
            return;
        }

        let formData = this.machineDetailsData.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.machineDetailsArr.splice(formData.index, 1, formData);
        } else {
            // create
            this.machineDetailsArr.push(formData);
        }
        this.collection = this.machineDetailsArr.length;
        this.machineDetailsData.reset();
        this.collection = this.machineDetailsArr.length;
    }

    deleteDetails(index: any) {
        this.machineDetailsArr.splice(index + (this.page - 1) * this.pageSize, 1);
        this.collection = this.machineDetailsArr.length;
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.machineDetailsArr = this.machineDetailsArr;
        } else {
            this.machineDetailsArr = [...this.machineDetailsArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
