const Model = require("../serviceMasterModel");
module.exports = {
    createServiceMaster: async obj => {
        return await Model.create(obj);
    },
    findOneServiceMaster: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllPaginate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateServiceMaster: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteServiceMaster: async match => {
        return await Model.deleteOne(match);
    },
    filteredServiceMasterList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
