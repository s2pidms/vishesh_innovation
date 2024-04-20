import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-drn-so-terms",
    templateUrl: "./drn-so-terms.component.html",
    styleUrls: ["./drn-so-terms.component.scss"]
})
export class DrnSoTermsComponent implements OnInit {
    @Input() action: any = "";
    @Input() POTerms: any = {};
    @Input() SOTermsArr: any = {};
    @Input() SOTermsData: any = {};
    @Output() saveData = new EventEmitter<any>();
    @Input() otherCharges: any = {};
    clickCount = 1;
    form: any = new UntypedFormGroup({
        paymentTerms: new UntypedFormControl(null),
        frightTerms: new UntypedFormControl("FOR - Free On Road"),
        transporter: new UntypedFormControl({value: null, disabled: true}, [Validators.required]),
        destination: new UntypedFormControl({value: null, disabled: true}, [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.form.patchValue(this.SOTermsData);
        if (["approve", "reject", "view", "generate", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }
    dismissModel() {
        this.form.enable();
        let obj = this.form.value;
        obj.otherCharges = this.otherCharges;
        this.saveData.emit({data: obj, key: "SOTerms"});
        this.toastService.success("SO Terms Saved");
    }
    enableTransporterName() {
        if (["create", "edit"].includes(this.action)) {
            this.form.controls["transporter"].enable();
        }
    }
    enableDestination() {
        if (["create", "edit"].includes(this.action)) {
            this.form.controls["destination"].enable();
        }
    }
}
