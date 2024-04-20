const Model = require("../saleHSNModel");

module.exports = {
    createSaleHSN: async obj => {
        return await Model.create(obj);
    },
    findOneSaleHSN: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllSaleHSNAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateSaleHSN: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteSaleHSN: async match => {
        return await Model.deleteOne(match);
    },
    filteredSaleHSNList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
