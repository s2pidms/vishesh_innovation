import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IAssetMasterData {
    assetClassOptions: IAssetClassOptions[];
    assetConfigurationOptions: IParameterICommonData[];
    locationOptions: ICommonData[];
}

export interface IAssetClassOptions {
    _id: string;
    assetClassName: string;
    depreciation: boolean;
    energySpecification: boolean;
}
