const Model = require("../rmSpecificationModel");
module.exports = {
    createDoc: async obj => {
        return await Model.create(obj);
    },
    insertManyDoc: async docArray => {
        return await Model.insertMany(docArray);
    },
    findOneDoc: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getDocById: async (id, project = {}) => {
        return await Model.findById(id, project);
    },
    getAllPaginate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    getAllReportsPaginate: async reportAggregateObj => {
        const rows = await Model.reportPaginate(reportAggregateObj);
        return rows;
    },
    updateDoc: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteDoc: async match => {
        return await Model.deleteOne(match);
    },
    filteredRMSpecificationList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
