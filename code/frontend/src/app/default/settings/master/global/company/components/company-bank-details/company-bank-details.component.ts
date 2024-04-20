import {Component, OnInit, Input} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-company-bank-details",
    templateUrl: "./company-bank-details.component.html"
})
export class CompanyBankDetailsComponent implements OnInit {
    @Input() bankDetails = {};
    form: any = new UntypedFormGroup({
        companyBefName: new UntypedFormControl(null),
        companyBankName: new UntypedFormControl(null),
        companyBankBranch: new UntypedFormControl(""),
        companyBankAddress: new UntypedFormControl(),
        companyAccountNumber: new UntypedFormControl(null),
        companyAccType: new UntypedFormControl(""),
        companyBankIFSCCode: new UntypedFormControl(""),
        companyBankMICRCode: new UntypedFormControl(""),
        exports: new UntypedFormControl("No"),
        swiftCode: new UntypedFormControl(""),
        intermediaryBank: new UntypedFormControl(""),
        intermediaryBankSwiftCode: new UntypedFormControl("")
    });

    exportsArr = [
        {label: "Yes", value: "Yes"},
        {label: "No", value: "No"}
    ];

    setExports() {
        if (this.form.controls["exports"].value == "No") {
            this.form.controls["swiftCode"].setValue(null);
            this.form.controls["intermediaryBank"].setValue(null);
            this.form.controls["intermediaryBankSwiftCode"].setValue(null);
            this.form.controls["swiftCode"].disable();
            this.form.controls["intermediaryBank"].disable();
            this.form.controls["intermediaryBankSwiftCode"].disable();
        } else {
            this.form.controls["swiftCode"].enable();
            this.form.controls["intermediaryBank"].enable();
            this.form.controls["intermediaryBankSwiftCode"].enable();
        }
    }

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.bankDetails);
        if (this.form.controls["exports"].value == "No") {
            this.form.controls["swiftCode"].setValue(null);
            this.form.controls["intermediaryBank"].setValue(null);
            this.form.controls["intermediaryBankSwiftCode"].setValue(null);
            this.form.controls["swiftCode"].disable();
            this.form.controls["intermediaryBank"].disable();
            this.form.controls["intermediaryBankSwiftCode"].disable();
        } else {
            this.form.controls["swiftCode"].enable();
            this.form.controls["intermediaryBank"].enable();
            this.form.controls["intermediaryBankSwiftCode"].enable();
        }
    }

    dismissModel() {
        this.activeModal.close(this.form.value);
    }
}
