const Model = require("../directTaxInvoiceModel");
module.exports = {
    createDirectTaxInvoice: async obj => {
        return await Model.create(obj);
    },
    findOneDirectTaxInvoice: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllDirectTaxInvoiceAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updateDirectTaxInvoice: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteDirectTaxInvoice: async match => {
        return await Model.deleteOne(match);
    },
    filteredDirectTaxInvoiceList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
