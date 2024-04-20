exports.getAllRMSpecificationAttributes = () => {
    return {
        rmSpecificationCode: 1,
        itemCategory: 1,
        itemCode: "$item.itemCode",
        itemName: "$item.itemName",
        itemDescription: "$item.itemDescription",
        UOM: "$item.UOM",
        status: 1
    };
};
