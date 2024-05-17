const {ObjectId} = require("../../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../../helpers/messages.options");
const {getAllPackingAttributes} = require("../../../../../models/production/helpers/packingHelper");
const PackingRepository = require("../../../../../models/production/repository/packingRepository");
const {getAllModuleMaster} = require("../../../settings/module-master/module-master");
const {filteredSKUMasterList} = require("../../../../../models/sales/repository/SKUMasterRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllPackingAttributes();
        let pipeline = [{$match: {company: ObjectId(req.user.company)}}];
        let rows = await PackingRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.createOrUpdate = asyncHandler(async (req, res) => {
    try {
        let exists = await PackingRepository.findOneDoc({
            jobCard: req.body.jobCard,
            SKU: req.body.SKU
        });
        if (exists) {
            exists.updatedBy = req.user.sub;
            exists = await PackingRepository.updateDoc(exists, req.body);
        } else {
            let createdObj = {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub,
                ...req.body
            };
            await PackingRepository.createDoc(createdObj);
        }
        res.success({
            message: MESSAGES.apiSuccessStrings.ADDED("Packing")
        });
    } catch (e) {
        console.error("create Packing", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        let packing = {};
        packing = await PackingRepository.findOneDoc({
            jobCard: ObjectId(req.query.jobCard),
            SKU: ObjectId(req.query.SKU)
        });
        if (!packing) {
            rows = await filteredSKUMasterList([
                {
                    $match: {
                        _id: ObjectId(req.query.SKU)
                    }
                },
                {
                    $sort: {SKUNo: 1}
                },
                {
                    $project: {
                        jobCard: req.query.jobCard,
                        jobCardNo: req.query.jobCardNo,
                        SKU: "$_id",
                        SKUNo: 1,
                        SKUName: 1,
                        SKUDescription: 1,
                        logDetails: {
                            prodSource: {$literal: null},
                            prodDate: {$literal: null},
                            prodShift: {$literal: null},
                            operatingStaff: {$literal: null},
                            remarks: {$literal: null},
                            authorizedBy: {$literal: null}
                        }
                    }
                }
            ]);
            packing = rows.length ? rows[0] : null;
        }
        const shiftOptions = await getAllModuleMaster(req.user.company, "PRODUCTION_SHIFT");
        return res.success({
            packingLog: packing,
            shiftOptions
        });
    } catch (error) {
        console.error("getAllMasterData Packing", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
