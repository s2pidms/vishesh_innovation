import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-add-sub-module-roll",
    templateUrl: "./add-sub-module-roll.component.html"
})
export class AddSubModuleRollComponent implements OnInit {
    @Input() action: string = "";
    @Input() roles: any = [];
    @Input() roleNames: any = [];

    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.roleNames = this.roleNames.map((x: any) => {
            x.isChecked = true;
            return x;
        });
        this.collection = this.roleNames.length;

        if (this.roles && this.roles.length > 0) {
            for (const ele of this.roleNames) {
                if (this.roles.includes(ele._id)) {
                    ele.isChecked = false;
                }
            }
        }

        // this.roleNames = this.roles.map((x: any) => {
        //     return {
        //         role: x
        //     };
        // });

        // this.collection = this.roleNames.length;
        // if (this.collection == 0) {
        //     this.roleNames.push({role: ""});
        //     this.collection = this.roleNames.length;
        // }
    }

    deleteTableRow(i: any) {
        if (this.roleNames.length > 1) {
            let index = i + (this.page - 1) * this.pageSize;
            this.roleNames.splice(index, 1);
        }
        this.collection = this.roleNames.length;
    }

    addTableRow(i: any, item: any) {
        if (!item.role) {
            this.toastService.warning("Role is required");
            return;
        }
        this.roleNames.push({role: ""});
        this.collection = this.roleNames.length;
    }

    dismissModel() {
        this.activeModal.close(this.roleNames.filter((item: any) => !item.isChecked).map((x: any) => x._id));
        // this.activeModal.close(this.roleNames.map((x: any) => x._id));
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                break;
            case "EXCEL":
                // this.excelDownload(this.customerContactInfoArray);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }
}
