const {outputData} = require("../../../helpers/utility");
const Model = require("../roleModel");

module.exports = {
    createRole: async role => {
        return await Model.create(role);
    },
    bulkCreateRoles: async roles => {
        return await Model.insertMany(roles);
    },
    getAllRoleList: async pipeline => {
        let rows = await Model.aggregate(pipeline);
        return {...outputData(rows)};
    },
    getRoleById: async (roleId, options = {}) => {
        return await Model.findById(roleId, options);
    },
    updateRole: async (existing, updateBody) => {
        Object.assign(existing, updateBody);
        return existing.save();
    },
    deleteRole: async deleteItem => {
        return await deleteItem.remove();
    },
    findRole: async (match, project = {}) => {
        return await Model.find(match, project);
    },
    findOneRole: async (match, project = {}) => {
        return await Model.findOne(match, project);
    }
};
