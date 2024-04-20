import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaintenanceChecklistService} from "@services/maintenance";
import {CHECKLIST_FORM_ERRORS} from "@mocks/validations/maintenance";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {AddChecklistInstructionComponent} from "../add-checklist-instruction/add-checklist-instruction.component";
import {IChecklistMasterData} from "@mocks/models/maintenance/masters";

@Component({
    selector: "app-maintenance-checklist-form",
    templateUrl: "./maintenance-checklist-form.component.html"
})
export class MaintenanceChecklistFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    addChecklist: any = [];
    masterData: IChecklistMasterData = {
        autoIncrementNo: "",
        checklistCategoryOptions: []
    };
    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private maintenanceChecklistService: MaintenanceChecklistService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        checklistCode: new UntypedFormControl(null, [Validators.required]),
        checklistName: new UntypedFormControl(null, [Validators.required]),
        checklistDescription: new UntypedFormControl(null, [Validators.required]),
        checklistCategory: new UntypedFormControl(null, [Validators.required]),
        checklistNotes: new UntypedFormControl(null),
        checklistInstructions: new UntypedFormControl(null),
        status: new UntypedFormControl("Active", [Validators.required]),
        checklistInstruction: new UntypedFormControl([])
    });

    get addChecklistInst() {
        return this.form.get("addChecklistInstruction") as UntypedFormGroup;
    }

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, CHECKLIST_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;

        formData.checklistInstruction = this.addChecklist;

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.maintenanceChecklistService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.maintenanceChecklistService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.maintenanceChecklistService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["checklistCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.maintenanceChecklistService.getById(params["id"]);
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

                    this.addChecklist = success?.checklistInstruction;

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    openChecklistInstructionModal() {
        const modalRef = this.modalService.open(AddChecklistInstructionComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.addChecklist = this.addChecklist;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.addChecklist = success;
                }
            },
            (reason: any) => {}
        );
    }
}
