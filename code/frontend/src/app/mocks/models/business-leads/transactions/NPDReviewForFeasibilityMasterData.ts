export interface INPDReviewForFeasibilityMasterData {
    autoIncrementNo: string;
    NPDOptions: INPDOptions[];
    technicalQuestionnaire: TechnicalQuestionnaire[];
}

export interface INPDOptions {
    _id: string;
    NPDNo: string;
    NPDDate: string;
    name?: string;
    projectName: string;
    productCategory: string;
}
export interface TechnicalQuestionnaire {
    _id: string;
    data: Data[];
}

export interface Data {
    technicalQuestionnaire: string;
    orderNo: number;
    questionnaire: string;
}
