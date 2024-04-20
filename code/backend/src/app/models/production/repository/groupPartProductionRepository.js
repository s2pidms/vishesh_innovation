const Model = require("../groupPartProductionModel");
module.exports = {
    createGroupPartProd: async obj => {
        return await Model.create(obj);
    },
    findOneGroupPartProd: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllGroupPartProdAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateGroupPartProd: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteGroupPartProd: async match => {
        return await Model.deleteOne(match);
    },
    filteredGroupPartProdList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
