import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-variants-modal",
    templateUrl: "./variants-modal.component.html"
})
export class VariantsModalComponent implements OnInit {
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "variant";
    direction: number = -1;
    search: string = "";
    @Input() action: any = "";
    @Input() noOfVariants: any = null;
    @Input() variantsInfo: any = [];
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.collection = this.variantsInfo.length;
    }
    dismissModel() {
        let obj: any = {};
        obj.noOfVariants = this.noOfVariants;
        obj.variantsInfo = this.variantsInfo;
        this.activeModal.close(obj);
    }
    setTable() {
        this.noOfVariants = this.noOfVariants || 0;

        if (this.noOfVariants) {
            if (this.noOfVariants <= this.variantsInfo.length) {
                return;
            }

            const conditionArr = this.noOfVariants - this.variantsInfo.length;
            for (let i = 0; i < conditionArr; i++) {
                let obj = {
                    variant: this.variantsInfo.length + 1,
                    variantName: "",
                    partNo: "",
                    drawingNo: ""
                };
                this.variantsInfo.push(obj);
            }
            this.variantsInfo = this.variantsInfo.map((x: any, i: number) => {
                x.variant = i + 1;
                return x;
            });
            this.collection = this.variantsInfo.length;
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
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
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    deleteItem(variant: number) {
        let index = this.variantsInfo.findIndex((x: any) => x.variant == variant);

        if (this.action != "view") {
            this.variantsInfo.splice(index, 1);
            this.collection = this.variantsInfo.length;
            this.noOfVariants = this.noOfVariants - 1;
            this.search = "";
            this.page = 1;
        }
    }
}
