import {Pipe, PipeTransform} from "@angular/core";
import {AppGlobalService, StorageService} from "@core/services";

@Pipe({
    name: "CustomerAndSupplierCurrency"
})
export class CustomerAndSupplierCurrencyMasterPipe implements PipeTransform {
    currencySymbol: any = "₹";
    constructor(private appGlobalService: AppGlobalService, private storageService: StorageService) {
        this.currencySymbol = this.storageService.get("IDMSAUser")?.currencySymbol ?? "₹";
    }

    transform(value: any, replaceValue: any = ""): string {
        return this.getLabel(value) ?? this.currencySymbol;
    }

    private getLabel(value: string): string | undefined {
        const {currencyMaster} = this.appGlobalService;
        if (!currencyMaster) {
            return value;
        }
        let neValue = currencyMaster.find((ele: any) => ele.currencyName == value)?.symbol;
        return neValue;
    }
}
