import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-details-of-channel-partner",
    templateUrl: "./details-of-channel-partner.component.html"
})
export class DetailsOfChannelPartnerComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() channelPartner: any = "";
    @Input() channelPartnerOptions: any = [];
    @Input() selectedChannelPartnerDetails: any = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        if (this.channelPartner) {
            this.selectedChannelPartnerDetails._id = this.channelPartner;
            this.channelPartnerOptions = this.channelPartnerOptions.map((x: any) => {
                x.select = false;
                if (x._id == this.channelPartner) {
                    x.select = true;
                }
                return x;
            });
        }
        this.collection = this.channelPartnerOptions.length;
    }

    setSelectData(u: any) {
        this.selectedChannelPartnerDetails = u;
    }

    dismissModel() {
        let obj: any = {};
        obj.selectedChannelPartnerDetails = this.selectedChannelPartnerDetails;
        console.log("obj.selectedChannelPartnerDetails", obj.selectedChannelPartnerDetails);

        this.activeModal.close(obj);
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
            this.channelPartnerOptions = this.channelPartnerOptions;
        } else {
            this.channelPartnerOptions = [...this.channelPartnerOptions].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
