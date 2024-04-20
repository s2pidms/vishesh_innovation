export interface NPDReviewForFeasibility {
    _id: string;
    NPDNo: string;
    name: string;
    productCategory: string;
    projectName: string;
    isReportGenerated?: boolean;
    createdAt?: string;
    NPDDate: string;
    expectedDeliveryDate?: string;
    customerInputs?: CustomerInputs;
    technicalReview?: TechnicalReview2;
    economicReview?: EconomicReview;
    legalReview?: LegalReview;
    operationalReview?: OperationalReview;
    schedulingReview?: SchedulingReview;
    status: string;
}

export interface CustomerInputs {
    reviewNo?: string;
    reviewDate?: string;
    reviewBy?: string;
    status?: string;
    technicalReview?: TechnicalReview[];
    _id?: any;
}

export interface TechnicalReview {
    technicalQuestionnaire?: string;
    orderNo?: number;
    questionnaire?: string;
    isChecked?: boolean;
    remarks?: string;
    _id?: string;
}

export interface TechnicalReview2 {
    reviewNo?: string;
    reviewDate?: string;
    reviewBy?: string;
    status?: string;
    technicalReview?: TechnicalReview3[];
    _id?: any;
}

export interface TechnicalReview3 {
    technicalQuestionnaire?: string;
    orderNo?: number;
    questionnaire?: string;
    isChecked?: boolean;
    remarks?: string;
    _id?: string;
}

export interface EconomicReview {
    reviewNo?: string;
    reviewDate?: string;
    reviewBy?: string;
    status?: string;
    technicalReview?: TechnicalReview4[];
    _id?: any;
}

export interface TechnicalReview4 {
    technicalQuestionnaire?: string;
    orderNo?: number;
    questionnaire?: string;
    isChecked?: boolean;
    remarks?: string;
    _id?: string;
}

export interface LegalReview {
    reviewNo?: string;
    reviewDate?: string;
    reviewBy?: string;
    status?: string;
    technicalReview?: TechnicalReview5[];
    _id?: any;
}

export interface TechnicalReview5 {
    technicalQuestionnaire?: string;
    orderNo?: number;
    questionnaire?: string;
    isChecked?: boolean;
    remarks?: string;
    _id?: string;
}

export interface OperationalReview {
    reviewNo?: string;
    reviewDate?: string;
    reviewBy?: string;
    status?: string;
    technicalReview?: TechnicalReview6[];
    _id?: any;
}

export interface TechnicalReview6 {
    technicalQuestionnaire?: string;
    orderNo?: number;
    questionnaire?: string;
    isChecked?: boolean;
    remarks?: string;
    _id?: string;
}

export interface SchedulingReview {
    reviewNo?: string;
    reviewDate?: string;
    reviewBy?: string;
    status?: string;
    technicalReview?: TechnicalReview7[];
    _id?: any;
}

export interface TechnicalReview7 {
    technicalQuestionnaire?: string;
    orderNo?: number;
    questionnaire?: string;
    isChecked?: boolean;
    remarks?: string;
    _id?: string;
}
