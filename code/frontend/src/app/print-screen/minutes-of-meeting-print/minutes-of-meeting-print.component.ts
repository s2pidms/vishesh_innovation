import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SpinnerService} from "@core/services";

import {MinutesOfMeetingService} from "@services/supports";
import {mergeMap, of} from "rxjs";

@Component({
    selector: "app-minutes-of-meeting-print",
    templateUrl: "./minutes-of-meeting-print.component.html",
    styleUrls: ["./minutes-of-meeting-print.component.scss"]
})
export class MinutesOfMeetingPrintComponent implements OnInit {
    action: string = "create";
    pdfAction: any = "";
    buttonCondition: any = "true";
    MoMPrintDetailsArray: any = [];

    constructor(
        private minutesOfMeetingService: MinutesOfMeetingService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    // set action
                    this.action = params.action;
                    this.pdfAction = params.action;
                    this.buttonCondition = params.buttonCondition;
                    if (params["id"]) {
                        // get patch data
                        return this.minutesOfMeetingService.getById(params["id"]);
                    } else {
                        return of({});
                    }
                })
            )
            .subscribe((success: any) => {
                this.spinner.hide();
                this.MoMPrintDetailsArray = success;
                if (Object.keys(success).length == 0) {
                    return;
                }
                // patch all forms fields
            });
        //set menu header values
    }
    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    windowPrint() {
        window.print();
    }
}
