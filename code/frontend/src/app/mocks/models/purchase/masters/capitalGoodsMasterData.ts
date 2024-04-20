import {ICommonData} from "@mocks/models/business-leads/transactions";
import {ISuppliers} from "./itemMasterData";

export interface ICapitalGoodsMasterData {
    autoIncrementNo: string;
    suppliersOptions: ISuppliers[];
    UOMOptions: ICommonData[];
    hsnCodes: ICapitalGoodsHSNCodes[];
}

export interface ICapitalGoodsHSNCodes {
    _id: string;
    hsnCode: string;
}
