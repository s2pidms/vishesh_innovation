import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {SupportService} from "@services/supports";
import {Router, ActivatedRoute} from "@angular/router";

import {AppGlobalService, MenuTitleService, SpinnerService, StorageService, UtilityService} from "@core/services";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {SUPPORT_ISSUE_STATUS} from "@mocks/constant";
import {ViewTicketHistoryComponent} from "../components/view-ticket-history/view-ticket-history.component";
import {ViewResolutionCommentsComponent} from "../components/view-resolution-comments/view-resolution-comments.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-raise-ticket-form",
    templateUrl: "./raise-ticket-form.component.html"
})
export class RaiseTicketFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    issueAttachmentFile: any = null;
    subModuleNames: Array<any> = [];
    priority: any = [];
    severity: any = [];
    ticketType: any = [];
    moduleList: any = [];
    menuItems: any = [];
    issueStatus: any = SUPPORT_ISSUE_STATUS;
    subModuleList: any = [];
    historyData: any = [];
    userName: any = "";
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        issueNumber: new UntypedFormControl(null),
        issueTitle: new UntypedFormControl(null),
        subModuleName: new UntypedFormControl(null),
        menuItemId: new UntypedFormControl(null),
        issueDescription: new UntypedFormControl(null),
        issueResolution: new UntypedFormControl(null),
        issueAttachment: new UntypedFormControl(null),
        issueDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        ticketType: new UntypedFormControl(null),
        priority: new UntypedFormControl(null),
        severity: new UntypedFormControl(null),
        issueStatus: new UntypedFormControl(null),
        url: new UntypedFormControl(null),
        raisedBy: new UntypedFormControl(null),
        closedOn: new UntypedFormControl(null)
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
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        this.appGlobalService.getData(["menuItems"]).subscribe(data => {
            this.menuItems = data["menuItems"];
        });
        this.userName = this.storageService.get("IDMSAUser")?.name;
        this.f["raisedBy"].setValue(this.userName);
    }

    reset() {
        this.getInitialData();
        this.form.reset();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.form.invalid) {
            this.toastService.warning("Please fill all required field !");
            return;
        }
        let formData: any = this.form.value;

        let formValue = new FormData();
        formValue.append("key", "issueAttachment");
        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];

            if (formData[key]) {
                formValue.append(key, formData[key]);
            }
        }

        if (this.issueAttachmentFile) {
            formValue.append("issueAttachment", this.issueAttachmentFile, this.issueAttachmentFile.name);
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
        this.supportService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/supports/master/raise-ticket/raise-ticket-list"]);
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.supportService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/supports/master/raise-ticket/raise-ticket-list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.supportService.getAllMasterData({}).subscribe(success => {
            this.form.controls["issueNumber"].setValue(success.autoIncrementNo);
            this.priority = success.priority;
            this.severity = success.severity;
            this.ticketType = success.ticketType;
            this.moduleList = success.moduleList;

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        if (this.action === "edit") {
                        }
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
                    if (!!success.oldHistory && success.oldHistory.length) {
                        this.historyData = success.oldHistory;
                    }
                    if (success.menuItemId) {
                        this.supportService
                            .getAllSubModuleListByMenuId(success.menuItemId)
                            .subscribe((success: any) => {
                                this.subModuleNames = success;
                            });
                    }
                    this.form.patchValue(success);

                    if (success.issueStatus != "Open") {
                        this.form.disable();
                        this.form.controls["issueStatus"].enable();
                        this.form.controls["issueResolution"].enable();
                        this.form.controls["issueDescription"].enable();
                    }
                    if (success.issueStatus == "Closed") {
                        if (success.closedOn) {
                            this.form.controls["closedOn"].setValue(
                                this.utilityService.getFormatDate(success.closedOn, "YYYY-MM-DD")
                            );
                        }
                    } else {
                        this.setFormField();
                    }
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
            this.menuTitleService.set({
                title: "Ticket",
                subTitle: null,
                type: null
            });
        });
        this.spinner.hide();
    }

    setFormField() {
        let status = this.form.controls["issueStatus"].value;
        let closeOn = this.form.controls["closedOn"].value;
        if (status == "Closed") {
            this.form.controls["closedOn"].enable();
            if (!closeOn || closeOn == "undefined") {
                this.form.controls["closedOn"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            }
        } else {
            if (closeOn || !closeOn || closeOn == "undefined") {
                this.form.controls["closedOn"].setValue(null);
                this.form.controls["closedOn"].disable();
            }
        }
    }

    setModule(event: any) {
        this.supportService.getAllSubModuleListByMenuId(event._id).subscribe((success: any) => {
            this.subModuleNames = success;
            this.form.controls["menuItemId"].setValue(event._id);
        });
    }
    openRevisionReview() {
        if (this.historyData.length > 0) {
            const modalRef = this.modalService.open(ViewTicketHistoryComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.historyData = this.historyData;
        }
    }
    openViewResolutionComments() {
        const modalRef = this.modalService.open(ViewResolutionCommentsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.issueDescription = this.form.controls["issueDescription"].value;
        modalRef.componentInstance.issueResolution = this.form.controls["issueResolution"].value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["issueDescription"].setValue(success.issueDescription);
                    this.form.controls["issueResolution"].setValue(success.issueResolution);
                }
            },
            (reason: any) => {}
        );
    }
}
