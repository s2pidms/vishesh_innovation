import {ProcessMaster} from "@mocks/models/planning/masters";
import {IProductCategorySpecificationList} from "../../quality/master/ProductCategorySpecificationsMasterData";

export interface IPSByProductCategoryMasterData {
    autoIncrementNo: string;
    productCategoryOptions: IProductCategorySpecificationList[];
    processMasterList: ProcessMaster[];
}
