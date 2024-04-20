import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PDIREntryService} from "@services/quality";
import {PDIR_ENTRY_FORM_ERRORS} from "@mocks/validations/quality";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {PDIR_ENTRY_TEMPLATE} from "@mocks/constant";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {PDIEntryComponent} from "../pdi-entry/pdi-entry.component";
import {IPDIREntryMasterData} from "@mocks/models/quality/transactions";
import {DetailsOfCustomersListComponent} from "@shared/modals";

@Component({
    selector: "app-pdir-entry-form",
    templateUrl: "./pdir-entry-form.component.html"
})
export class PdirEntryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    PDIRTemplateObj: any = PDIR_ENTRY_TEMPLATE;
    GRDetailsArray: any = [];
    collection: number = 0;
    invoiceNumberOptions: any = [];
    PDIRDetailsArr: any = [];
    page: number = 1;
    pageSize: number = 6;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    action: string = "create";
    active: number = 1;
    statusArr: any = {
        create: "Created",
        edit: "Created"
    };
    masterData: IPDIREntryMasterData = {
        customersOptions: []
    };
    selectedCustomerDetails = {};
    constructor(
        private router: Router,
        private pdirEntryService: PDIREntryService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        customerName: new UntypedFormControl(null),
        customer: new UntypedFormControl(null, [Validators.required]),
        salesInvoice: new UntypedFormControl(null, [Validators.required]),
        salesInvoiceDate: new UntypedFormControl(null, [Validators.required]),
        salesInvoiceNumber: new UntypedFormControl(null),
        preDispatchDate: new UntypedFormControl(null),
        preDispatchCode: new UntypedFormControl(null),
        preDispatchDetails: new UntypedFormControl([])
    });
    get f() {
        return this.form.controls;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, PDIR_ENTRY_FORM_ERRORS)) {
            return;
        }

        if (this.PDIRDetailsArr.length == 0) {
            this.toastService.warning("At Least one row is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.preDispatchDetails = this.PDIRDetailsArr;

        let PDIEntryDetails = formData.preDispatchDetails.some((x: any) => x.PDIEntryDetails.length > 0);
        if (!PDIEntryDetails) {
            this.toastService.warning("PDI Entry is required");
            return;
        }
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    update(formData: any) {
        this.spinner.show();
        this.pdirEntryService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/quality/transactions/pdir_entry/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.pdirEntryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/quality/transactions/pdir_entry/list"]);
        });
    }

    reset() {
        this.form.reset();
        this.PDIRDetailsArr = [];
        this.invoiceNumberOptions = [];
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.pdirEntryService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["salesInvoiceDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["preDispatchDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.pdirEntryService.getById(params["id"]);
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

                    success.salesInvoiceDate = success.salesInvoiceDate
                        ? this.utilityService.getFormatDate(success.salesInvoiceDate, "YYYY-MM-DD")
                        : "";
                    success.preDispatchDate = success.preDispatchDate
                        ? this.utilityService.getFormatDate(success.preDispatchDate, "YYYY-MM-DD")
                        : "";
                    this.PDIRDetailsArr = success.preDispatchDetails;
                    this.collection = this.PDIRDetailsArr.length;
                    this.PDIRDetailsArr = this.PDIRDetailsArr.map((x: any, idx: any) => {
                        x.PDILineNumber = idx + 1;
                        return x;
                    });

                    success.DRNStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (this.action != "create") {
                        this.form.disable();
                    }
                });
        });
    }
    backToList() {
        this.router.navigate(["/default/quality/transactions/pdir_entry/list"]);
    }
    invoiceValueChange(ele: any) {
        this.spinner.show();
        this.pdirEntryService.getPDIRDetailsBySalesInvoiceId(ele._id).subscribe((success: any) => {
            this.f["salesInvoice"].setValue(ele?._id);
            this.f["salesInvoiceDate"].setValue(success?.salesInvoiceDate);
            this.f["salesInvoiceNumber"].setValue(success?.salesInvoiceNumber);
            this.f["preDispatchCode"].setValue(success?.preDispatchCode);
            this.PDIRDetailsArr = success.salesInvoiceDetails;
            this.PDIRDetailsArr = this.PDIRDetailsArr.map((x: any, idx: any) => {
                x.PDILineNumber = idx + 1;
                x.batchDate = x.batchDate ? x.batchDate : x.tBatchNo;
                return x;
            });
            this.collection = this.PDIRDetailsArr.length;
            this.spinner.hide();
        });
    }

    getSalesInvoice(event: any) {
        this.PDIRDetailsArr = [];
        this.f["customerName"].setValue(event?.customerName);
        this.f["salesInvoice"].setValue(null);
        this.pdirEntryService.getAllSalesInvoiceForPDIREntry({customerId: event?._id}).subscribe((success: any) => {
            this.invoiceNumberOptions = success;
        });
    }
    openPDIEntryModal(item: any) {
        let index: number = this.PDIRDetailsArr.map((x: any) => x.PDILineNumber).indexOf(item.PDILineNumber);

        const modalRef = this.modalService.open(PDIEntryComponent, {
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
                    this.PDIRDetailsArr[index].PDIEntryDetails = success.GRDetailsArray;
                }
            },
            (reason: any) => {}
        );
    }

    openCustomersDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfCustomersListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedCustomerDetails = this.selectedCustomerDetails;
        modalRef.componentInstance.customerOptions = this.masterData.customersOptions;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.getSalesInvoice(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.PDIRDetailsArr = this.PDIRDetailsArr;
        } else {
            this.PDIRDetailsArr = [...this.PDIRDetailsArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
