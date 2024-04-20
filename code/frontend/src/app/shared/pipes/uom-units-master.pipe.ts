import {Pipe, PipeTransform} from "@angular/core";
import {AppGlobalService} from "@core/services";

@Pipe({
    name: "UOMUnitsMaster"
})
export class UOMUnitsMasterPipe implements PipeTransform {
    constructor(private appGlobalService: AppGlobalService) {}

    transform(value: any, replaceValue: any = ""): string {
        return this.getLabel(value) ?? value;
    }

    private getLabel(value: string): string | undefined {
        const {UOMUintMasterOptions} = this.appGlobalService;
        if (!UOMUintMasterOptions) {
            return value;
        }
        let neValue = UOMUintMasterOptions.find((ele: any) => ele.value == value)?.label;
        return neValue;
    }
}
