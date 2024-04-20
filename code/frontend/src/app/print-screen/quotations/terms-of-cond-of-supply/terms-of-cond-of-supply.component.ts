import {Component, ElementRef, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SalesOrderService} from "@services/sales";
import {AppParameterService} from "@services/settings";
import {SpinnerService} from "@core/services";
import {SharedModule} from "@shared/shared.module";

@Component({
    selector: "app-terms-of-cond-of-supply",
    standalone: true,
    imports: [SharedModule],
    templateUrl: "./terms-of-cond-of-supply.component.html",
    styleUrls: ["./terms-of-cond-of-supply.component.scss"]
})
export class TermsOfCondOfSupplyComponent implements OnInit {
    @Input() termsAndCondOfQuotation: any = [];
    @Input() tableData: any = {};
    @Input() display: any = {};
    @Input() buttonCondition: any = "true";
    constructor(
        private saleService: SalesOrderService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef,
        private appParameterService: AppParameterService
    ) {}

    ngOnInit(): void {}
    windowPrint() {
        window.print();
    }
}
