import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpinnerService, ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {RollToRollRemarksComponent} from "../roll-to-roll-remarks/roll-to-roll-remarks.component";
import {RollToRollConversionService, SFGStockService} from "@services/planning";
import {LocationStrategy} from "@angular/common";
import {IRMDetailsOfRoll} from "@mocks/models/planning/transactions";

@Component({
    selector: "app-roll-to-roll-form",
    templateUrl: "./roll-to-roll-form.component.html",
    styles: [
        `
            .seperator-row {
                position: relative;
                .add-icon {
                    position: absolute;
                    left: -1.2rem;
                    top: -0.9rem;
                }
                .minus-icon {
                    position: absolute;
                    right: -1.2rem;
                    top: -0.9rem;
                }
            }
        `
    ]
})
export class RollToRollFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    action: string = "create";
    rollsQty: any = 0;
    stockPreparation: any = {};
    noOfRollsToBeSlit: any = 0;
    outputDetails: IRMDetailsOfRoll[] = [];
    selectedMRNDetails: any = [];
    totalRecoveryUsage: any = 0;
    totalUsage: any = 0;
    sqmToBeProcessed: any = 0;
    recovery: any = 0;
    recoveryPercentage: any = 0;
    wastage: any = 0;
    wastagePercentage: any = 0;
    remarksDetails: any = {};
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    constructor(
        private location: LocationStrategy,
        private router: Router,
        private toastService: ToastService,
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute,
        private sfgStockService: SFGStockService,
        private rollToRollConversionService: RollToRollConversionService,
        private spinner: SpinnerService
    ) {}
    processNames: any = "slit";
    ngOnInit(): void {
        let state: any = this.location.getState();
        this.stockPreparation = JSON.parse(state["formData"]);
        let data = JSON.parse(state["data"]);
        this.sfgStockService.getStockPreparationByIdAndType(data).subscribe(success => {
            this.selectedMRNDetails = JSON.parse(JSON.stringify(success?.output)).map((x: any) => {
                x.totalRoll = x.roll;
                // x.totalPPICQty = x.closedIRQty;
                x.totalClosedIRQty = x.closedIRQty;
                x.shelfLife = x.shelfLife;
                return x;
            });
            this.outputDetails = success?.output.map((x: any) => {
                x.closedIRQty = 0;
                x.width = 0;
                x.length = 0;
                x.SQM = 0;
                x.roll = 0;
                x.shelfLife = x.shelfLife;
                x.stage = "Roll";
                return x;
            });
        });
    }

    deleteTableRow() {
        if (this.outputDetails.length > 1) {
            this.outputDetails.pop();
            this.calTotalFn();
            this.setRowSQMPerRoll();
        }
    }
    addTableRow() {
        this.outputDetails = [
            ...this.outputDetails,
            ...JSON.parse(JSON.stringify(this.selectedMRNDetails)).map((x: any) => {
                x.closedIRQty = 0;
                x.width = 0;
                x.length = 0;
                x.SQM = 0;
                x.roll = 0;
                x.shelfLife = x.shelfLife;
                return x;
            })
        ];
    }

    setRowSQMPerRoll() {
        if (this.selectedMRNDetails.length == 0) {
            this.toastService.warning("Selected Input Atleast one Data !");
            return;
        }
        if (+this.noOfRollsToBeSlit > +this.selectedMRNDetails[0]?.totalRoll) {
            this.toastService.warning("No. of Rolls to be Processed Should be less than Selected Input Roll/s # !");
            this.noOfRollsToBeSlit = 0;
            this.sqmToBeProcessed = 0;
            this.selectedMRNDetails[0].roll = this.selectedMRNDetails[0]?.totalRoll;
            this.selectedMRNDetails[0].closedIRQty = this.selectedMRNDetails[0].totalClosedIRQty;
            return;
        }
        if (this.noOfRollsToBeSlit) {
            this.sqmToBeProcessed = +this.noOfRollsToBeSlit * +this.selectedMRNDetails[0]?.SQM;
            this.selectedMRNDetails[0].closedIRQty = +this.selectedMRNDetails[0].totalClosedIRQty - +this.sqmToBeProcessed;
            this.selectedMRNDetails[0].roll = +(this.selectedMRNDetails[0]?.totalRoll - this.noOfRollsToBeSlit).toFixed(
                2
            );
        }

        this.calTotalFn();
    }

    setRecoveryDetails(item: any, index: number) {
        if (!this.noOfRollsToBeSlit) {
            this.toastService.error(" No. of Rolls to be Processed must be greater than zero ");
            return;
        }
        if (item.width > this.selectedMRNDetails[0]?.width) {
            this.toastService.error("Width must be less than Selected Input width ");
            this.outputDetails[index].width = 0;
            return;
        }
        if (item.length > this.selectedMRNDetails[0]?.length) {
            this.toastService.error("Length must be less than Selected Input length ");
            this.outputDetails[index].length = 0;
            return;
        }
        // let length = this.totalAddition(
        //     this.outputDetails.map((y: any) => +y.length),
        //     2
        // );
        // if (length > +this.selectedMRNDetails[0]?.length * +this.noOfRollsToBeSlit) {
        //     this.toastService.error("Length must be less than Selected Input Length ");
        //     this.outputDetails[index].length = 0;
        //     return;
        // }

        this.outputDetails[index].closedIRQty = +(+item?.roll * +item?.SQM).toFixed(2);
        this.outputDetails[index].SQM = +((+item?.width / 1000) * +item?.length).toFixed(2);
        this.calTotalFn();
    }

    totalAddition(itemDetails: any, decimalDigit: number) {
        return itemDetails.reduce((a: number, c: number) => +a + +c, 0).toFixed(+decimalDigit);
    }

    calTotalFn() {
        this.recovery = this.totalAddition(
            this.outputDetails.map((y: any) => +y.closedIRQty),
            2
        );

        this.recoveryPercentage =
            this.sqmToBeProcessed == 0 ? 0 : +((+this.recovery * 100) / this.sqmToBeProcessed).toFixed(2);
        if (+this.recoveryPercentage > 100) {
            this.toastService.error("Recovery should not be greater than 100% !!");
        }
        this.wastage = +(+this.sqmToBeProcessed - +this.recovery).toFixed(2);
        this.wastagePercentage =
            this.sqmToBeProcessed == 0 ? 0 : +((this.wastage * 100) / this.sqmToBeProcessed).toFixed(2);
        if (+this.wastagePercentage > 100) {
            this.toastService.error("Wastage should not be greater than 100% !!");
        }
    }

    submit() {
        this.calTotalFn();
        // [disabled]=" !(recoveryPercentage > 100) && !(wastagePercentage < 0) && recoveryPercentage +
        // wastagePercentage != 100 "
        if (+this.recoveryPercentage > 100 || +this.recoveryPercentage < 0) {
            this.toastService.error("Recovery must be between 0 and 100% !!");
            return;
        }
        if (+this.wastagePercentage > 100 || +this.wastagePercentage < 0) {
            this.toastService.error("Wastage must be between 0 and 100% !!");
            return;
        }
        if (this.outputDetails.length == 0) {
            this.toastService.error("Output Details must be atleast one row!!");
            return;
        }
        if (this.noOfRollsToBeSlit < 1) {
            this.toastService.error("No. of Rolls to be Processed must be greater than zero !!");
            return;
        }
        let formData: any = {
            selectedMRNDetails: this.selectedMRNDetails,
            outputDetails: this.outputDetails,
            stockPreparation: this.stockPreparation,
            remarksDetails: this.remarksDetails,
            noOfRollsToBeSlit: this.noOfRollsToBeSlit,
            sqmToBeProcessed: this.sqmToBeProcessed,
            recovery: this.recovery,
            recoveryPercentage: this.recoveryPercentage,
            wastage: this.wastage,
            wastagePercentage: this.wastagePercentage
        };
        if (formData) {
            this.spinner.show();
            this.rollToRollConversionService.create(formData).subscribe(success => {
                this.spinner.hide();
                this.toastService.success(success.message);
                this.location.back();
            });
        }
    }

    reset() {
        this.outputDetails = JSON.parse(JSON.stringify(this.selectedMRNDetails)).map((x: any) => {
            x.closedIRQty = 0;
            x.width = 0;
            x.length = 0;
            x.SQM = 0;
            x.roll = 0;
            x.shelfLife = x.shelfLife;
            return x;
        });
        this.noOfRollsToBeSlit = 0;
        this.sqmToBeProcessed = 0;
        this.calTotalFn();
    }

    openRemarksDetailsModal() {
        const modalRef = this.modalService.open(RollToRollRemarksComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.remarksDetails = this.remarksDetails;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.remarksDetails = success;
                }
            },
            (reason: any) => {}
        );
    }
}
