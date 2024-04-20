import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-item-attributes",
    templateUrl: "./item-attributes.component.html",
    styleUrls: ["./item-attributes.component.scss"]
})
export class ItemAttributesComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: any = "edit";

    // Remarks
    // @Input() itemRemarksObj: any = {};
    // QC Level
    @Input() qcLevelsObj: any = {};
    // itemUploadDocs
    @Input() itemUploadDocs: any = {};
    // Gen Specs
    @Input() genSpecs: any = {};

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
        if (value.key == "itemUploadDocs") {
            this.itemUploadDocs = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "genSpecs") {
            this.genSpecs = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "qcLevelsObj") {
            this.qcLevelsObj = value.data;
            this.dismissModel();
            // this.active = this.active + 1;
        }
        // if (value.key == "itemRemarksObj") {
        //     this.itemRemarksObj = value.data;
        //     this.dismissModel();
        // }
    }
    dismissModel() {
        let obj: any = {};
        obj.genSpecs = this.genSpecs;
        // obj.itemRemarksObj = this.itemRemarksObj;
        obj.qcLevelsObj = this.qcLevelsObj;
        obj.itemUploadDocs = this.itemUploadDocs;
        this.activeModal.close(obj);
    }
}
