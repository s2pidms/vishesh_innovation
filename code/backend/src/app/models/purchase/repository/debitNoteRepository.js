const Model = require("../debitNoteModel");
module.exports = {
    createDebitNote: async obj => {
        return await Model.create(obj);
    },
    findOneDebitNote: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllPaginate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateDebitNote: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteDebitNote: async match => {
        return await Model.deleteOne(match);
    },
    filteredDebitNoteList: async pipeline => {
        return await Model.aggregate(pipeline);
    },
    getAllReportsPaginate: async reportAggregateObj => {
        const rows = await Model.reportPaginate(reportAggregateObj);
        return rows;
    }
};
