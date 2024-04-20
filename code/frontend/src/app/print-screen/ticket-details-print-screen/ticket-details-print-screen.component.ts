import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {SupportService} from "@services/supports";
import {Router, ActivatedRoute} from "@angular/router";

import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";

@Component({
    selector: "app-ticket-details-print-screen",
    templateUrl: "./ticket-details-print-screen.component.html",
    styleUrls: ["./ticket-details-print-screen.component.scss"]
})
export class TicketDetailsPrintScreenComponent implements OnInit {
    pdfAction: any = "";

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        issueNumber: new UntypedFormControl(""),
        issueTitle: new UntypedFormControl(""),
        subModuleName: new UntypedFormControl(""),
        issueDescription: new UntypedFormControl(""),
        issueResolution: new UntypedFormControl(""),
        issueAttachment: new UntypedFormControl(""),
        issueDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        ticketType: new UntypedFormControl(""),
        priority: new UntypedFormControl(""),
        severity: new UntypedFormControl(""),
        issueStatus: new UntypedFormControl(""),
        url: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private supportService: SupportService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    windowPrint() {
        window.print();
    }

    getInitialData() {
        this.spinner.show();

        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.pdfAction = params.action;

                    if (params["id"]) {
                        return this.supportService.getById(params["id"]);
                    } else {
                        return of({});
                    }
                })
            )
            .subscribe((success: any) => {
                if (Object.keys(success).length == 0) {
                    return;
                }

                if (success.issueDate) {
                    success.issueDate = success.issueDate.split("T")[0];
                }

                this.form.patchValue(success);
                this.form.disable();
            });
        this.menuTitleService.set({
            title: "Issue",
            subTitle: null,
            type: null
        });

        this.spinner.hide();
    }
}
