import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-product-attributes-modal",
    templateUrl: "./product-attributes-modal.component.html",
    styleUrls: ["./product-attributes-modal.component.scss"]
})
export class ProductAttributesModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";

    // remarks
    @Input() remarks: any = {};
    // storage
    @Input() storage: any = {};
    @Input() bomDimData: any = {};

    isPreview = false;
    resetData: any = [];
    ESCPreviewArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    isESCPreview = false;
    attributes: any = "dimensions";
    active: any = 1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    saveData(value: any) {
        if (value.key == "bomDimData") {
            this.bomDimData = value.data;
            this.active = this.active + 1;
        }

        if (value.key == "storage") {
            this.storage = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "remarks") {
            this.remarks = value.data;
            this.active = this.active - 2;
        }
    }
    dismissModel() {
        let obj: any = {};
        obj.remarks = this.remarks;
        obj.storage = this.storage;
        obj.bomDimData = this.bomDimData;
        this.activeModal.close(obj);
    }
}
