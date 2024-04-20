import {Component, OnInit, Input} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-add-company-template",
    templateUrl: "./add-company-template.component.html"
})
export class AddCompanyTemplateComponent implements OnInit {
    @Input() PODomesticOptions: any = [];
    @Input() POImportOptions: any = [];
    @Input() PIDomesticOptions: any = [];
    @Input() PIExportsOptions: any = [];
    @Input() TIDomesticOptions: any = [];
    @Input() TIExportsOptions: any = [];

    @Input() templatesDetails = {};
    form: any = new UntypedFormGroup({
        PODomesticTemplates: new UntypedFormControl(null),
        POImportsTemplates: new UntypedFormControl(null),
        PIDomesticTemplates: new UntypedFormControl(null),
        PIExportsTemplates: new UntypedFormControl(null),
        TIDomesticTemplates: new UntypedFormControl(null),
        TIExportsTemplates: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.templatesDetails);
    }

    dismissModel() {
        let obj = this.form.value;

        this.activeModal.close(obj);
    }
}
