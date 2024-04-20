import {Component, OnInit, Input, QueryList, ViewChildren, EventEmitter, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ExportExcelService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {ICostSheetList} from "@mocks/models/sales/master";

@Component({
    selector: "app-cost-sheet",
    templateUrl: "./cost-sheet.component.html",
    styles: [
        `
            .form-control-cs {
                margin: 0;
                height: 2.8rem !important;
                width: 13rem !important;
                text-align: center;
                box-shadow: #00000059 0 2px 5px;
            }
        `
    ]
})
export class CostSheetComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() primaryUnit: string = "";
    @Input() costSheetArr: ICostSheetList[] = [];
    @Output() saveData = new EventEmitter<any>();
    isPreview = false;
    resetData: any = [];
    ESCPreviewArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 10;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    isESCPreview = false;
    direct1: any = 0;
    direct2: any = 0;
    direct3: any = 0;
    direct4: any = 0;
    totalDirect: any = 0;
    indirect6: any = 0;
    indirect7: any = 0;
    indirect8: any = 0;
    totalIndirect: any = 0;
    totalSum: any = 0;
    constructor(
        public activeModal: NgbActiveModal,
        private exportExcelService: ExportExcelService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        if (this.costSheetArr.length > 0) {
            this.resetData = JSON.parse(JSON.stringify(this.costSheetArr));
            this.collection = this.costSheetArr.length;
        }
    }
    reset() {
        this.isPreview = false;
        this.costSheetArr = JSON.parse(JSON.stringify(this.resetData));
        this.collection = this.costSheetArr.length;
    }

    dismissModel() {
        this.saveData.emit({
            data: this.costSheetArr,
            key: "costSheetArr"
        });
        this.toastService.success("Cost Sheet Saved");
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.costSheetArr = this.costSheetArr;
        } else {
            this.costSheetArr = [...this.costSheetArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    change() {
        let data = this.costSheetArr.map((x: any) => {
            if (x.isTotal) {
                if (x.componentType == "Direct") {
                    x.costPerSKUUnit = +Number(
                        this.costSheetArr
                            .filter((y: any) => y.componentType == "Direct" && !y.isTotal)
                            .map((z: any) => +z.costPerSKUUnit)
                            .reduce((a: any, c: any) => a + c)
                    ).toFixed(2);
                }
                if (x.componentType == "Indirect") {
                    x.costPerSKUUnit = +Number(
                        this.costSheetArr
                            .filter((y: any) => y.componentType == "Indirect" && !y.isTotal)
                            .map((z: any) => +z.costPerSKUUnit)
                            .reduce((a: any, c: any) => a + c)
                    ).toFixed(2);
                }
                if (x.componentType == "Direct + Indirect") {
                    x.costPerSKUUnit = +Number(
                        this.costSheetArr[
                            this.costSheetArr.findIndex((y: any) => y.componentType == "Direct" && y.isTotal)
                        ].costPerSKUUnit +
                            this.costSheetArr[
                                this.costSheetArr.findIndex((y: any) => y.componentType == "Indirect" && y.isTotal)
                            ].costPerSKUUnit
                    ).toFixed(2);
                }
            }
            return x;
        });

        this.costSheetArr = data.map((x: any) => {
            x.percentage =
                !x.costPerSKUUnit ||
                !this.costSheetArr[
                    this.costSheetArr.findIndex((y: any) => y.componentType == "Direct + Indirect" && y.isTotal)
                ].costPerSKUUnit
                    ? 0
                    : +Number(
                          (x.costPerSKUUnit * 100) /
                              this.costSheetArr[
                                  this.costSheetArr.findIndex(
                                      (y: any) => y.componentType == "Direct + Indirect" && y.isTotal
                                  )
                              ].costPerSKUUnit
                      ).toFixed(2);
            return x;
        });
    }
}
