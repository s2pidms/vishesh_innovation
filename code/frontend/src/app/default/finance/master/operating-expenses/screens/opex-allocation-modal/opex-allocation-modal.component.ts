import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {StorageService} from "@core/services";

@Component({
    selector: "app-opex-allocation-modal",
    templateUrl: "./opex-allocation-modal.component.html",
    styles: [
        `
            .opex-color {
                background-color: #fff0ff;
            }
        `
    ]
})
export class OpexAllocationModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() opexAllocation: any = [];
    @Input() costHeadList: any = [];
    oldOpexAllocation: any = [];
    keys: string[] = [];
    companyCurrency: string = "";
    currentYear: any = 0;
    constructor(public activeModal: NgbActiveModal, private storageService: StorageService) {}
    ngOnInit(): void {
        this.keys = Object.keys(this.opexAllocation[0])
            .filter(f => f.includes("fy_"))
            .reverse();
        let opexData = this.costHeadList.find((x: any) => x.costHead == "TOTAL OPEX");
        this.opexAllocation = this.opexAllocation.map((x: any) => {
            if (x.particulars == "Total OPEX (Ccy)") {
                x.fy_25 = opexData?.fy_25;
                x.fy_24 = opexData?.fy_24;
                x.fy_23 = opexData?.fy_23;
                x.fy_22 = opexData?.fy_22;
            }
            return x;
        });
        this.calAllocationData();

        this.oldOpexAllocation = JSON.parse(JSON.stringify(this.opexAllocation));
        this.companyCurrency = this.storageService.get("IDMSAUser")?.currencySymbol ?? "INR";
        this.currentYear = new Date().getFullYear().toString().slice(-2);
    }

    dismissModel() {
        this.activeModal.close(this.opexAllocation);
    }

    reset() {
        this.opexAllocation = JSON.parse(JSON.stringify(this.oldOpexAllocation));
    }

    calAllocationData() {
        let index = this.opexAllocation.map((p: any) => p.particulars).indexOf("Opex Cost (Ccy)/Unit");
        for (const key of this.keys) {
            let newArr = this.opexAllocation.map((x: any) => x[key]);
            this.opexAllocation[index][key] =
                +newArr[2] == 0 ? 0 : +Number((+newArr[0] * (+newArr[1] / 100)) / +newArr[2]).toFixed(2);
        }
    }
}
