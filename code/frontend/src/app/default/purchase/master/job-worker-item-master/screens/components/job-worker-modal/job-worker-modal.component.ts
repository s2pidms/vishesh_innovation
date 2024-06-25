import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {CustomSearchDetailsModalComponent} from "@shared/modals";
import TABLE_HEADERS from "./tableHeaders";
@Component({
    selector: "app-job-worker-modal",
    templateUrl: "./job-worker-modal.component.html"
})
export class JobWorkerModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() primaryUnit: string = "";
    @Input() secondaryUnit: string = "";
    @Input() unitConversionFlag: any = 0;
    @Input() primaryToSecondaryConversion: any = "";
    @Input() secondaryToPrimaryConversion: any = "";
    @Input() jobWorkerOptions: any = [];
    @Input() jobWorkerDetails: any = [];
    selectedSupplierDetails = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    conversionOfUnitsForPrimary: any = "";
    conversionOfUnitsForSecondary: any = "";
    selectedDetails: any = {};
    tableHead: any = TABLE_HEADERS;

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}
    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        jobWorker: new UntypedFormControl(null),
        jobWorkerName: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        partNo: new UntypedFormControl(null),
        partName: new UntypedFormControl(null),
        uom1: new UntypedFormControl(null),
        uom2: new UntypedFormControl(null),
        stdCostUom1: new UntypedFormControl(null),
        stdCostUom2: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.collection = this.jobWorkerDetails.length;

        if (!this.secondaryUnit || this.secondaryUnit == "-") {
            this.form.controls["uom2"].disable();
            this.form.controls["stdCostUom2"].disable();
        }

        if (this.primaryUnit) {
            this.form.controls["uom1"].setValue(this.primaryUnit);
        }
        if (this.secondaryUnit) {
            this.form.controls["uom2"].setValue(this.secondaryUnit);
        }
        if (this.primaryUnit || this.secondaryUnit) {
            this.conversionOfUnitsForPrimary = `${
                this.unitConversionFlag == 1 ? 1 : this.unitConversionFlag == 2 ? this.secondaryToPrimaryConversion : 1
            } ${this.primaryUnit} = ${
                this.unitConversionFlag == 1 ? this.primaryToSecondaryConversion : this.unitConversionFlag == 2 ? 1 : 1
            } ${this.secondaryUnit ?? this.primaryUnit}`;

            this.conversionOfUnitsForSecondary = `${
                this.unitConversionFlag == 1 ? this.primaryToSecondaryConversion : this.unitConversionFlag == 2 ? 1 : 1
            } ${this.secondaryUnit} = ${
                this.unitConversionFlag == 1 ? 1 : this.unitConversionFlag == 2 ? this.secondaryToPrimaryConversion : 1
            } ${this.primaryUnit}`;
        }

        // this.form.controls["uom1"].disable();
        // this.form.controls["uom2"].disable();
    }

    setUnit2PurchaseCost() {
        let stdCostUom1 = this.form.controls["stdCostUom1"].value;
        if (this.secondaryUnit && this.primaryUnit && this.unitConversionFlag == 1) {
            this.form.controls["stdCostUom2"].setValue(+(stdCostUom1 / this.primaryToSecondaryConversion).toFixed(2));
        }
        if (this.secondaryUnit && this.primaryUnit && this.unitConversionFlag == 2) {
            this.form.controls["stdCostUom2"].setValue(+(stdCostUom1 / this.secondaryToPrimaryConversion).toFixed(2));
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                // this.excelDownload(this.customerContactInfoArray);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    findFormErrors = [
        {
            message: "Job Worker Name",
            key: "jobWorker"
        }
    ];

    addJobWorker() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }
        // this.form.enable();
        let formData = this.form.value;
        if (!formData.jobWorkerName) {
            this.toastService.warning("Job Worker Name is required !");
            return;
        }
        if (!formData.uom1) {
            this.toastService.warning("Unit 1 is required !");
            return;
        }
        if (!formData.stdCostUom1) {
            this.toastService.warning("Process Cost is required !");
            // this.form.controls["uom1"].disable();
            // this.form.controls["uom2"].disable();
            return;
        }
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.jobWorkerDetails.splice(formData.index, 1, formData);
        } else {
            // create
            this.jobWorkerDetails.push(formData);
        }
        this.collection = this.jobWorkerDetails.length;
        this.form.reset();
        if (this.primaryUnit) {
            this.form.controls["uom1"].setValue(this.primaryUnit);
        }
        if (this.secondaryUnit) {
            this.form.controls["uom2"].setValue(this.secondaryUnit);
        }
        // this.form.controls["uom1"].disable();
        // this.form.controls["uom2"].disable();
    }

    patchItem(formData: any, index: number, action: string) {
        formData.index = index;
        this.form.patchValue(formData);
        if (action == "view") {
            this.btnDisable = true;
            this.form.disable();
        } else {
            this.form.enable();
            this.btnDisable = false;
            // this.form.controls["uom1"].disable();
            // this.form.controls["uom2"].disable();
        }
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.jobWorkerDetails.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.jobWorkerDetails.length;
        }
    }

    setJobWorkerCurrency(ev: any) {
        if (ev.currency) {
            this.form.controls["currency"].setValue(ev?.currency);
        }
        if (ev.label) {
            this.form.controls["jobWorkerName"].setValue(ev?.label);
        }
    }

    dismissModal() {
        this.form.enable();
        this.activeModal.close(this.jobWorkerDetails);
    }

    openJobWorkDetailsModal() {
        if (this.action == "create") {
            const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.title = "Job Work Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetails;
            modalRef.componentInstance.tableHead = this.tableHead;
            modalRef.componentInstance.bodyList = this.jobWorkerOptions;
            modalRef.componentInstance._id = this.form.controls["jobWorker"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetails = success?.selectedDetails;
                        this.form.controls["jobWorker"].setValue(success?.selectedDetails?._id);
                        this.setJobWorkerCurrency(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
}
