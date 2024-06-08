import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {mergeMap, of} from "rxjs";
import {ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {PROCESS_NAME_MASTER_FORM_ERRORS} from "@mocks/validations/settings";
import {ProcessNameMasterService} from "@services/settings";
import {SpinnerService} from "@core/services";
import {IProcessNameMasterData} from "@mocks/models/settings/masters";
import {DefineSubProcessesModalComponent} from "../define-sub-processes-modal/define-sub-processes-modal.component";

@Component({
    selector: "app-process-name-form",
    templateUrl: "./process-name-form.component.html"
})
export class ProcessNameFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IProcessNameMasterData = {
        autoIncrementNo: ""
    };
    defineSubProcessesList: any = [];

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        processCode: new UntypedFormControl(null, [Validators.required]),
        processName: new UntypedFormControl(null, [Validators.required]),
        order: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl("Active", [Validators.required]),
        defineSubProcesses: new UntypedFormControl([])
    });

    constructor(
        private processNameMasterService: ProcessNameMasterService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, PROCESS_NAME_MASTER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (formData.revision) {
            formData.revision = [formData.revision];
        }
        formData.defineSubProcesses = this.defineSubProcessesList;

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.processNameMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.processNameMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.processNameMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["processCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.processNameMasterService.getById(params["id"]);
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

                    if (success.defineSubProcesses) {
                        this.defineSubProcessesList = success.defineSubProcesses;
                    }

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    openSubProcessesModal() {
        const modalRef = this.modalService.open(DefineSubProcessesModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.defineSubProcessesList = this.defineSubProcessesList;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.defineSubProcessesList = success;
                }
            },
            (reason: any) => {}
        );
    }
}
