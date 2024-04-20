const Model = require("../salesDebitNoteModel");
module.exports = {
    createSalesDebitNote: async obj => {
        return await Model.create(obj);
    },
    findOneSalesDebitNote: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllSalesDebitNoteAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateSalesDebitNote: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteSalesDebitNote: async match => {
        return await Model.deleteOne(match);
    },
    filteredSalesDebitNoteList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
