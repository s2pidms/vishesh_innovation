import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GTRequestService} from "@services/production";
import {GRDetails} from "@interfaces/GRDetails";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService, SpinnerService, StorageService, UtilityService, ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {PopUpNotesComponent} from "@modals/index";
import {GOODS_REQUISITION_FORM_REPORT_DATA} from "@mocks/export-data/production/transactions";
import {IGTRequestMasterData} from "@mocks/models/production/transactions";
import {GTRequestRemarksModalComponent} from "../gt-request-remarks-modal/gt-request-remarks-modal.component";
import {GT_REQUEST_FORM_ERRORS} from "@mocks/validations/production/GTRequest.validation";

@Component({
    selector: "app-gt-request-form",
    templateUrl: "./gt-request-form.component.html"
})
export class GTRequestFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    submitted = false;
    action: string = "create";
    GTRequestDetailsArray: any = [];
    itemCodes: any = [];
    ESCPreviewArr: any = [];
    userData: any = {};
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected"
    };
    masterData: IGTRequestMasterData = {
        autoIncrementNo: "",
        departmentOptions: [],
        locationOptions: []
    };

    constructor(
        private gtRequestService: GTRequestService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private exportExcelService: ExportExcelService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        GTRequestNo: new UntypedFormControl(null),
        GTRequestDate: new UntypedFormControl(null),
        location: new UntypedFormControl(null, [Validators.required]),
        fromDepartment: new UntypedFormControl(null, [Validators.required]),
        toDepartment: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl("Awaiting Approval"),
        remarks: new UntypedFormGroup({
            reasonForGTRequest: new UntypedFormControl(null),
            jobCardReference: new UntypedFormControl(null),
            requestedBy: new UntypedFormControl(null)
        }),
        GTRequestDetails: new UntypedFormControl([]),
        rejectRemarks: new UntypedFormControl(null)
    });
    get f() {
        return this.form.controls;
    }
    get remarks() {
        return this.form.get("remarks") as UntypedFormGroup;
    }
    ngOnInit(): void {
        this.userData = this.storageService.get("IDMSAUser");
        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.form.reset();
        this.GTRequestDetailsArray = [];
        this.collection = this.GTRequestDetailsArray.length;
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, GT_REQUEST_FORM_ERRORS)) {
            this.form.controls["toDepartment"].disable();
            return;
        }
        if (this.action == "reject" && !this.form.controls["rejectRemarks"].value) {
            this.toastService.warning("Rejection Remarks is Required");
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;

        if (this.GTRequestDetailsArray?.length == 0) {
            this.toastService.warning(`At least one Goods Transfer Request (Intra) Item required!`);
            return;
        }
        formData.GTRequestDetails = this.GTRequestDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id, action}});
    }

    create(formData: any) {
        this.spinner.show();
        this.gtRequestService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.itemCodes = success.itemCodes;
            this.location.back();
            this.openAlertMessageModal();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.gtRequestService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                break;
            case "EXCEL":
                this.exportExcelService.exportExcel(GOODS_REQUISITION_FORM_REPORT_DATA(this.GTRequestDetailsArray));
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    setGRQty(item: any) {
        if (item.GTRequestQty > item.IRQty) {
            this.toastService.warning("GTR Qty. Should not be greater than IR Qty. !");
            return;
        }
    }
    getInitialData() {
        this.spinner.show();
        this.gtRequestService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;

            if (this.masterData?.locationOptions?.length == 1) {
                this.form.controls["location"].setValue(this.masterData?.locationOptions[0]?.label);
            }

            this.form.controls["GTRequestNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["GTRequestDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue("Awaiting Approval");

            // let toDepartment = this.masterData?.departmentOptions?.find(
            //     (x: any) => x.label == this.userData?.departmentName
            // )?.label;
            // if (toDepartment) {
            //     this.form.controls["toDepartment"].setValue(toDepartment);
            //     this.form.controls["toDepartment"].disable();
            // } else {
            //     this.form.controls["toDepartment"].setValue(null);
            //     this.form.controls["toDepartment"].disable();
            //     this.toastService.warning("You are not authorized to goods transfer request");
            // }

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.gtRequestService.getById(params["id"]);
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

                    if (success.GTRequestDetails) {
                        this.GTRequestDetailsArray = success.GTRequestDetails;
                        this.collection = this.GTRequestDetailsArray.length;
                    }
                    if (success.GTRequestDate) {
                        success.GTRequestDate = success?.GTRequestDate.split("T")[0];
                    }
                    success.status = this.statusArr[this.action];

                    this.form.patchValue(success);

                    // disable form if action is not 'Edit'
                    if (this.action != "create") {
                        this.form.disable();
                        if (this.action == "reject") {
                            this.form.controls["rejectRemarks"].enable();
                        }
                    }
                });
            //set menu header values
        });
    }

    openAlertMessageModal() {
        if (this.itemCodes.length > 0) {
            const modalRef = this.modalService.open(PopUpNotesComponent, {
                centered: true,
                size: "md",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.alertMessage = `Dear GT Request Creator, it has been noticed that material you requested having Item Code No: ${this.itemCodes} are not presently available in store`;
            modalRef.componentInstance.itemCodes = this.itemCodes;
            modalRef.result.then(
                (success: any) => {
                    if (["create", "edit"].includes(this.action)) {
                        this.itemCodes = success;
                    }
                },
                (reason: any) => {}
            );
        }
    }

    setToDepartmentValid(event: any) {
        let fromDepartment = this.f["fromDepartment"].value;
        let toDepartment = this.f["toDepartment"].value;

        if (fromDepartment == toDepartment) {
            this.toastService.warning("From Department should not be same as To Department ");
            // this.f["fromDepartment"].setValue(null);
            this.GTRequestDetailsArray = [];
            this.collection = this.GTRequestDetailsArray?.length;
            return;
        }
        let payload = {
            department: fromDepartment,
            location: this.f["location"].value
        };
        this.spinner.show();
        this.gtRequestService.getAllItemsByLocationAndDept(payload).subscribe(success => {
            this.spinner.hide();
            this.GTRequestDetailsArray = success.map((x: any, index: any) => {
                x.GTRequestLineNumber = index + 1;
                return x;
            });
            this.collection = this.GTRequestDetailsArray?.length;
        });
    }

    preview() {
        this.search = "";
        this.isPreview = true;
        this.isESCPreview = true;
        this.ESCPreviewArr = this.GTRequestDetailsArray;
        this.GTRequestDetailsArray = this.GTRequestDetailsArray.filter((x: any) => x.GTRequestQty > 0);
        this.collection = this.GTRequestDetailsArray.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.GTRequestDetailsArray = this.ESCPreviewArr;
        this.collection = this.GTRequestDetailsArray.length;
    }

    setConversionOfUnit(item: any) {
        if (["create", "edit"].includes(this.action)) {
            let index = this.GTRequestDetailsArray.map((x: any) => x?.GTRequestLineNumber).indexOf(
                item?.GTRequestLineNumber
            );
            if (this.GTRequestDetailsArray[index].UOM == item.secondaryUnit) {
                this.GTRequestDetailsArray[index].UOM = item.primaryUnit;
            } else {
                this.GTRequestDetailsArray[index].UOM = item.secondaryUnit;
            }

            let IRQuantity =
                this.utilityService.setConversion({
                    UOM: this.GTRequestDetailsArray[index].UOM,
                    quantity: item.IRQty,
                    primaryUnit: item.primaryUnit,
                    secondaryUnit: item.secondaryUnit,
                    primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                    secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
                }) || 0;

            this.GTRequestDetailsArray[index].IRQty = IRQuantity;
            this.GTRequestDetailsArray[index].GTRequestQty = 0;
            this.isPreview = false;
        }
    }

    openRemarksModal() {
        const modalRef = this.modalService.open(GTRequestRemarksModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.remarksDetails = this.remarks.value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.remarks.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.GTRequestDetailsArray = this.GTRequestDetailsArray;
        } else {
            this.GTRequestDetailsArray = [...this.GTRequestDetailsArray].sort(
                (a: any | GRDetails, b: any | GRDetails) => {
                    let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                    let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                    const res = x < y ? -1 : x > y ? 1 : 0;
                    return direction === "asc" ? res : -res;
                }
            );
        }
    }
}
