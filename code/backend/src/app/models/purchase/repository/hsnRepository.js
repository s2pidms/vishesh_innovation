const Model = require("../hsnModel");
module.exports = {
    createHSN: async obj => {
        return await Model.create(obj);
    },
    findOneHSN: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllPaginate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateHSN: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteHSN: async match => {
        return await Model.deleteOne(match);
    },
    filteredHSNList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
