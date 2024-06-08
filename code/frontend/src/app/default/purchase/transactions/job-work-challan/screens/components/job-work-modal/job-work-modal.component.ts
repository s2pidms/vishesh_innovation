import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomSearchDetailsModalComponent} from "@shared/modals";
import TABLE_HEADERS_FOR_JOB_WORKER from "./tableHeadersJobCardItem";
import TABLE_HEADERS_FOR_SAC from "./tableHeadersSAC";
import {JOB_CHALLAN_JOB_WORK_DETAILS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-job-work-modal",
    templateUrl: "./job-work-modal.component.html",
    styleUrls: ["./job-work-modal.component.scss"]
})
export class JobWorkModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() jobWorkDetails: any = {};
    @Input() JWItemsOptions: any = [];
    @Input() SACOptions: any = [];
    selectedDetailsOfJobCardItem: any = {};
    selectedDetailsOfSAC: any = {};
    tableHeadForJobCard = TABLE_HEADERS_FOR_JOB_WORKER;
    tableHeadForSac = TABLE_HEADERS_FOR_SAC;
    form: any = new UntypedFormGroup({
        jobWorkItem: new UntypedFormControl(null, [Validators.required]),
        jobWorkItemCode: new UntypedFormControl(null),
        jobWorkItemName: new UntypedFormControl(null, [Validators.required]),
        jobWorkItemDescription: new UntypedFormControl(null, [Validators.required]),
        SAC: new UntypedFormControl(null, [Validators.required]),
        SACCode: new UntypedFormControl(null),
        gst: new UntypedFormControl(null),
        igst: new UntypedFormControl(null),
        cgst: new UntypedFormControl(null),
        sgst: new UntypedFormControl(null),
        ugst: new UntypedFormControl(null),
        descriptionOfService: new UntypedFormControl(null, [Validators.required]),
        partNo: new UntypedFormControl(null),
        partName: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private modalService: NgbModal,
        private validationService: ValidationService
    ) {}

    ngOnInit(): void {
        console.log("JWItemsOptions", this.JWItemsOptions);
        console.log("SACOptions", this.SACOptions);

        this.form.patchValue(this.jobWorkDetails);
        if (["approve", "reject", "view", "generate", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }
    dismissModel() {
        if (this.validationService.checkErrors(this.form, JOB_CHALLAN_JOB_WORK_DETAILS_FORM_ERRORS)) {
            return;
        }
        this.activeModal.close(this.form.value);
    }

    setPartDetails(event: any) {
        console.log("event", event);
        this.f["partNo"].setValue(event?.partNo);
        this.f["partName"].setValue(event?.partName);
        this.f["jobWorkItemCode"].setValue(event?.jobWorkItemCode);
        this.f["jobWorkItemDescription"].setValue(event?.jobWorkItemDescription);
        this.f["jobWorkItemName"].setValue(event?.jobWorkItemName);
    }
    setSACDetails(event: any) {
        console.log("event", event);

        this.f["descriptionOfService"].setValue(event?.descriptionOfService);
        this.f["SACCode"].setValue(event?.SACCode);
        this.f["gst"].setValue(event?.gst);
        this.f["igst"].setValue(event?.igst);
        this.f["cgst"].setValue(event?.cgst);
        this.f["sgst"].setValue(event?.sgst);
        this.f["ugst"].setValue(event?.ugst);
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
            modalRef.componentInstance.title = "Job Work Item Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetailsOfJobCardItem;
            modalRef.componentInstance.tableHead = this.tableHeadForJobCard;
            modalRef.componentInstance.bodyList = this.JWItemsOptions;
            modalRef.componentInstance._id = this.form.controls["jobWorkItem"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        console.log("this.selectedDetails", this.selectedDetailsOfJobCardItem);

                        this.selectedDetailsOfJobCardItem = success?.selectedDetails;
                        this.form.controls["jobWorkItem"].setValue(success?.selectedDetails?._id);
                        this.setPartDetails(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openSACDetailsModal() {
        if (this.action == "create") {
            const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.title = "SAC Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetailsOfSAC;
            modalRef.componentInstance.tableHead = this.tableHeadForSac;
            modalRef.componentInstance.bodyList = this.SACOptions;
            modalRef.componentInstance._id = this.form.controls["SAC"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        console.log("this.selectedDetails", this.selectedDetailsOfSAC);

                        this.selectedDetailsOfSAC = success?.selectedDetails;
                        this.form.controls["SAC"].setValue(success?.selectedDetails?.SAC);
                        this.setSACDetails(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
}
