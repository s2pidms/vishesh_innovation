const {OPTIONS} = require("../../../helpers/global.options");

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
exports.getAllSOForJCAttributes = () => {
    return {
        SONumber: 1,
        customerId: "$customer._id",
        SOId: "$_id",
        SODate: {$dateToString: {format: "%d-%m-%Y", date: "$SODate"}},
        SKUId: "$SODetails.SKU._id",
        SKUName: "$SODetails.SKU.SKUName",
        SKUNo: "$SODetails.SKU.SKUNo",
        drawing: "$SODetails.SKU.drawing",
        SKUDescription: "$SODetails.SKU.SKUDescription",
        UOM: "$SODetails.UOM",
        customerName: {
            $cond: [
                {$and: ["$customer.customerNickName", {$ne: ["$customer.customerNickName", ""]}]},
                "$customer.customerNickName",
                "$customer.customerName"
            ]
        },
        balanceQty: "$SODetails.JCCQty",
        FGINQty: {$ifNull: ["$FGIN.FGINQuantity", 0]},
        inProcessQty: {$ifNull: ["$jobCardCreation.inProcessQty", 0]},
        jobCardCreation: 1,
        status: {
            $cond: [
                "$jobCardCreation.status",
                {
                    $cond: [
                        {$eq: ["$jobCardCreation.status", OPTIONS.defaultStatus.REPORT_GENERATED]},
                        OPTIONS.defaultStatus.IN_PROGRESS,
                        OPTIONS.defaultStatus.AWAITING_APPROVAL
                    ]
                },
                OPTIONS.defaultStatus.INACTIVE
            ]
        }
    };
};
