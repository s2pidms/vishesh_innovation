import {Component, OnInit} from "@angular/core";
import {StorageService, ToastService} from "@core/services";
import {ProcessListConfigService} from "@services/settings";
import {SpinnerService} from "@core/services";
import {ActivatedRoute} from "@angular/router";
import {superAdminId} from "@mocks/constant";

@Component({
    selector: "app-process-list-configuration-form",
    templateUrl: "./process-list-configuration-form.component.html",
    styleUrls: ["./process-list-configuration-form.component.scss"]
})
export class ProcessListConfigurationFormComponent implements OnInit {
    submitted = false;
    totalNoOfRows: any = null;
    defectListDetails: any = [];
    page: number = 1;
    pageSize: number = 11;
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
    type: any = "Process";
    // usePresetsAndNewCreate: any = "Create New";
    inHouseAndOutSource: any = null;
    setRenameFlag: boolean = false;
    user: any = "";
    superAdminId: any = superAdminId;
    constructor(
        private processListConfigService: ProcessListConfigService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);
        console.log("user", this.user);

        // this.type = this.activatedRoute.snapshot.paramMap.get("appConfiguration");
        this.getInitialData();
    }

    submit() {
        if (this.defectListDetails.length == 0) {
            this.toastService.warning("Please add at least one Row !");
            return;
        }
        this.SNNumber();

        this.create(this.defectListDetails);
    }

    create(formData: any) {
        this.spinner.show();
        this.processListConfigService.createOrUpdate(formData).subscribe(success => {
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
        //             processName: ""
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
        this.inHouseAndOutSource = null;
        this.totalNoOfRows = null;
        // this.usePresetsAndNewCreate = "Create New";
        this.setRenameFlag = false;
        // this.defectListDetails = [];
        this.getInitialData();
    }
    setRename(item: any) {
        // let desc = this.defectListDetails?.find((x: any) => x.isChecked);
        // this.usePresetsAndNewCreate = "Use Presets";
        this.selectedDetails = item;
        this.setRenameFlag = true;
        this.description = item?.processName;
        this.inHouseAndOutSource = item?.source;
    }

    addDescription() {
        if (this.user == this.superAdminId) {
            if (!this.description) {
                this.toastService.warning("Pls Add Process Name to list !");
                return;
            }

            if (!this.inHouseAndOutSource) {
                this.toastService.warning("Pls Select & Add Source to Lis !");
                return;
            }
            // if (!this.setRenameFlag && this.usePresetsAndNewCreate == "Use Presets") {
            //     this.toastService.warning("If you want to edit the record plz click on Rename Action !");
            //     return;
            // }

            if (!this.setRenameFlag) {
                if (this.defectListDetails.find((x: any) => x.processName == this.description)) {
                    this.toastService.warning("the record you creating already exist !");
                    return;
                }
                let obj = {
                    SN: this.defectListDetails?.length + 1,
                    processName: this.description,
                    source: this.inHouseAndOutSource
                };
                this.defectListDetails.push(obj);
                this.description = null;
                this.inHouseAndOutSource = null;
                this.totalNoOfRows = this.defectListDetails?.length;
                this.toastService.success("Record Added Successfully !");
            } else if (this.setRenameFlag) {
                if (this.defectListDetails.find((x: any) => x.processName == this.description)) {
                    this.toastService.warning("the record you edit already exist !");
                    return;
                }
                this.defectListDetails = this.defectListDetails.map((x: any) => {
                    if (x?.SN == this.selectedDetails?.SN) {
                        x.processName = this.description;
                        x.source = this.inHouseAndOutSource;
                        this.setRenameFlag = false;
                    }
                    return x;
                });
                this.description = null;
                this.inHouseAndOutSource = null;
                this.toastService.success("Record Updated Successfully !");
            }
        }
        this.SNNumber();

        // if (this.defectListDetails.some((x: any) => x.isChecked) && !this.setRenameFlag) {
        //     this.toastService.warning("If you want to edit the record plz click on Rename Button !");
        //     return;
        // }

        // if (this.setRenameFlag) {
        //     if (this.defectListDetails.find((x: any) => x.processName == this.description)) {
        //         this.toastService.warning("the record you edit already exist !");
        //         return;
        //     }
        //     this.defectListDetails = this.defectListDetails.map((x: any) => {
        //         if (x?.SN == this.selectedDetails?.SN) {
        //             x.processName = this.description;
        //             this.setRenameFlag = false;
        //         }
        //         return x;
        //     });
        //     this.description = null;
        // } else if (this.description && !this.setRenameFlag) {
        //     if (this.defectListDetails.find((x: any) => x.processName == this.description)) {
        //         this.toastService.warning("the record you creating already exist !");
        //         return;
        //     }
        //     let obj = {
        //         SN: this.defectListDetails?.length + 1,
        //         processName: this.description
        //     };
        //     this.defectListDetails.push(obj);
        //     this.description = null;
        //     this.totalNoOfRows = this.defectListDetails?.length;
        // }
    }

    SNNumber() {
        this.defectListDetails = this.defectListDetails?.map((x: any, index: number) => {
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
        this.processListConfigService.getAll({}).subscribe(result => {
            if (result.length > 0) {
                this.defectListDetails = result;
                this.collection = this.defectListDetails?.length;
                // this.usePresetsAndNewCreate = "Use Presets";
            }
            // else {
            //     this.usePresetsAndNewCreate = "Create New";
            // }
            this.collection = this.defectListDetails?.length;
            this.totalNoOfRows = this.collection;
            this.spinner.hide();
        });
    }
}
