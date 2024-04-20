exports.getAllMRNAttributes = () => {
    return {
        GRNNumber: "$GRNNumber.GRNNumber",
        supplierName: "$supplier.supplierName",
        MRNNumber: 1,
        MRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDate"}},
        GRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$GRNNumber.GRNDate"}},
        supplierInvoice: 1,
        supplierDate: {$dateToString: {format: "%d-%m-%Y", date: "$supplierDate"}},
        // batchDateS: 1,
        deliveryLocation: 1,
        GRNRemarks: 1,
        MRNRemarks: 1,
        MRNStatus: 1,
        createdAt: 1
    };
};
exports.getAllMRNReportsAttributes = () => {
    return {
        GRNNumber: "$GRNNumber.GRNNumber",
        supplierName: "$supplier.supplierName",
        MRNNumber: 1,
        MRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDate"}},
        GRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$GRNNumber.GRNDate"}},
        supplierInvoice: 1,
        supplierDate: {$dateToString: {format: "%d-%m-%Y", date: "$supplierDate"}},
        // batchDateS: 1,
        deliveryLocation: 1,
        GRNRemarks: 1,
        MRNRemarks: 1,
        MRNStatus: 1,
        createdAt: 1
    };
};
exports.getAllSupplierWiseReportsAttributes = () => {
    return {
        MRNNumber: 1,
        MRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDate"}},
        GRNNumber: "$GRNNumber.GRNNumber",
        GRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$GRNNumber.GRNDate"}},
        supplierName: "$supplier.supplierName",
        supplierDate: {$dateToString: {format: "%d-%m-%Y", date: "$supplierDate"}},
        supplierInvoice: 1,
        MRNStatus: 1,
        createdAt: 1,
        company: 1
    };
};
exports.getAllItemWiseReportsAttributes = () => {
    return {
        MRNNumber: 1,
        MRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDate"}},
        GRNNumber: "$GRNNumber.GRNNumber",
        GRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$GRNNumber.GRNDate"}},
        supplierName: "$supplier.supplierName",
        supplierDate: {$dateToString: {format: "%d-%m-%Y", date: "$supplierDate"}},
        supplierInvoice: 1,
        MRNStatus: 1,
        createdAt: 1,
        company: 1,
        itemName: "$MRNDetails.item.itemName",
        itemCode: "$MRNDetails.item.itemCode",
        itemDescription: "$MRNDetails.item.itemDescription",
        batchNo: "$MRNDetails.batchNo",
        batchDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDetails.batchDate"}},
        UOM: "$MRNDetails.UOM",
        GRNQty: "$MRNDetails.GRNQty",
        releasedQty: "$MRNDetails.releasedQty",
        rejectedQty: "$MRNDetails.rejectedQty"
    };
};

exports.getAllRawMaterialInspectionReportsAttributes = () => {
    return {
        MRNNumber: 1,
        MRNDate: {$dateToString: {format: "%d-%m-%Y", date: "$MRNDate"}},
        supplierName: "$supplier.supplierName",
        GRNNumber: "$GRNNumber.GRNNumber",
        MRNStatus: 1
    };
};
