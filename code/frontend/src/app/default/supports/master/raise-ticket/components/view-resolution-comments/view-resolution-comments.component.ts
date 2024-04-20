import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-view-resolution-comments",
    templateUrl: "./view-resolution-comments.component.html",
    styleUrls: ["./view-resolution-comments.component.scss"]
})
export class ViewResolutionCommentsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";

    // remarks
    @Input() issueDescription: any = {};
    @Input() issueResolution: any = {};
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
        if (value.key == "issueDescription") {
            this.issueDescription = value.data;
        }
        if (value.key == "issueResolution") {
            this.issueResolution = value.data;
        }
    }
    dismissModel() {
        let obj: any = {};
        obj.issueDescription = this.issueDescription;
        obj.issueResolution = this.issueResolution;
        this.activeModal.close(obj);
    }
}
