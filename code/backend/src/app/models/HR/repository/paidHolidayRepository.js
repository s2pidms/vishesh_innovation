const Model = require("../paidHolidayModel");
module.exports = {
    createPaidHoliday: async obj => {
        return await Model.create(obj);
    },
    findOnePaidHoliday: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    getAllPaidHolidayAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    },
    updatePaidHoliday: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deletePaidHoliday: async match => {
        return await Model.deleteOne(match);
    },
    filteredPaidHolidayList: async pipeline => {
        return await Model.aggregate(pipeline);
    }
};
