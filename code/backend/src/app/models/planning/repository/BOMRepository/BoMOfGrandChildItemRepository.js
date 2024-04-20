const Model = require("../../billOfMaterialModels/BoMOfGrandChildItemModel");

module.exports = {
    createBoMOfGrandChildItem: async obj => {
        return await Model.create(obj);
    },
    findOneBoMOfGrandChildItem: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllBoMOfGrandChildItemAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateBoMOfGrandChildItem: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteBoMOfGrandChildItem: async match => {
        return await Model.deleteOne(match);
    },
    filteredBoMOfGrandChildItemList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
