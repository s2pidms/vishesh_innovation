import { ISKUList } from "@mocks/models/quality/master";
import {ICostSheetList} from "./SKUMasterMasterData";

export interface ICostEstimateCalculatorMasterData {
    costSheetList: ICostSheetList[];
    SKUOptions: ISKUList[]
}
