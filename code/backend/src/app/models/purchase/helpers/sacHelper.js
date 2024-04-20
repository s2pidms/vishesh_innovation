exports.getAllSACAttributes = () => {
    return {
        sacCode: 1,
        serviceDescription: 1,
        gstRate: 1,
        igstRate: 1,
        sgstRate: 1,
        cgstRate: 1,
        ugstRate: 1,
        revisionNo: "$revision.revisionNo",
        revisionDate: {$dateToString: {format: "%d-%m-%Y", date: "$revision.revisionDate"}},
        createdAt: 1
    };
};
