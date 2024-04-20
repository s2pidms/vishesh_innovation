import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {MenuTitleService, SpinnerService, StorageService, UtilityService} from "@core/services";
import {MINUTES_OF_MEETING_STATUS, MINUTES_OF_MEETING_TYPE} from "@mocks/constant";
import {MinutesOfMeetingService} from "@services/supports";
import {MinOfMeetingAttendeesComponent} from "../min-of-meeting-attendees/min-of-meeting-attendees.component";
import {MINUTES_OF_MEETING_FORM_ERRORS} from "@mocks/validations/support";

@Component({
    selector: "app-minutes-of-meeting-form",
    templateUrl: "./minutes-of-meeting-form.component.html"
})
export class MinutesOfMeetingFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    userName: any = {};
    submitted = false;
    action: string = "create";
    btnDisable = false;

    meetingType: any = MINUTES_OF_MEETING_TYPE;
    meetingStatus: any = MINUTES_OF_MEETING_STATUS;
    meetingInfoArr: any = [];
    isESCPreview = false;
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        MOMCode: new UntypedFormControl(null, [Validators.required]),
        MOMDate: new UntypedFormControl(null, [Validators.required]),
        MOMTitle: new UntypedFormControl(null, [Validators.required]),
        meetingType: new UntypedFormControl(null, [Validators.required]),
        venue: new UntypedFormControl(null, [Validators.required]),
        organizer: new UntypedFormControl(null, [Validators.required]),
        attendedBy: new UntypedFormControl(null, [Validators.required]),
        meetingInfo: new UntypedFormGroup({
            index: new UntypedFormControl(-1),
            actionPoint: new UntypedFormControl(""),
            owner: new UntypedFormControl(""),
            targetDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
            reviewDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
            status: new UntypedFormControl(null),
            remarks: new UntypedFormControl(null)
        })
    });
    get meetingInfoData() {
        return this.form.get("meetingInfo") as UntypedFormGroup;
    }
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private minutesOfMeetingService: MinutesOfMeetingService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.userName = this.storageService.get("IDMSAUser")?.name;
        this.f["organizer"].setValue(this.userName);
        this.getInitialData();
    }

    get f() {
        return this.form.controls;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.flag = -1;
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
    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, MINUTES_OF_MEETING_FORM_ERRORS)) {
            return;
        }
        if (this.meetingInfoArr.length == 0) {
            this.toastService.warning("at least one row is required !");
            return;
        }

        let formData: any = this.form.value;
        formData.meetingInfo = this.meetingInfoArr;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    patchItem(formData: any, index: number, action: string) {
        formData.index = index;
        formData.targetDate = this.utilityService.getFormatDate(formData.targetDate, "YYYY-MM-DD");
        formData.reviewDate = this.utilityService.getFormatDate(formData.reviewDate, "YYYY-MM-DD");

        this.meetingInfoData.patchValue(formData);
        if (action == "view") {
            this.btnDisable = true;
            this.meetingInfoData.disable();
        } else {
            this.meetingInfoData.enable();
            this.btnDisable = false;
        }
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.meetingInfoArr.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.meetingInfoArr.length;
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.minutesOfMeetingService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/supports/master/minutes_of_meeting/list"]);
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.minutesOfMeetingService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/supports/master/minutes_of_meeting/list"]);
        });
    }
    reset() {
        this.form.reset();
        this.meetingInfoArr = [];
        this.collection = this.meetingInfoArr.length;
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.minutesOfMeetingService.getAllMasterData({}).subscribe(result => {
            this.form.controls["MOMCode"].setValue(result.autoIncrementNo);
            this.f["organizer"].setValue(this.userName);
            this.f["MOMDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.meetingInfoData.controls["targetDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.meetingInfoData.controls["reviewDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.minutesOfMeetingService.getById(params["id"]);
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
                    if (success.MOMDate) {
                        success.MOMDate = this.utilityService.getFormatDate(success?.MOMDate, "YYYY-MM-DD");
                    }
                    this.meetingInfoArr = success.meetingInfo;
                    this.collection = this.meetingInfoArr.length;
                    this.form.patchValue(success);
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });

            this.menuTitleService.set({
                title: "Minutes of Meeting",
                subTitle: null,
                type: null
            });
        });
    }

    addMeetingDetails() {
        let obj: any = this.meetingInfoData.value;

        if (!obj.actionPoint) {
            this.toastService.warning("Action Point is required !");
            return;
        }
        if (!obj.owner) {
            this.toastService.warning("Owner is required !");
            return;
        }
        if (!obj.status) {
            this.toastService.warning("Status is required !");
            return;
        }
        if (!obj.targetDate) {
            this.toastService.warning("Target Date is required !");
            return;
        }
        if (!obj.reviewDate) {
            this.toastService.warning("Review Date is required !");
            return;
        }

        let formData = this.meetingInfoData.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.meetingInfoArr.splice(formData.index, 1, formData);
        } else {
            // create
            this.meetingInfoArr.push(formData);
        }
        this.collection = this.meetingInfoArr.length;
        this.meetingInfoData.reset();
        this.meetingInfoData.controls["targetDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
        this.meetingInfoData.controls["reviewDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
        this.collection = this.meetingInfoArr.length;
    }

    deleteDetails(index: any) {
        this.meetingInfoArr.splice(index + (this.page - 1) * this.pageSize, 1);
        this.collection = this.meetingInfoArr.length;
    }

    openAttendeesModal() {
        const modalRef = this.modalService.open(MinOfMeetingAttendeesComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.attendedBy = this.form.controls["attendedBy"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["attendedBy"].setValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.meetingInfoArr = this.meetingInfoArr;
        } else {
            this.meetingInfoArr = [...this.meetingInfoArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
