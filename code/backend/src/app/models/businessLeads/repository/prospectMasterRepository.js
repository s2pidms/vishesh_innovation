const Model = require("../prospectMasterModel");
module.exports = {
    createProspectMaster: async prospect => {
        return Model.create(prospect);
    },
    getAllProspectMasterAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    getProspectMasterById: async (prospectId, options = {}) => {
        return Model.findById(prospectId, options);
    },
    updateProspectMaster: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteProspectMaster: async deleteItem => {
        return await deleteItem.remove();
    },
    findOneProspectMaster: async (match, project) => {
        return await Model.findOne(match, project);
    },
    filteredProspectList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
