exports.getAllJobWorkChallanAttributes = () => {
    return {
        JWChallanNo: 1,
        JWChallanDate: {$dateToString: {format: "%d-%m-%Y", date: "$JWChallanDate"}},
        jobWorkerName: 1,
        currency: 1,
        placeOfSupply: 1,
        totalTaxableAmt: 1,
        status: 1
    };
};
exports.getAllJobWorkChallanReportsAttributes = () => {
    return {
        JWChallanNo: 1,
        JWChallanDate: {$dateToString: {format: "%d-%m-%Y", date: "$JWChallanDate"}},
        jobWorkerName: 1,
        currency: 1,
        placeOfSupply: 1,
        totalTaxableAmt: 1,
        status: 1
        
    };
};
