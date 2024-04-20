exports.getAllGoodsTransferRequestAttributes = () => {
    return {
        GTRequestNo: 1,
        GTRequestDate: {$dateToString: {format: "%d-%m-%Y", date: "$GTRequestDate"}},
        location: 1,
        fromDepartment: 1,
        toDepartment: 1,
        status: 1
    };
};
