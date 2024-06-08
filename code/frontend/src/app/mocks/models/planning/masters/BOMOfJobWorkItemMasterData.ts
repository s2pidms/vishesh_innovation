export interface IBOMOfJobWorkItemMasterData {
    autoIncrementNo: string;
    jobWorkItemOptions: IJobWorkItemOptions[];
}

export interface IJobWorkItemOptions {
    _id: string;
    jobWorkItemCode: string;
    jobWorkItemName: string;
    jobWorkItemDescription: string;
    orderInfoUOM: string;
}
