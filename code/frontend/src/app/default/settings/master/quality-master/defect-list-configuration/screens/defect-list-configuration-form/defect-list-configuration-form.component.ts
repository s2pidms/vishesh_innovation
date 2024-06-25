import {Component, OnInit} from "@angular/core";
import {ToastService} from "@core/services";
import {DefectListConfigService} from "@services/settings";
import {SpinnerService} from "@core/services";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-defect-list-configuration-form",
    templateUrl: "./defect-list-configuration-form.component.html",
    styleUrls: ["./defect-list-configuration-form.component.scss"]
})
export class DefectListConfigurationFormComponent implements OnInit {
    submitted = false;
    totalNoOfRows: any = null;
    defectListDetails: any = [];
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    column: string = "SN";
    direction: number = -1;
    search: string = "";
    action: string = "create";
    selectedDetails: any = {};
    selectIndex: any = 0;
    description: any = "";
    moveUpDisable: boolean = false;
    moveDownDisable: boolean = false;
    type: any = "";
    usePresetsAndNewCreate: any = "Create New";
    setRenameFlag: boolean = false;

    constructor(
        private defectListConfigService: DefectListConfigService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.type = this.activatedRoute.snapshot.paramMap.get("appConfiguration");
        this.getInitialData();
    }

    submit() {
        if (this.defectListDetails.length == 0) {
            this.toastService.warning("Please add at least one Row !");
            return;
        }
        this.SNNumber();
        this.defectListDetails = this.defectListDetails.map((x: any) => {
            x.docType = this.type;
            return x;
        });

        this.create(this.defectListDetails);
    }

