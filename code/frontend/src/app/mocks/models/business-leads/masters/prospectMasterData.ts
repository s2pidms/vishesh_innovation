import {ICommonData} from "../transactions";

export interface ProspectMasterData {
    autoIncrementNo: string;
    salesCategoryOptions: ICommonData[];
    currenciesOptions: ICommonData[];
}
