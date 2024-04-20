import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {MaterialReleaseNoteService} from "@services/quality";
import {ActivatedRoute, Router} from "@angular/router";
import {MRNDetails} from "@interfaces/MRNDetails";

import {mergeMap, of} from "rxjs";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

@Component({
    selector: "app-mrnprint",
    templateUrl: "./mrnprint.component.html",
    styleUrls: ["./mrnprint.component.scss"]
})
export class MrnprintComponent implements OnInit {
    submitted = false;
    btnFlag = false;
    action: string = "create";
    MRNDetailsArray: MRNDetails[] = [];
    pdfAction: any = "";

    supplierOptions: any = [];
    GRNFilter: any = [];
    supplierInvoice: any = [];
    items: any = [];
    filterItems: any = [];
    statusArr: any = {
        create: "Created",
        edit: "Partially Released",
        partialRelease: "Partially Released",
        generate: "Report Generated",
        release: "Released",
        rejected: "Closed"
    };
    rejectFlag: boolean = false;
    releasedFlag: boolean = false;
    partialRFlag: boolean = false;
    MRNReleasedBy: any = "";
    MRNRemark: any = "";

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        MRNNumber: new UntypedFormControl("", [Validators.required]),
        MRNDate: new UntypedFormControl(""),
        GRNNumber: new UntypedFormControl(null),
        supplier: new UntypedFormControl(""),
        supplierInvoice: new UntypedFormControl(""),
        supplierDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        MRNStatus: new UntypedFormControl("Partially Released", [Validators.required]),
        MRNDetails: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    buttonCondition: any = "true";
    constructor(
        private router: Router,
        private materialReleaseNoteService: MaterialReleaseNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private elementRef: ElementRef,
        private utilityService: UtilityService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    @HostListener("window:keydown", ["$event"])
    onKeyDown(event: KeyboardEvent): void {
        if (
            (event.ctrlKey && event.key === "p" && this.buttonCondition == "false") ||
            (event.key === "P" && this.buttonCondition == "false")
        ) {
            event.preventDefault();
        }
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    windowPrint() {
        window.print();
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    // set action
                    this.action = params.action;
                    this.pdfAction = params.action;
                    this.buttonCondition = params.buttonCondition;
                    if (params["id"]) {
                        // get patch data
                        return this.materialReleaseNoteService.getMRNDetailsById(params["id"]);
                    } else {
                        return of({});
                    }
                })
            )
            .subscribe((success: any) => {
                this.spinner.hide();
                if (Object.keys(success).length == 0) {
                    return;
                }
                // patch all forms fields
                this.MRNDetailsArray = success.MRNDetails.map((ele: any, idx: number) => {
                    return {
                        MRNLineNumber: ele?.MRNLineNumber,
                        item: ele.item._id,
                        grnLineNumber: ele.grnLineNumber,
                        poLineNumber: ele.poLineNumber,
                        itemCode: ele.item.itemCode,
                        itemName: ele.item.itemName,
                        itemDescription: ele.item.itemDescription,
                        batchNo: ele.batchNo,
                        batchDate: this.utilityService.getFormatDate(ele.batchDate, "YYYY-MM-DD"),
                        UOM: ele.UOM,
                        GRNQty: ele.GRNQty ?? 0,
                        balancedQty: ele.balancedQty,
                        standardRate: ele.standardRate,
                        purchaseRate: ele.purchaseRate,
                        rejectedQty: ele.rejectedQty,
                        releasedQty: ele.releasedQty
                    };
                });
                success.supplierDate = this.utilityService.getFormatDate(success.supplierDate, "YYYY-MM-DD");
                success.MRNDate = this.utilityService.getFormatDate(success.MRNDate, "YYYY-MM-DD");
                success.GRNNumber = success.GRNNumber.GRNNumber;
                success.supplier = success.supplier.supplierName;

                success.MRNStatus = this.statusArr[this.action];
                this.MRNReleasedBy = success.createdBy.name;
                this.MRNRemark = success.MRNRemarks;
                this.form.patchValue(success);
                this.form.disable();
            });
        //set menu header values
        this.menuTitleService.set({
            title: "Material Release Note [MRN]",
            subTitle: null,
            type: this.action
        });
    }
}