    create(formData: any) {
        this.spinner.show();
        this.defectListConfigService.createOrUpdate({formData, type: this.type}).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            // this.location.back();
            this.getInitialData();
        });
    }

    setTable() {
        // this.totalNoOfRows = this.totalNoOfRows || 0;
        // if (this.totalNoOfRows) {
        //     if (this.totalNoOfRows <= this.defectListDetails.length) {
        //         return;
        //     }
        //     const conditionArr = this.totalNoOfRows - this.defectListDetails.length;
        //     for (let i = 0; i < conditionArr; i++) {
        //         let obj = {
        //             SN: this.defectListDetails.length + 1,
        //             defectName: ""
        //         };
        //         this.defectListDetails.push(obj);
        //     }
        //     this.defectListDetails = this.defectListDetails.map((x: any, i: number) => {
        //         x.SN = i + 1;
        //         return x;
        //     });
        //     this.collection = this.defectListDetails.length;
        // }
    }

    swapElements(arr: any, index1: any, index2: any) {
        console.log("index1", index1);
        console.log("index2", index2);

        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    moveUp(index: any) {
        if (index > 0) {
            let index2 = index - 1;
            this.swapElements(this.defectListDetails, index, index2);
            // this.selectIndex = index2;
            this.moveDownDisable = false;
        } else {
            this.moveUpDisable = true;
        }
    }
    moveDown(index: any) {
        if (index < this.defectListDetails.length - 1) {
            let index2 = index + 1;
            this.swapElements(this.defectListDetails, index2, index);
            // this.selectIndex = index2;
            this.moveUpDisable = false;
        } else {
            this.moveDownDisable = true;
        }
    }
    changeDefectName(data: any, index: any) {
        // console.log("index", index);
        // this.selectIndex = index;
        // this.selectedDetails = data;
        // this.defectListDetails = this.defectListDetails.map((x: any) => {
        //     if (x?.SN == this.selectedDetails?.SN) {
        //         x.isChecked = true;
        //     } else {
        //         x.isChecked = false;
        //     }
        //     return x;
        // });
        // this.moveUpDisable = index == 0;
        // this.moveDownDisable = index >= this.defectListDetails.length - 1;
    }

    reset() {
        this.description = null;
        this.totalNoOfRows = null;
        this.usePresetsAndNewCreate = "Create New";
        this.setRenameFlag = false;
        this.defectListDetails = [];
    }
    setRename(item: any) {
        // let desc = this.defectListDetails?.find((x: any) => x.isChecked);
        this.usePresetsAndNewCreate = "Use Presets";
        this.selectedDetails = item;
        this.setRenameFlag = true;
        this.description = item?.defectName;
    }

    addDescription() {
        if (!this.description) {
            this.toastService.warning("Pls Enter Description !");
            return;
        }
        if (!this.setRenameFlag && this.usePresetsAndNewCreate == "Use Presets") {
            this.toastService.warning("If you want to edit the record plz click on Rename Action !");
            return;
        }

        if (this.usePresetsAndNewCreate == "Create New") {
            if (this.defectListDetails.find((x: any) => x.defectName == this.description)) {
                this.toastService.warning("the record you creating already exist !");
                return;
            }
            let obj = {
                SN: this.defectListDetails?.length + 1,
                defectName: this.description
            };
            this.defectListDetails.push(obj);
            this.description = null;
            this.totalNoOfRows = this.defectListDetails?.length;
            this.toastService.success("Record Created Successfully !");
        } else if (this.setRenameFlag && this.usePresetsAndNewCreate == "Use Presets") {
            if (this.defectListDetails.find((x: any) => x.defectName == this.description)) {
                this.toastService.warning("the record you edit already exist !");
                return;
            }
            this.defectListDetails = this.defectListDetails.map((x: any) => {
                if (x?.SN == this.selectedDetails?.SN) {
                    x.defectName = this.description;
                    this.setRenameFlag = false;
                }
                return x;
            });
            this.description = null;
            this.toastService.success("Record Updated Successfully !");
        }
        this.SNNumber();

        // if (this.defectListDetails.some((x: any) => x.isChecked) && !this.setRenameFlag) {
        //     this.toastService.warning("If you want to edit the record plz click on Rename Button !");
        //     return;
        // }

        // if (this.setRenameFlag) {
        //     if (this.defectListDetails.find((x: any) => x.defectName == this.description)) {
        //         this.toastService.warning("the record you edit already exist !");
        //         return;
        //     }
        //     this.defectListDetails = this.defectListDetails.map((x: any) => {
        //         if (x?.SN == this.selectedDetails?.SN) {
        //             x.defectName = this.description;
        //             this.setRenameFlag = false;
        //         }
        //         return x;
        //     });
        //     this.description = null;
        // } else if (this.description && !this.setRenameFlag) {
        //     if (this.defectListDetails.find((x: any) => x.defectName == this.description)) {
        //         this.toastService.warning("the record you creating already exist !");
        //         return;
        //     }
        //     let obj = {
        //         SN: this.defectListDetails?.length + 1,
        //         defectName: this.description
        //     };
        //     this.defectListDetails.push(obj);
        //     this.description = null;
        //     this.totalNoOfRows = this.defectListDetails?.length;
        // }
    }

    SNNumber() {
        this.defectListDetails = this.defectListDetails.map((x: any, index: number) => {
            x.SN = index + 1;
            return x;
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            // case "SEARCH":
            //     this.search = event.value;
            //     this.page = 1;
            //     break;
            // case "EXCEL":
            //     break;
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
    deleteItem(SN: number) {
        let index = this.defectListDetails.findIndex((x: any) => x.SN == SN);

        if (this.action != "view") {
            this.defectListDetails.splice(index, 1);
            this.collection = this.defectListDetails.length;
            this.totalNoOfRows = this.totalNoOfRows - 1;
            this.search = "";
            this.page = 1;
        }
    }

    getInitialData() {
        this.spinner.show();
        this.defectListConfigService.getAll({docType: this.type}).subscribe(result => {
            console.log("result", result);
            if (result.length > 0) {
                this.defectListDetails = result;
                this.collection = this.defectListDetails?.length;
                this.usePresetsAndNewCreate = "Use Presets";
            } else {
                this.usePresetsAndNewCreate = "Create New";
            }
            this.collection = this.defectListDetails?.length;
            this.totalNoOfRows = this.collection;
            this.spinner.hide();
        });
    }
}
