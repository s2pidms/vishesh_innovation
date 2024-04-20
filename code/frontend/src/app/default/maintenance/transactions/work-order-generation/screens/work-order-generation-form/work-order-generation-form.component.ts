import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ViewChecklistInstructionComponent} from "src/app/default/maintenance/transactions/work-order-generation/screens/view-checklist-instruction/view-checklist-instruction.component";
import {GenerateWorkOrderService} from "@services/maintenance";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {IGenerateWorkOrderMasterData} from "@mocks/models/maintenance/transactions";

@Component({
    selector: "app-work-order-generation-form",
    templateUrl: "./work-order-generation-form.component.html"
})
export class WorkOrderGenerationFormComponent implements OnInit {
    maintenanceChecklist: any = [];
    masterData: IGenerateWorkOrderMasterData = {
        autoIncrementNo: "",
        priorityOptions: [],
        workOrderGenerateStatusOptions: [],
        scheduleCodeOptions: [],
        technicianCodeOptions: []
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private generateWorkOrderService: GenerateWorkOrderService,
        private modalService: NgbModal,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        workOrderCode: new UntypedFormControl(null),
        workOrderExecutionDate: new UntypedFormControl(null),
        description: new UntypedFormControl(null),
        schedule: new UntypedFormControl(null),
        equipmentName: new UntypedFormControl(null),
        equipment: new UntypedFormControl(null),
        technician: new UntypedFormControl(null),
        priority: new UntypedFormControl(null),
        startDate: new UntypedFormControl(null),
        endDate: new UntypedFormControl(null),
        materials: new UntypedFormControl(null),
        maintenanceCost: new UntypedFormControl(null),
        status: new UntypedFormControl("Open")
    });
    get f() {
        return this.form.controls;
    }

    findFormErrors = [
        {
            message: "SAC Id is Required",
            key: "sacId"
        },
        {
            message: "GST Rate is Required",
            key: "gst"
        },
        {
            message: "IGST Rate is Required",
            key: "igst"
        },
        {
            message: "SGST Rate is Required",
            key: "sgst"
        },
        {
            message: "CGST Rate  is Required",
            key: "cgst"
        }
    ];

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }

        this.form.enable();
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.generateWorkOrderService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/maintenance/transactions/work-order-generation/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.generateWorkOrderService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/maintenance/transactions/work-order-generation/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.generateWorkOrderService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["workOrderCode"].setValue(this.masterData?.autoIncrementNo);
            this.f["workOrderExecutionDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["startDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["endDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.generateWorkOrderService.getById(params["id"]);
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

                    if (success.workOrderExecutionDate) {
                        success.workOrderExecutionDate = this.utilityService.getFormatDate(
                            success.workOrderExecutionDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.startDate) {
                        success.startDate = this.utilityService.getFormatDate(success.startDate, "YYYY-MM-DD");
                    }
                    if (success.endDate) {
                        success.endDate = this.utilityService.getFormatDate(success.endDate, "YYYY-MM-DD");
                    }
                    this.form.patchValue(success);
                    this.getInstructions(success?.equipment);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setEquipmentName(ev: any) {
        this.f["equipmentName"].setValue(ev?.equipmentName);
        this.f["equipment"].setValue(ev?.equipment);
        this.getInstructions(ev?.equipment);
    }
    openChecklistInstructionModal() {
        const modalRef = this.modalService.open(ViewChecklistInstructionComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.checklistInstruction = this.maintenanceChecklist;
        modalRef.result.then(
            (success: any) => {},
            (reason: any) => {}
        );
    }
    getInstructions(equipment: any) {
        this.generateWorkOrderService.viewChecklistById(equipment).subscribe(success => {
            this.maintenanceChecklist = success?.rows;
        });
    }
}
