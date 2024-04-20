import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {DetailsOfSupplierListComponent} from "../details-of-supplier-list/details-of-supplier-list.component";
import {DetailsOfChannelPartnerComponent} from "../details-of-channel-partner/details-of-channel-partner.component";
import {INDENT_CATEGORY} from "@mocks/constant";
import {PurchaseIndentService} from "@services/purchase/purchaseIndent.service";

@Component({
    selector: "app-add-item-channel-partner",
    templateUrl: "./add-item-channel-partner.component.html"
})
export class AddItemChannelPartnerComponent implements OnInit {
    @Input() action: any = "";
    @Input() primaryUnit: string = "";
    @Input() secondaryUnit: string = "";
    @Input() unitConversionFlag: any = 0;
    @Input() primaryToSecondaryConversion: any = "";
    @Input() secondaryToPrimaryConversion: any = "";
    @Input() channelPartnerOptions: any = [];
    @Input() channelDetails: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    conversionOfUnitsForPrimary: any = "";
    conversionOfUnitsForSecondary: any = "";
    selectedChannelPartnerDetails = {};
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}
    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        channelName: new UntypedFormControl(null),
        channelCurrency: new UntypedFormControl(null),
        channelId: new UntypedFormControl(null, [Validators.required]),
        spin: new UntypedFormControl(null),
        uom1: new UntypedFormControl(null),
        stdCostUom1: new UntypedFormControl(null),
        uom2: new UntypedFormControl(null),
        stdCostUom2: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.collection = this.channelDetails.length;
        console.log("this.secondaryUnit", this.secondaryUnit);

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

    findFormErrors = [
        {
            message: "Channel Name",
            key: "channelId"
        }
    ];

    addChannelPartner() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }
        let formData = this.form.value;
        if (!formData.uom1) {
            this.toastService.warning("Unit 1 is required !");
            return;
        }
        if (!formData.stdCostUom1) {
            this.toastService.warning("Purchase Cost is required !");
            return;
        }
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.channelDetails.splice(formData.index, 1, formData);
        } else {
            // create
            this.channelDetails.push(formData);
        }
        this.collection = this.channelDetails.length;
        this.form.reset();
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
            this.channelDetails.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.channelDetails.length;
        }
    }

    setChannelCurrency(ev: any) {
        if (ev.currency) {
            this.form.controls["channelCurrency"].setValue(ev?.currency);
        }
        if (ev.label) {
            this.form.controls["channelName"].setValue(ev?.label);
        }
    }

    openChannelPartnerDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfChannelPartnerComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action == "edit" ? "create" : this.action;
        modalRef.componentInstance.selectedChannelPartnerDetails = this.selectedChannelPartnerDetails;
        modalRef.componentInstance.channelPartnerOptions = this.channelPartnerOptions;
        modalRef.componentInstance.channelPartner = this.form.controls["channelId"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedChannelPartnerDetails = success?.selectedChannelPartnerDetails;
                    this.form.controls["channelId"].setValue(success?.selectedChannelPartnerDetails?._id);
                    this.setChannelCurrency(this.selectedChannelPartnerDetails);
                }
            },
            (reason: any) => {}
        );
    }
    dismissModal() {
        this.form.enable();
        this.activeModal.close(this.channelDetails);
    }
}
