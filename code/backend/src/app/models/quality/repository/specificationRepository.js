const Model = require("../specificationModel");
module.exports = {
    filteredSpecificationList: async pipeline => {
        return Model.aggregate(pipeline);
    },
    getAllSpecificationAggregate: async ({pipeline, project, queryParams}) => {
        const rows = await Model.paginate({pipeline, project, queryParams});
        return rows;
    }
};
