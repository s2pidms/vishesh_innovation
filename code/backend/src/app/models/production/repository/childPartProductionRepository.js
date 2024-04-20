const Model = require("../childPartProductionModel");
module.exports = {
    createChildPartProd: async obj => {
        return await Model.create(obj);
    },
    findOneChildPartProd: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllChildPartProdAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateChildPartProd: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteChildPartProd: async match => {
        return await Model.deleteOne(match);
    },
    filteredChildPartProdList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
