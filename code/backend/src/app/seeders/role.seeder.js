const rolesJson = require("../mocks/roles.json");
const {updateCacheRoles} = require("../controllers/v1/settings/role/role");
const {findOneRole, createRole, updateRole} = require("../models/settings/repository/roleRepository");

exports.roleInsert = async function (companyId) {
    try {
        for await (const ele of rolesJson) {
            ele.company = companyId;
            const role = await findOneRole({roleName: ele.roleName}, {});
            if (!role) {
                await createRole(ele);
            } else {
                const {displayName, redirectTo, ...updatedProps} = ele;
                await updateRole(role, updatedProps);
            }
        }
        await updateCacheRoles(companyId, true);
        console.info("Role updated successfully!!");
    } catch (error) {
        throw new Error(error);
    }
};
