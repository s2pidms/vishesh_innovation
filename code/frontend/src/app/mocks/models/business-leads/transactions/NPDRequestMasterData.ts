export interface INPDRequestMasterData {
    autoIncrementNo: string;
    customers: ICustomers[];
    productCategory: ICommonData[];
    buildStage: ICommonData[];
    orderType: ICommonData[];
    developmentCharges: ICommonData[];
    checklistParticularsList: IChecklistParticularsList[];
}
export interface ICustomers {
    _id: string;
    name: string;
    type: string;
    currency: string;
}
export interface ICommonData {
    label: string;
    value: string;
}
export interface IChecklistParticularsList {
    inputCheckListParticular: string;
    name: string;
    order: number;
    isChecked: boolean;
}
