import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {DetailsOfSupplierListComponent} from "@shared/modals";

@Component({
    selector: "app-child-item-supplier-modal",
    templateUrl: "./child-item-supplier-modal.component.html"
})
export class ChildItemSupplierModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() primaryUnit: string = "";
    @Input() secondaryUnit: string = "";
    @Input() unitConversionFlag: any = 0;
    @Input() primaryToSecondaryConversion: any = 0;
    @Input() secondaryToPrimaryConversion: any = 0;
    @Input() sourceOfManufacturing: string = "";
    @Input() suppliers: any = [];
    @Input() supplierDetails: any = [];
    conversionOfUnitsForPrimary: any = "";
    conversionOfUnitsForSecondary: any = "";
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    selectedSupplierDetails = {};
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}
    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        sourceOfManufacturing: new UntypedFormControl(null),
        supplier: new UntypedFormControl(null),
        supplierName: new UntypedFormControl(null, [Validators.required]),
        supplierPartNo: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        uom1: new UntypedFormControl(null),
        stdCostUom1: new UntypedFormControl(null),
        uom2: new UntypedFormControl(null),
        stdCostUom2: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.form.controls["sourceOfManufacturing"].setValue(this.sourceOfManufacturing);
        this.collection = this.supplierDetails.length;
        this.setSourceOfManufacturing();

        if (!this.secondaryUnit) {
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

    addSuppliers() {
        let formData = this.form.value;
        if (!formData.sourceOfManufacturing) {
            this.toastService.warning("Source of Manufacturing is required !");
            return;
        }
        if (!formData.supplier) {
            this.toastService.warning("Supplier Name is required !");
            return;
        }
        if (!formData.stdCostUom1) {
            this.toastService.warning("Purchase Cost is required !");
            return;
        }

        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.supplierDetails.splice(formData.index, 1, formData);
        } else {
            // create
            this.supplierDetails.push(formData);
        }
        this.collection = this.supplierDetails.length;
        this.form.controls["index"].setValue(null);
        this.form.controls["supplier"].setValue(null);
        this.form.controls["supplierName"].setValue(null);
        this.form.controls["supplierPartNo"].setValue(null);
        this.form.controls["currency"].setValue(null);
        this.form.controls["stdCostUom1"].setValue(null);
        this.form.controls["stdCostUom2"].setValue(null);
        if (this.primaryUnit) {
            this.form.controls["uom1"].setValue(this.primaryUnit);
        }
        if (this.secondaryUnit) {
            this.form.controls["uom2"].setValue(this.secondaryUnit);
        }
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
        }
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.supplierDetails.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.supplierDetails.length;
        }
    }

    setSupplierCurrency(ev: any) {
        if (ev.supplierCurrency) {
            this.form.controls["currency"].setValue(ev?.supplierCurrency);
        }
        if (ev.supplierName) {
            this.form.controls["supplierName"].setValue(ev?.supplierName);
        }
    }

    submit() {
        this.form.enable();
        let obj: any = {};
        obj.supplierDetails = this.supplierDetails;
        obj.sourceOfManufacturing = this.form.controls["sourceOfManufacturing"].value;
        this.activeModal.close(obj);
    }

    setSourceOfManufacturing() {
        let sourceOfManufacturing = this.form.controls["sourceOfManufacturing"].value;
        if (sourceOfManufacturing == "Inhouse") {
            this.form.controls["supplier"].setValue(null);
            this.form.controls["supplierPartNo"].setValue(null);
            this.form.controls["currency"].setValue(null);
            this.form.controls["stdCostUom1"].setValue(null);
            this.form.controls["stdCostUom2"].setValue(null);
            this.form.controls["supplier"].disable();
            this.form.controls["supplierPartNo"].disable();
            this.form.controls["currency"].disable();
            this.form.controls["stdCostUom1"].disable();
            this.form.controls["stdCostUom2"].disable();
            this.supplierDetails = [];
            this.btnDisable = true;
        } else {
            this.form.enable();
            this.btnDisable = false;
            if (!this.secondaryUnit) {
                this.form.controls["uom2"].disable();
                this.form.controls["stdCostUom2"].disable();
            }
        }
    }

    openSupplierDetailsModal() {
        let sourceOfManufacturing = this.form.controls["sourceOfManufacturing"].value;
        if (sourceOfManufacturing != "Inhouse") {
            const modalRef = this.modalService.open(DetailsOfSupplierListComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action == "edit" ? "create" : this.action;
            modalRef.componentInstance.selectedSupplierDetails = this.selectedSupplierDetails;
            modalRef.componentInstance.supplierOptions = this.suppliers;
            modalRef.componentInstance.supplier = this.form.controls["supplier"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        console.log("success", success);
                        this.selectedSupplierDetails = success?.selectedSupplierDetails;
                        this.form.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                        this.setSupplierCurrency(this.selectedSupplierDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
}
