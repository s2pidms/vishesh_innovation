exports.getAllJobCardAttributes = () => {
    return {
        jobCardNo: 1,
        SKUNo: "$_id.SKUNo",
        _id: "$_id.jobCardNoId",
        batchQty: 1,
        jobCardDate: 1,
        customerNickName: 1,
        SKUName: 1,
        SKUDescription: 1,
        UOM: 1,
        status: 1
    };
};

exports.getAllJobCardReportAttributes = () => {
    return {
        jobCardNo: 1,
        SKUNo: "$_id.SKUNo",
        _id: "$_id.jobCardNoId",
        batchQty: 1,
        jobCardDate: 1,
        customerNickName: 1,
        SKUName: 1,
        SKUDescription: 1,
        UOM: 1,
        status: 1,
        orderType: 1
    };
};
