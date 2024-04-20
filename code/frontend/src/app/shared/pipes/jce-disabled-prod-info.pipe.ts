import {Pipe, PipeTransform} from "@angular/core";
import {StorageService} from "@core/services";
import {IProcessNameList, ProdInfo} from "@mocks/models/production/transactions";
@Pipe({
    name: "JCEDisabledProdInfo"
})
export class JCEDisabledProdInfoPipe implements PipeTransform {
    companyCurrency: string = "";
    constructor(private storageService: StorageService) {
        this.companyCurrency = this.storageService.get("IDMSAUser")?.currencySymbol;
    }
    transform(JCEntryDetailsList: IProcessNameList[], seq: number) {
        if (JCEntryDetailsList.length > 0) {
            seq = seq - 1;
            if (seq == 0) return false;
            let data: IProcessNameList | undefined = JCEntryDetailsList?.find((x: IProcessNameList) => x.seq == seq);
            if (data == undefined) return true;
            if (data.production?.prodInfo?.length == 0) return true;
            let condition = !data.production?.prodInfo?.every((s: ProdInfo) => s.prodStatus);
            return condition;
        }
        return true;
    }
}
