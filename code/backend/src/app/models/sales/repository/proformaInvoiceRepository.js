const Model = require("../proformaInvoiceModel");
module.exports = {
    createProformaInvoice: async obj => {
        return await Model.create(obj);
    },
    findOneProformaInvoice: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllProformaInvoiceAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateProformaInvoice: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteProformaInvoice: async match => {
        return await Model.deleteOne(match);
    },
    filteredProformaInvoiceList: async pipeline => {
        return await Model.aggregate(pipeline);
    },
    getAllReportsPaginate: async reportAggregateObj => {
        const rows = await Model.reportPaginate(reportAggregateObj);
        return rows;
    }
};
