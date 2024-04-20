exports.getAllSaleHSNAttributes = () => {
    return {
        hsnCode: 1,
        goodsDescription: 1,
        gstRate: 1,
        igstRate: 1,
        sgstRate: 1,
        cgstRate: 1,
        ugstRate: 1,
        createdAt: 1
    };
};
exports.getAllSaleHSNExcelAttributes = () => {
    return {
        hsnCode: 1,
        goodsDescription: 1,
        gstRate: 1,
        igstRate: 1,
        sgstRate: 1,
        cgstRate: 1,
        ugstRate: 1,
        revisionNo: "$revision.revisionNo",
        revisionDate: {$dateToString: {format: "%d-%m-%Y", date: "$revision.revisionDate"}}
    };
};
