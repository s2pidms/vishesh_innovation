import {Pipe, PipeTransform} from "@angular/core";
import {AppGlobalService} from "@core/services";

@Pipe({
    name: "SalesUOMUnitMaster"
})
export class SalesUOMUnitsMasterPipe implements PipeTransform {
    constructor(private appGlobalService: AppGlobalService) {}

    transform(value: any, replaceValue: any = ""): string {
        return this.getLabel(value) ?? value;
    }

    private getLabel(value: string): string | undefined {
        const {salesUOMUintMasterOptions} = this.appGlobalService;
        if (!salesUOMUintMasterOptions) {
            return value;
        }
        let neValue = salesUOMUintMasterOptions.find((ele: any) => ele.value == value)?.label;
        return neValue;
    }
}
