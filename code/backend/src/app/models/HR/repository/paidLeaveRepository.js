const Model = require("../paidLeavesModel");

module.exports = {
    findOnePaidLeave: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    updatePaidLeave: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    getAllPaidLeaveAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    findAndUpdatePaidLeave: async (match, update, options = {}) => {
        return await Model.findOneAndUpdate(match, update, options);
    }
};
