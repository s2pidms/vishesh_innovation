const Model = require("../itemCategoryModel");
module.exports = {
    createItemCategory: async obj => {
        return await Model.create(obj);
    },
    findOneItemCategory: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllPaginate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateItemCategory: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteItemCategory: async match => {
        return await Model.deleteOne(match);
    },
    filteredItemCategoryList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
