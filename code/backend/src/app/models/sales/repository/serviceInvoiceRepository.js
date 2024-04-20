const Model = require("../serviceInvoiceModel");
module.exports = {
    createServiceInvoice: async obj => {
        return await Model.create(obj);
    },
    findOneServiceInvoice: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllServiceInvoiceAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateServiceInvoice: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteServiceInvoice: async match => {
        return await Model.deleteOne(match);
    },
    filteredServiceInvoiceList: async pipeline => {
        return await Model.aggregate(pipeline);
    },
    getAllReportsPaginate: async reportAggregateObj => {
        const rows = await Model.reportPaginate(reportAggregateObj);
        return rows;
    }
};
