import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ItemCategoryService} from "@services/purchase";
import {SUB_DEPARTMENT_MASTER_FORM_ERRORS} from "@mocks/validations/settings/departmentMaster.validation";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-add-sub-dept",
    templateUrl: "./add-sub-dept.component.html"
})
export class AddSubDeptComponent implements OnInit {
    @Input() action: string = "";
    @Input() subDepartments: any = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private itemCategoryService: ItemCategoryService
    ) {}

    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        subDepartmentName: new UntypedFormControl("", [Validators.required]),
        contactPersonName: new UntypedFormControl("", [Validators.required]),
        status: new UntypedFormControl("Active", [Validators.required])
    });

    ngOnInit(): void {
        this.collection = this.subDepartments.length;
        if (this.action == "view") {
            this.form.disable();
        }
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

    save() {
        if (this.validationService.checkErrors(this.form, SUB_DEPARTMENT_MASTER_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.subDepartments.splice(formData.index + (this.page - 1) * this.pageSize, 1, formData);
        } else {
            // create
            this.subDepartments.push(formData);
        }
        this.collection = this.subDepartments.length;
        this.form.reset();
        this.form.controls["status"].setValue("Active");
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
            this.subDepartments.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.subDepartments.length;
        }
    }
}
