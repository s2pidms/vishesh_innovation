import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {GRDetails} from "@interfaces/GRDetails";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService, SpinnerService, StorageService, UtilityService} from "@core/services";
import {FinishedGoodsInwardEntryService} from "@services/stores";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {IFinishedGoodsInwardArray, IFinishedGoodsInwardMasterData} from "@mocks/models/production/transactions";
import {ProductCategoryModalComponent} from "src/app/default/sales/master/sku/screens/product-category-modal/product-category-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-multiple-fgin-form",
    templateUrl: "./multiple-fgin-form.component.html"
})
export class MultipleFginFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    items: any = [];
    ESCPreviewArr: any = [];
    productCategories: any = [];
    locationArr: any = [];
    // IFinishedGoodsInwardArray[]
    filterTableData: any = [];
    userData: any = {};
    FGINDate = this.utilityService.getTodayDate("YYYY-MM-DD");
    productCategory = "";
    FGINNo = "";
    location = "";
    enteredBy = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    masterData: IFinishedGoodsInwardMasterData = {
        autoIncrementNo: "",
        location: [],
        productCategories: []
    };
    constructor(
        private finishedGoodsInwardEntryService: FinishedGoodsInwardEntryService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.userData = this.storageService.get("IDMSAUser");
        this.enteredBy = this.userData.name;

        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.filterTableData = [];
        this.productCategory = "";
        this.FGINNo = "";
        this.FGINDate = this.utilityService.getTodayDate("YYYY-MM-DD");
        this.location = "";
        this.collection = this.filterTableData.length;
        this.getInitialData();
    }

    update() {
        let data = this.filterTableData.filter((x: any) => x?.FGINQuantity > 0);
        if (data.length == 0) {
            this.toastService.warning("At least one FGIN Entry is required");
            return;
        }
        if (!location) {
            this.toastService.warning("Location is Required");
            return;
        }
        this.spinner.show();
        let payload = {
            FGINEntry: data,
            FGINNo: this.FGINNo,
            location: this.location,
            FGINDate: this.FGINDate
        };

        this.finishedGoodsInwardEntryService.bulkCreate(payload).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
            this.getInitialData();
        });
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
    setFilterData(event: any) {
        let obj = {
            productCategory: this.productCategory
        };
        this.finishedGoodsInwardEntryService.getAllFGINByProductCategory(obj).subscribe(success => {
            this.filterTableData = success;
            this.collection = this.filterTableData.length;
        });
    }
    getInitialData() {
        this.spinner.show();

        let payload = {
            productCategory: this.productCategory ? this.productCategory : null
        };
        this.finishedGoodsInwardEntryService.getAllMasterData(payload).subscribe(success => {
            this.FGINNo = success.autoIncrementNo;
            this.productCategories = success.productCategories;
            this.locationArr = success.location;
            this.spinner.hide();
        });
    }
    openProductCategoryModal() {
        const modalRef = this.modalService.open(ProductCategoryModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = "create";
        modalRef.componentInstance.productCategoryList = this.productCategories;
        modalRef.componentInstance.productCategory = this.productCategory;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.productCategory = success?.selectedProductCategory;
                    this.setFilterData({value: success?.selectedProductCategory});
                }
            },
            (reason: any) => {}
        );
    }
    setExpiryDate(item: any, index: any) {
        index = index + (this.page - 1) * this.pageSize;

        if (+item.shelfLife >= 0) {
            this.filterTableData[index].expiryDate = this.utilityService.getAddFormat(
                this.filterTableData[index].manufacturingDate,
                item.shelfLife
            );
        }
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.filterTableData;
        this.filterTableData = this.filterTableData.filter((x: any) => x.FGINQuantity > 0);
        if (this.filterTableData.length > 0) {
            this.isPreview = true;
        }
        this.collection = this.filterTableData.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.filterTableData = this.ESCPreviewArr;
        this.collection = this.filterTableData.length;
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.filterTableData = this.filterTableData;
        } else {
            this.filterTableData = [...this.filterTableData].sort((a: any | GRDetails, b: any | GRDetails) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
