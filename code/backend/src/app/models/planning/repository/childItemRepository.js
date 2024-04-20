const Model = require("../childItemMasterModel");

module.exports = {
    createChildItem: async obj => {
        return await Model.create(obj);
    },
    findOneChildItem: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    findOneAndUpdateChildItem: async (match, update) => {
        return await Model.findOneAndUpdate(match, update);
    },
    getAllChildItemAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateChildItem: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteChildItem: async match => {
        return await Model.deleteOne(match);
    },
    filteredChildItemList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
