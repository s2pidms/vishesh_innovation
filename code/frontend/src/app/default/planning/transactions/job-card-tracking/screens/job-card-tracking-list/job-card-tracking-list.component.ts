import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {MenuTitleService, SpinnerService} from "@core/services";
import {JobCardOutputService} from "@services/production";
import {IJobCardTrackingMasterData} from "@mocks/models/planning/transactions/jobCardTrackingMasterData";
import {ViewJcStatusComponent} from "../view-jc-status/view-jc-status.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-job-card-tracking-list",
    templateUrl: "./job-card-tracking-list.component.html",
    styleUrls: ["./job-card-tracking-list.component.scss"]
})
export class JobCardTrackingListComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    activeQualified: number = 0;
    column: string = "jobCardNo";
    direction: number = -1;
    search: string = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    jobTrackingData: IJobCardTrackingMasterData[] = [];
    constructor(
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private jobCardOutputService: JobCardOutputService,
        private menuTitleService: MenuTitleService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAllMasterData();
    }

    getAllMasterData() {
        this.spinner.show();
        this.jobCardOutputService.getAllJobTrackingMasterData({}).subscribe(success => {
            this.jobTrackingData = success;
            this.collection = this.jobTrackingData.length;
            if (this.jobTrackingData.length > 0) {
                this.activeQualified = this.jobTrackingData.length;
            }
            this.spinner.hide();
        });
    }
    update(u: any, action: string) {
        // this.spinner.show();
        // this.leadGenerationService.update(u._id, {result: action}).subscribe(success => {
        //     this.toastService.success("Lead Tracking has been updated successfully");
        //     this.getAllMasterData();
        //     this.spinner.hide();
        // });
    }

    navigateTo(path: string, action: string, title: string, arrayDetails: any) {
        if (arrayDetails.length > 0) {
            this.menuTitleService.set({
                title: title
            });
            this.router.navigate([path], {queryParams: {id: arrayDetails[0]?._id, action}});
            return;
        }
    }

    setPagination() {
        this.page = 1;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    openStatusDetailsModal(item: any) {
        if (item?.jobCardEntry?.length > 0) {
            const modalRef = this.modalService.open(ViewJcStatusComponent, {
                centered: true,
                windowClass: "custom-modal",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.jobCardEntryList = item.jobCardEntry;
            modalRef.result.then(
                (success: any) => {
                    if (success) {
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openDemoDetailsModal(item: any) {
        // if (item.demoSchedule.length > 0) {
        //     const modalRef = this.modalService.open(DemoDetailsModalComponent, {
        //         centered: true,
        //         size: "xl",
        //         backdrop: "static",
        //         keyboard: false
        //     });
        //     modalRef.componentInstance.demoDetails = item?.demoSchedule;
        //     modalRef.result.then(
        //         (success: any) => {
        //             // if (success && ["create", "edit"].includes(this.action)) {
        //             // }
        //         },
        //         (reason: any) => {}
        //     );
        // }
    }
    openDemoProposalModal(item: any) {
        // if (item.commercialProposal.length > 0) {
        //     const modalRef = this.modalService.open(DemoProposalModalComponent, {
        //         centered: true,
        //         size: "xl",
        //         backdrop: "static",
        //         keyboard: false
        //     });
        //     modalRef.componentInstance.commercialProposal = item?.commercialProposal;
        //     modalRef.result.then(
        //         (success: any) => {
        //             // if (success && ["create", "edit"].includes(this.action)) {
        //             // }
        //         },
        //         (reason: any) => {}
        //     );
        // }
    }
}
