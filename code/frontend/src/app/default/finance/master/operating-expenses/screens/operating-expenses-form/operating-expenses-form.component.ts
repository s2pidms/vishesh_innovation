import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {OperatingExpensesService} from "@services/finance";
import {OpexAllocationModalComponent} from "../opex-allocation-modal/opex-allocation-modal.component";
import {COST_HEAD_TOOLTIP} from "@mocks/options.constant";

@Component({
    selector: "app-operating-expenses-form",
    templateUrl: "./operating-expenses-form.component.html",
    styles: [
        `
            .opex-color {
                background-color: #fff0ff;
                border-top: 2px groove #007daf;
                border-bottom: 2px groove #007daf;
                color: black;
            }
        `
    ]
})
export class OperatingExpensesFormComponent implements OnInit {
    costHeadList: any = [];
    opexAllocation: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    keys: string[] = [];
    currentYear: any = 0;
    constructor(
        private operatingExpensesService: OperatingExpensesService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        this.currentYear = new Date().getFullYear().toString().slice(-2);
    }

    reset() {
        this.getInitialData();
    }

    costHeadTooltip: any = COST_HEAD_TOOLTIP;

    getTooltipOfCostHead(costHead: string) {
        return this.costHeadTooltip[costHead] || [];
    }

    update() {
        this.spinner.show();
        let payload: any = {};
        payload.costHeadList = this.costHeadList;
        payload.opexAllocation = this.opexAllocation;
        this.operatingExpensesService.update(payload).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.getInitialData();
            this.reset();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.operatingExpensesService.getAllMasterData({}).subscribe(success => {
            this.costHeadList = success.costHeadList.map((x: any, idx: any) => {
                if (x.costHead != "TOTAL OPEX") {
                    x.sr = idx + 1;
                }
                return x;
            });
            this.keys = Object.keys(this.costHeadList[0])
                .filter(f => f.includes("fy_"))
                .reverse();
            this.opexAllocation = success.opexAllocation;
            this.spinner.hide();
        });
    }

    setOperatingExpenses() {
        let index = this.costHeadList.map((p: any) => p.costHead).indexOf("TOTAL OPEX");
        for (const key of this.keys) {
            let newArr = this.costHeadList.map((x: any) => x.costHead != "TOTAL OPEX" && x[key]);
            this.costHeadList[index][key] = newArr.reduce((a: any, c: any) => a + c, 0);
        }
    }

    openAllocationModal() {
        const modalRef = this.modalService.open(OpexAllocationModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.costHeadList = this.costHeadList;
        modalRef.componentInstance.opexAllocation = this.opexAllocation;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.opexAllocation = success;
                }
            },
            (reason: any) => {}
        );
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }
}
