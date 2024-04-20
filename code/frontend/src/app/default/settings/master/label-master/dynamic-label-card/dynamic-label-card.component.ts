import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {ToastService} from "@core/services";
import {LabelMasterService} from "@services/settings";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-dynamic-label-card",
    templateUrl: "./dynamic-label-card.component.html"
})
export class DynamicLabelCardComponent implements OnInit, OnDestroy {
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    action: string = "create";
    roles: any = [];
    moduleNames: any = [];
    view: string = "";
    subscription!: Subscription;
    constructor(
        private labelMasterService: LabelMasterService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute
    ) {}
    type: any = "";
    module: any = "";
    labelData: any = [];
    existingRoles: any = [];

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((success: any) => {
            if (success.id) {
                this.getAll(success.id);
            }
        });
    }

    getAll(id: any) {
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.labelMasterService.getAll({menuItemId: id}).subscribe(success => {
            this.labelData = success.rows;
            this.collection = this.labelData.length;
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
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
    reset() {
        this.type = "";
        this.module = "";
    }

    update(item: any) {
        this.spinner.show();
        this.labelMasterService.update(item._id, item).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.reset();
        });
    }
}
