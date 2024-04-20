const Model = require("../labelMasterModel");

module.exports = {
    createLabelMaster: async obj => {
        return await Model.create(obj);
    },
    findOneLabelMaster: async (match, project = {}) => {
        return await Model.findOne(match, project);
    },
    updateLabelMaster: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    }
};
