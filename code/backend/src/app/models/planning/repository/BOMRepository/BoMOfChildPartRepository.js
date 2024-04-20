const Model = require("../../billOfMaterialModels/BoMOfChildPartModel");
module.exports = {
    createBoMOfChildPart: async obj => {
        return await Model.create(obj);
    },
    findOneBoMOfChildPart: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllBoMOfChildPartAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateBoMOfChildPart: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteBoMOfChildPart: async match => {
        return await Model.deleteOne(match);
    },
    filteredBoMOfChildPartList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
