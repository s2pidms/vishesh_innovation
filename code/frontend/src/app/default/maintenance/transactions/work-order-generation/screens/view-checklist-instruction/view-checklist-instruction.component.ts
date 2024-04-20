import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "../../../../../../shared/directives";
import {Checklist} from "@interfaces/Checklist";
@Component({
    selector: "app-view-checklist-instruction",
    templateUrl: "./view-checklist-instruction.component.html"
})
export class ViewChecklistInstructionComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    @Input() checklistInstruction: any = [];
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private exportExcelService: ExportExcelService
    ) {}

    ngOnInit(): void {
        this.collection = this.checklistInstruction.length;
    }

    excelDownload(data: any) {
        let style = {
            width: 24,
            style: {
                alignment: {
                    vertical: "middle",
                    horizontal: "center",
                    wrapText: true
                }
            }
        };
        let reportData: any = {
            title: "Customer Contact Details",
            csvData: data,
            headers: [
                {
                    header: "Contact Person",
                    key: "contactPersonName",
                    ...style
                },
                {
                    header: "Designation",
                    key: "contactPersonDesignation",
                    ...style
                }
            ]
        };
        this.exportExcelService.exportExcel(reportData);
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.checklistInstruction = this.checklistInstruction;
        } else {
            this.checklistInstruction = [...this.checklistInstruction].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
