const {
    updatePermissionsOnSubModuleManagementCreate
} = require("../controllers/v1/settings/subModulePermissions/subModulePermissions");
const SubModuleRepository = require("../models/settings/repository/subModuleRepository");
const subModuleJson = require("../utilities/module");

exports.subModuleInsert = async function () {
    try {
        for await (const ele of subModuleJson) {
            const oldItem = await SubModuleRepository.findOneDoc({
                menuItemId: ele.menuItemId,
                type: ele.type,
                title: ele.title
            });
            if (!oldItem) {
                const subModuleCreatedObj = await SubModuleRepository.createDoc(ele);
                await updatePermissionsOnSubModuleManagementCreate(subModuleCreatedObj);
            } else {
                const {order, isDisplay, displayName, disabled, items, roles, ...rest} = ele;
                if (items && items.length && oldItem.items && oldItem.items.length) {
                    rest.items = items.map(x => {
                        const obj = oldItem.items.find(y => y && y.title == x.title);
                        if (obj) {
                            x.order = obj.order;
                            x.isDisplay = obj.isDisplay;
                            x.displayName = obj.displayName;
                            x.disabled = obj.disabled;
                        }
                        return x;
                    });
                }
                // if (oldItem.module == "Business Leads" && oldItem.title == "Prospect Master") {
                //     console.log("oldItem", oldItem, "rest", rest);
                // }
                await SubModuleRepository.updateDoc(oldItem, rest);
            }
        }
        console.info("SubModule updated successfully!!");
    } catch (error) {
        throw new Error(error);
    }
};
