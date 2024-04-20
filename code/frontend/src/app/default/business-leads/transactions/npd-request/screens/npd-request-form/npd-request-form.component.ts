import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {SpinnerService, StorageService, ToastService, UtilityService} from "@core/services";
import {NPD_REQUEST_FORM_ERRORS} from "@mocks/validations/business-leads";
import {VariantsModalComponent} from "../variants-modal/variants-modal.component";
import {UploadDocsModalComponent} from "../upload-docs-modal/upload-docs-modal.component";
import {OffTakeQtyModalComponent} from "../off-take-qty-modal/off-take-qty-modal.component";
import {NPDRequestService} from "@services/business-leads";
import {CustomerInputChecklistComponent} from "../customer-input-checklist/customer-input-checklist.component";
import {INPDRequestMasterData} from "@mocks/models/business-leads/transactions";
import {ProductCategoryModalComponent} from "src/app/default/sales/master/sku/screens/product-category-modal/product-category-modal.component";
import {DetailsOfCustomersListComponent} from "@shared/modals";

@Component({
    selector: "app-npd-request-form",
    templateUrl: "./npd-request-form.component.html"
})
export class NpdRequestFormComponent implements OnInit {
    @Input() NPDId: string = "";

    tableData: any;
    active: number = 1;
    action: string = "create";
    submitted = false;
    variantsInfo: any = [];
    user: any = {};
    engineeringDrawing: any = null;
    productSpecification: any = null;
    designMockUpFile: any = null;
    artworkForProcessingFile: any = null;
    masterData: INPDRequestMasterData = {
        autoIncrementNo: "",
        customers: [],
        productCategory: [],
        buildStage: [],
        orderType: [],
        developmentCharges: [],
        checklistParticularsList: []
    };
    selectedCustomerDetails = {};
    constructor(
        private npdRequestService: NPDRequestService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private validationService: ValidationService,
        private storageService: StorageService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        NPDNo: new UntypedFormControl(""),
        NPDDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        name: new UntypedFormControl(""),
        reference: new UntypedFormControl(""),
        referenceModel: new UntypedFormControl("", [Validators.required]),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        projectName: new UntypedFormControl(null, [Validators.required]),
        productBrief: new UntypedFormControl("", [Validators.required]),
        buildStage: new UntypedFormControl(null, [Validators.required]),
        orderType: new UntypedFormControl(null, [Validators.required]),
        developmentCharges: new UntypedFormControl(null, [Validators.required]),
        requestedQty: new UntypedFormControl("", [Validators.required]),
        expectedDeliveryDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        validationRequired: new UntypedFormControl(null, [Validators.required]),
        NPDRequestedBy: new UntypedFormControl("", [Validators.required]),
        noOfVariants: new UntypedFormControl(1),
        monthlyOffTakeQty: new UntypedFormControl(null),
        annualOffTakeQty: new UntypedFormControl(null),
        expProductionStartDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        remarks: new UntypedFormControl(null),
        customerInputsChecklist: new UntypedFormControl([]),
        variantsInfo: new UntypedFormControl([]),
        engineeringDrawing: new UntypedFormControl(null),
        engineeringDrawingUrl: new UntypedFormControl(null),
        productSpecification: new UntypedFormControl(null),
        productSpecificationUrl: new UntypedFormControl(null),
        designMockUpFile: new UntypedFormControl(null),
        designMockUpFileUrl: new UntypedFormControl(null),
        artworkForProcessingFile: new UntypedFormControl(null),
        artworkForProcessingFileUrl: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Review", [Validators.required])
    });

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    statesOfIndia = STATES_LIST;

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser");
        this.form.controls["NPDRequestedBy"].setValue(this.user.name);
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, NPD_REQUEST_FORM_ERRORS)) {
            return;
        }

        if (this.action == "edit" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Remarks is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.customerInputsChecklist = this.masterData?.checklistParticularsList;
        formData.variantsInfo = this.variantsInfo;
        delete formData.engineeringDrawing;
        delete formData.productSpecification;
        delete formData.designMockUpFile;
        delete formData.artworkForProcessingFile;

        let formValue = new FormData();
        formValue.append("key", "NPDRequest");
        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];

            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    formValue.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    formValue.append(key, formData[key]);
                }
            }
        }
        if (this.engineeringDrawing) {
            if (typeof this.engineeringDrawing == "object") {
                formValue.append("engineeringDrawing", this.engineeringDrawing, this.engineeringDrawing.name);
            }
        }
        if (this.productSpecification) {
            if (typeof this.productSpecification == "object") {
                formValue.append("productSpecification", this.productSpecification, this.productSpecification.name);
            }
        }
        if (this.designMockUpFile) {
            if (typeof this.designMockUpFile == "object") {
                formValue.append("designMockUpFile", this.designMockUpFile, this.designMockUpFile.name);
            }
        }
        if (this.artworkForProcessingFile) {
            if (typeof this.artworkForProcessingFile == "object") {
                formValue.append(
                    "artworkForProcessingFile",
                    this.artworkForProcessingFile,
                    this.artworkForProcessingFile.name
                );
            }
        }

        if (formData._id) {
            this.update(formData._id, formValue);
        } else {
            delete formData._id;
            this.create(formValue);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.npdRequestService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.npdRequestService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.npdRequestService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["NPDNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["noOfVariants"].setValue(1);
            this.initialVariantsInfoData();
            if (this.NPDId) {
                this.action = "view";
                this.npdRequestService.getById(this.NPDId).subscribe((success: any) => {
                    this.spinner.hide();
                    if (Object.keys(success).length == 0) {
                        return;
                    }
                    this.masterData.checklistParticularsList = success.customerInputsChecklist.map((ele: any) => {
                        return {
                            inputCheckListParticular: ele.inputCheckListParticular._id,
                            name: ele.inputCheckListParticular.name,
                            order: ele.inputCheckListParticular.order,
                            isChecked: ele.isChecked
                        };
                    });
                    if (success.NPDDate) {
                        success.NPDDate = this.utilityService.getFormatDate(success.NPDDate, "YYYY-MM-DD");
                    }
                    if (success.expectedDeliveryDate) {
                        success.expectedDeliveryDate = this.utilityService.getFormatDate(
                            success.expectedDeliveryDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.expProductionStartDate) {
                        success.expProductionStartDate = this.utilityService.getFormatDate(
                            success.expProductionStartDate,
                            "YYYY-MM-DD"
                        );
                    }
                    this.form.patchValue(success);
                    if (this.action == "edit") {
                        this.form.enable();
                        this.form.controls["NPDDate"].disable();
                        this.form.controls["reference"].disable();
                    }

                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
            } else {
                this.activatedRoute.queryParams
                    .pipe(
                        mergeMap((params: any) => {
                            this.action = params.action;
                            this.utilityService.accessDenied(this.action);
                            if (params["id"]) {
                                return this.npdRequestService.getById(params["id"]);
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

                        if (success.variantsInfo) {
                            this.variantsInfo = success.variantsInfo;
                        }
                        this.masterData.checklistParticularsList = success.customerInputsChecklist.map((ele: any) => {
                            return {
                                inputCheckListParticular: ele.inputCheckListParticular._id,
                                name: ele.inputCheckListParticular.name,
                                order: ele.inputCheckListParticular.order,
                                isChecked: ele.isChecked
                            };
                        });
                        if (success.NPDDate) {
                            success.NPDDate = this.utilityService.getFormatDate(success.NPDDate, "YYYY-MM-DD");
                        }
                        if (success.expectedDeliveryDate) {
                            success.expectedDeliveryDate = this.utilityService.getFormatDate(
                                success.expectedDeliveryDate,
                                "YYYY-MM-DD"
                            );
                        }
                        if (success.expProductionStartDate) {
                            success.expProductionStartDate = this.utilityService.getFormatDate(
                                success.expProductionStartDate,
                                "YYYY-MM-DD"
                            );
                        }
                        this.form.patchValue(success);
                        if (this.action == "edit") {
                            this.form.enable();
                            this.form.controls["NPDDate"].disable();
                            this.form.controls["reference"].disable();
                        }

                        if (this.action == "view") {
                            this.form.disable();
                        }
                    });
            }
        });
    }

    openCustomerInputChecklist() {
        const modalRef = this.modalService.open(CustomerInputChecklistComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.checklistParticulars = this.masterData?.checklistParticularsList;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.masterData.checklistParticularsList = success;
                }
            },
            (reason: any) => {}
        );
    }

    initialVariantsInfoData() {
        if (this.variantsInfo.length == 0) {
            this.variantsInfo.push({
                variant: this.variantsInfo.length + 1,
                variantName: "",
                partNo: "",
                drawingNo: ""
            });
        }
    }

    openVariantsModal() {
        const modalRef = this.modalService.open(VariantsModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.noOfVariants = this.form.controls["noOfVariants"].value;
        modalRef.componentInstance.variantsInfo = this.variantsInfo;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["noOfVariants"].setValue(success?.noOfVariants);
                    this.variantsInfo = success?.variantsInfo;
                }
            },
            (reason: any) => {}
        );
    }
    openOffTakeQtyModal() {
        const modalRef = this.modalService.open(OffTakeQtyModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.monthlyOffTakeQty = this.form.controls["monthlyOffTakeQty"].value;
        modalRef.componentInstance.annualOffTakeQty = this.form.controls["annualOffTakeQty"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["monthlyOffTakeQty"].setValue(success.monthlyOffTakeQty);
                    this.form.controls["annualOffTakeQty"].setValue(success.annualOffTakeQty);
                }
            },
            (reason: any) => {}
        );
    }

    setReference(ev: any) {
        this.form.controls["name"].setValue(ev.name);
        this.form.controls["referenceModel"].setValue(ev.type);
    }
    setMonthlyOffTake(ev: any) {
        if (ev.target.value == "One time project") {
            this.form.controls["monthlyOffTakeQty"].setValue(null);
            this.form.controls["monthlyOffTakeQty"].disable();
            this.form.get("monthlyOffTakeQty").clearValidators();
            this.form.get("monthlyOffTakeQty").updateValueAndValidity();
        } else {
            this.form.controls["monthlyOffTakeQty"].enable();
            this.form.controls["monthlyOffTakeQty"].setValidators([Validators.required]);
        }
    }

    openUploadDocsModal() {
        const modalRef = this.modalService.open(UploadDocsModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.NPDUploadDocs = {
            engineeringDrawing: this.form.controls["engineeringDrawing"].value,
            engineeringDrawingUrl: this.form.controls["engineeringDrawingUrl"].value,
            productSpecification: this.form.controls["productSpecification"].value,
            productSpecificationUrl: this.form.controls["productSpecificationUrl"].value,
            designMockUpFile: this.form.controls["designMockUpFile"].value,
            designMockUpFileUrl: this.form.controls["designMockUpFileUrl"].value,
            artworkForProcessingFile: this.form.controls["artworkForProcessingFile"].value,
            artworkForProcessingFileUrl: this.form.controls["artworkForProcessingFileUrl"].value
        };

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                    this.engineeringDrawing = success.engineeringDrawing;
                    this.productSpecification = success.productSpecification;
                    this.designMockUpFile = success.designMockUpFile;
                    this.artworkForProcessingFile = success.artworkForProcessingFile;
                }
            },
            (reason: any) => {}
        );
    }
    openProductCategoryModal() {
        const modalRef = this.modalService.open(ProductCategoryModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.productCategoryList = this.masterData?.productCategory;
        modalRef.componentInstance.productCategory = this.form.controls["productCategory"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["productCategory"].setValue(success?.selectedProductCategory);
                }
            },
            (reason: any) => {}
        );
    }

    goBack() {
        this.location.back();
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
        modalRef.componentInstance.customerOptions = this.masterData.customers;
        modalRef.componentInstance.customer = this.form.controls["reference"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["reference"].setValue(success?.selectedCustomerDetails?._id);
                    this.setReference(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
