const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllJobWorkItemMasterAttributes} = require("../../../../models/purchase/helpers/jobWorkItemMasterHelper");
const JobWorkItemMasterRepository = require("../../../../models/purchase/repository/jobWorkItemMasterRepository");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {filteredHSNList} = require("../../../../models/purchase/repository/hsnRepository");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {filteredJobWorkerMasterList} = require("../../../../models/purchase/repository/jobWorkerMasterRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const {getIncrementNumWithPrefix} = require("../../../../helpers/utility");
const {filteredItemCategoryList} = require("../../../../models/purchase/repository/itemCategoryRepository");
const {getAllItemCategory} = require("../itemCategoryMaster/itemCategoryMaster");
const validationJson = require("../../../../mocks/excelUploadColumn/validation.json");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllJobWorkItemMasterAttributes();
        let pipeline = [{$match: {company: ObjectId(req.user.company)}}];
        let rows = await JobWorkItemMasterRepository.getAllPaginate({
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

exports.create = asyncHandler(async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const itemDetails = await JobWorkItemMasterRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Job Work Item Master")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Job Work Item Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await JobWorkItemMasterRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await JobWorkItemMasterRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Job Work Item Master has been")
        });
    } catch (e) {
        console.error("update Job Work Item Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await JobWorkItemMasterRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Job Work Item Master")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Item Master");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Job Work Item Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await JobWorkItemMasterRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Item Master");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Job Work Item Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const options = await dropDownOptions(req.user.company);
        let autoIncValues = {};
        if (options.itemCategories.length > 0) {
            for (const ele of options.itemCategories) {
                autoIncValues[ele.category] = getIncrementNumWithPrefix({
                    modulePrefix: ele.prefix,
                    autoIncrementValue: ele.nextAutoIncrement,
                    digit: ele.digit
                });
            }
            options.itemCategories = options.itemCategories.map(x => x.category);
        }
        let WXLDimensionsUnit = await findAppParameterValue("WXL_DIMENSIONS_UNIT", req.user.company);
        return res.success({
            autoIncValues,
            WXLDimensionsUnit,
            ...options
        });
    } catch (error) {
        console.error("getAllMasterData Job Work Item Master", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
const dropDownOptions = async company => {
    try {
        const jobWorkerOptions = await filteredJobWorkerMasterList([
            {
                $match: {
                    company: ObjectId(company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {$sort: {jobWorkerName: 1}},
            {
                $project: {
                    label: "$jobWorkerName",
                    value: "$_id",
                    currency: "$currency",
                    jobWorkerCode: 1,
                    state: "$primaryAddress.state",
                    cityOrDistrict: "$primaryAddress.cityOrDistrict",
                    pinCode: "$primaryAddress.pinCode"
                }
            }
        ]);
        const QCLevelsOptions = await getAllModuleMaster(company, "QUALITY_CONTROL_LEVEL");
        const HSNCodesList = await filteredHSNList([
            {$match: {company: ObjectId(company), isActive: "Y"}},
            {$sort: {createdAt: -1}},
            {
                $project: {
                    label: {$concat: ["$hsnCode", "$goodsDescription"]},
                    value: "$hsnCode",
                    hsnCode: 1,
                    goodsDescription: 1,
                    gstRate: 1,
                    igstRate: 1,
                    cgstRate: 1,
                    sgstRate: 1,
                    ugstRate: 1
                }
            }
        ]);
        const itemCategories = await getAllItemCategory(company);
        return {
            jobWorkerOptions,
            QCLevelsOptions,
            HSNCodesList,
            itemCategories
        };
    } catch (error) {
        console.error(error);
    }
};
exports.checkJobWorkItemsValidation = async (jobWorkItemData, column, company) => {
    try {
        const jobWorkItemOptions = await JobWorkItemMasterRepository.filteredJobWorkItemMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $project: {
                    jobWorkItemName: 1,
                    jobWorkItemDescription: 1
                }
            }
        ]);
        const requiredFields = [
            "itemCategory",
            "jobWorkItemName",
            "jobWorkItemDescription",
            "orderInfoUOM",
            "primaryUnit",
            "HSNCode",
            "shelfLife",
            "QCLevels"
        ];
        const falseArr = OPTIONS.falsyArray;
        let {jobWorkerOptions, QCLevelsOptions, HSNCodesList, itemCategories} = await dropDownOptions(company);
        let dropdownCheck = [
            {
                key: "itemCategory",
                options: itemCategories.map(x => {
                    return {
                        label: x.category,
                        value: x.category
                    };
                })
            },
            {
                key: "HSNCode",
                options: HSNCodesList.map(x => {
                    return {
                        label: x.label,
                        value: x.value
                    };
                })
            },
            {
                key: "QCLevels",
                options: QCLevelsOptions
            },
            {
                key: "jobWorkerName",
                options: jobWorkerOptions.map(x => {
                    return {
                        label: x.label,
                        value: x.label
                    };
                })
            }
        ];

        for await (const x of jobWorkItemData) {
            x.isValid = true;
            x.message = null;
            for (const ele of Object.values(column)) {
                if (requiredFields.includes(ele) && falseArr.includes(x[ele])) {
                    x.isValid = false;
                    x.message = validationJson[ele] ?? `${ele} is Required`;
                    break;
                }
                for (const dd of dropdownCheck) {
                    if (ele == dd.key && !dd.options.map(values => values.value).includes(x[ele])) {
                        x.isValid = false;
                        x.message = `${ele} is Invalid Value & Value Must be ${dd.options.map(values => values.value)}`;
                        break;
                    }
                }
                for (const ele of jobWorkItemOptions) {
                    if (
                        ele.jobWorkItemName == x["jobWorkItemName"] &&
                        ele.itemDescription == x["jobWorkItemDescription"]
                    ) {
                        x.isValid = false;
                        x.message = `${x["jobWorkItemName"]} already exists`;
                        break;
                    }
                }
            }
        }
        const inValidRecords = jobWorkItemData.filter(x => !x.isValid);
        const validRecords = jobWorkItemData.filter(x => x.isValid);
        return {inValidRecords, validRecords};
    } catch (error) {
        console.error(error);
    }
};
exports.bulkInsertJobWorkItemsByCSV = async (jsonData, {company, createdBy, updatedBy}) => {
    try {
        const jobWorkerOptions = await filteredJobWorkerMasterList([
            {
                $match: {
                    company: ObjectId(company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $project: {
                    jobWorkerName: 1
                }
            }
        ]);
        const HSNCodesList = await filteredHSNList([
            {$match: {company: ObjectId(req.user.company), isActive: "Y"}},
            {
                $project: {
                    HSN: "$_id",
                    HSNCode: 1,
                    gstRate: 1,
                    igstRate: 1,
                    cgstRate: 1,
                    sgstRate: 1,
                    ugstRate: 1
                }
            }
        ]);
        for (const ele of jsonData) {
            const HSNObj = await HSNCodesList.find(x => ele.HSNCode == x.HSN);
            if (HSNObj) {
                ele.gst = HSNObj.gstRate;
                ele.igst = HSNObj.igstRate;
                ele.sgst = HSNObj.cgstRate;
                ele.cgst = HSNObj.sgstRate;
                ele.ugst = HSNObj.ugstRate;
                ele.jobWorker = null;
                for (const supp of jobWorkerOptions) {
                    if (supp.jobWorkerName == ele.jobWorkerName.trim()) {
                        ele.jobWorker = supp._id.valueOf();
                    }
                }
            }
        }

        let jobWorkItemData = jsonData.map(x => {
            const {jobWorkerName, partNo, currency, stdCostUom1, jobWorker, partName, ...rest} = x;
            let details = {
                jobWorkerName,
                partNo,
                currency,
                stdCostUom1,
                jobWorker,
                partName
            };
            rest.jobWorkerDetails = [details];
            rest.company = company;
            rest.createdBy = createdBy;
            rest.updatedBy = updatedBy;
            return rest;
        });
        for await (const item of jobWorkItemData) {
            await JobWorkItemMasterRepository.createDoc(item);
        }
        return {message: "Uploaded successfully!"};
    } catch (error) {
        console.error(error);
    }
};
