const Model = require("../salesServiceMasterModel");
module.exports = {
    createSalesServiceMaster: async obj => {
        return await Model.create(obj);
    },
    findOneSalesServiceMaster: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllSalesServiceMasterAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateSalesServiceMaster: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteSalesServiceMaster: async match => {
        return await Model.deleteOne(match);
    },
    filteredSalesServiceMasterList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
