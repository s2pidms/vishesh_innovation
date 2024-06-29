const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const ProcessListConfigRepository = require("../../../../models/settings/repository/processListConfigRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let rows = await ProcessListConfigRepository.filteredProcessListConfigList([
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            },
            {
                $project: {
                    SN: 1,
                    processName: 1,
                    source: 1
                }
            }
        ]);
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.createOrUpdate = asyncHandler(async (req, res) => {
    try {
        await ProcessListConfigRepository.deleteManyDoc({});
        let docArray = req.body.map(ele => {
            ele.company = req.user.company;
            ele.createdBy = req.user.sub;
            ele.updatedBy = req.user.sub;
            return ele;
        });
        await ProcessListConfigRepository.insertManyDoc(docArray);
        res.success({
            message: MESSAGES.apiSuccessStrings.ADDED(`Process list Config`)
        });
    } catch (e) {
        console.error(`Process list Config`, e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
