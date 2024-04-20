export interface CapitalGoods {
    _id: string;
    capitalGoodsNo: string;
    capitalGoodsName: string;
    capitalGoodsDescription: string;
    capitalGoodsSpecification: string;
    UOM: string;
    createdAt?: string;
    technicalSheetFile?: string;
    hsnCode: string;
    technicalSheetFileUrl?: string;
    supplierPartNo?: string;
    currency?: string;
    purchaseCost?: number;
}
