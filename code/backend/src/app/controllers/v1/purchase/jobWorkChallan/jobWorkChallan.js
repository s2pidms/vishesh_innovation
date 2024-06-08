const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {
    getAllJobWorkChallanAttributes,
    getAllJobWorkChallanReportsAttributes
} = require("../../../../models/purchase/helpers/jobWorkChallanHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {JOB_WORK_CHALLAN} = require("../../../../mocks/schemasConstant/purchaseConstant");
const JobWorkChallanRepository = require("../../../../models/purchase/repository/jobWorkChallanRepository");
const {filteredJobWorkerMasterList} = require("../../../../models/purchase/repository/jobWorkerMasterRepository");
const {getAllTransporter} = require("../../sales/transporter/transporter");
const {filteredSACMasterList} = require("../../../../models/purchase/repository/sacRepository");
const {filteredJobWorkItemMasterList} = require("../../../../models/purchase/repository/jobWorkItemMasterRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {CONSTANTS} = require("../../../../../config/config");
const {getStartDateTime, getEndDateTime} = require("../../../../helpers/dateTime");
const {filteredItemList} = require("../../../../models/purchase/repository/itemRepository");
const {getAllCheckedItemCategoriesList} = require("../itemCategoryMaster/itemCategoryMaster");
const {purchaseUOMPipe} = require("../../settings/UOMUnitMaster/UOMUnitMaster");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllJobWorkChallanAttributes();
        let pipeline = [
            {$match: {company: ObjectId(req.user.company), status: {$nin: [OPTIONS.defaultStatus.REPORT_GENERATED]}}}
        ];
        let rows = await JobWorkChallanRepository.getAllPaginate({
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
        const itemDetails = await JobWorkChallanRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Job Work Challan")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Job Work Challan", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await JobWorkChallanRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await JobWorkChallanRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Job Work Challan has been")
        });
    } catch (e) {
        console.error("update Job Work Challan", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await JobWorkChallanRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Job Work Challan")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Challan");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Job Work Challan", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await JobWorkChallanRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Challan");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Job Work Challan", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getByIdForPDF = asyncHandler(async (req, res) => {
    try {
        let existing = await JobWorkChallanRepository.filteredJobWorkChallanList([
            {
                $match: {
                    _id: ObjectId(req.params.id)
                }
            },
            {
                $lookup: {
                    from: "Company",
                    localField: "company",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                _id: 1,
                                companyName: 1,
                                companyBillingAddress: 1,
                                GSTIN: 1,
                                companySignatureUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$companySignature"]}
                            }
                        }
                    ],
                    as: "company"
                }
            },
            {$unwind: "$company"}
        ]);
        if (!existing.length) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Challan");
            return res.unprocessableEntity(errors);
        } else {
            existing = await getPDFData(existing[0]);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Job Work Challan", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
const getPDFData = async JWChallanData => {
    try {
        JWChallanData = JSON.parse(JSON.stringify(JWChallanData));
        let GSTCondition = false;
        GSTCondition = JWChallanData?.company?.GSTIN.substring(0, 2) != JWChallanData?.GSTINNo?.substring(0, 2);
        for (const ele of JWChallanData.JWChallanDetails) {
            ele.UOM = await purchaseUOMPipe(ele.UOM, JWChallanData.company._id);
            ele.lineValueWithTax = 0;
            if (GSTCondition) {
                ele.IGSTAmt = (+ele.igst * +ele.taxableAmt) / 100;
                ele.lineValueWithTax = +ele.taxableAmt + +ele.IGSTAmt;
                ele.CGSTAmt = 0;
                ele.SGSTAmt = 0;
            } else {
                ele.IGSTAmt = 0;
                ele.CGSTAmt = (+ele.cgst * +ele.taxableAmt) / 100;
                ele.SGSTAmt = (+ele.sgst * +ele.taxableAmt) / 100;
                ele.lineValueWithTax = +ele.taxableAmt + +ele.CGSTAmt + +ele.SGSTAmt;
            }
        }
        JWChallanData.totalCGSTAmt = Math.round(
            JWChallanData?.JWChallanDetails?.reduce((total, item) => total + (+item.CGSTAmt || 0), 0) || 0
        );
        JWChallanData.totalIGSTAmt = Math.round(
            JWChallanData?.JWChallanDetails?.reduce((total, item) => total + (+item.IGSTAmt || 0), 0) || 0
        );
        JWChallanData.totalSGSTAmt = Math.round(
            JWChallanData?.JWChallanDetails?.reduce((total, item) => total + (+item.SGSTAmt || 0), 0) || 0
        );
        JWChallanData.totalAmtWithTax = Math.round(
            JWChallanData?.JWChallanDetails?.reduce((total, item) => total + (+item.lineValueWithTax || 0), 0) || 0
        );
        return JWChallanData;
    } catch (error) {
        console.error("getPDFData Job Work Challan", error);
    }
};
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            JOB_WORK_CHALLAN.AUTO_INCREMENT_DATA(),
            req.user.company,
            false
        );
        const jobWorkerOptions = await filteredJobWorkerMasterList([
            {
                $match: {company: ObjectId(req.user.company)}
            },
            {
                $addFields: {
                    additionalPlacesOfBusiness: {
                        $map: {
                            input: "$additionalPlacesOfBusiness",
                            as: "details",
                            in: {
                                $mergeObjects: [
                                    "$$details",
                                    {
                                        addressType: {
                                            $concat: [
                                                "A",
                                                {
                                                    $toString: {
                                                        $add: [
                                                            {
                                                                $indexOfArray: [
                                                                    "$additionalPlacesOfBusiness",
                                                                    "$$details"
                                                                ]
                                                            },
                                                            2
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "primaryAddress.addressType": "Primary Address"
                }
            },
            {
                $project: {
                    jobWorkerCode: 1,
                    jobWorker: "$_id",
                    jobWorkerName: 1,
                    currency: 1,
                    primaryAddress: 1,
                    GSTINNo: 1,
                    additionalPlacesOfBusiness: {
                        $concatArrays: [["$primaryAddress"], "$additionalPlacesOfBusiness"]
                    },
                    state: "$primaryAddress.state",
                    cityOrDistrict: "$primaryAddress.cityOrDistrict",
                    pinCode: "$primaryAddress.pinCode"
                }
            }
        ]);
        const transporterOptions = await getAllTransporter(
            {
                company: ObjectId(req.user.company)
            },
            {label: "$name", value: "$name", _id: 0}
        );
        const SACOptions = await filteredSACMasterList([
            {$match: {company: ObjectId(req.user.company), isActive: "Y"}},
            {$sort: {sacMasterEntryNo: -1}},
            {
                $project: {
                    SAC: "$_id",
                    SACCode: "$sacCode",
                    gst: "$gstRate",
                    igst: "$igstRate",
                    cgst: "$sgstRate",
                    sgst: "$cgstRate",
                    ugst: "$ugstRate",
                    descriptionOfService: "$serviceDescription"
                }
            }
        ]);
        const freightTermsOptions = await getAllModuleMaster(req.user.company, "FREIGHT_TERMS");
        const modeOfTransportOptions = await findAppParameterValue("MODE_OF_TRANSPORT", req.user.company);
        return res.success({
            autoIncrementNo,
            jobWorkerOptions,
            transporterOptions,
            SACOptions,
            freightTermsOptions,
            modeOfTransportOptions: modeOfTransportOptions.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (error) {
        console.error("getAllMasterData Job Work Challan", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllJobWorkerItemsOptions = asyncHandler(async (req, res) => {
    try {
        const JWItemsOptions = await filteredJobWorkItemMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $unwind: "$jobWorkerDetails"
            },
            {
                $match: {
                    "jobWorkerDetails.jobWorker": ObjectId(req.query.jobWorkerId)
                }
            },
            {
                $project: {
                    jobWorkItemCode: 1,
                    jobWorkItemName: 1,
                    jobWorkItemDescription: 1,
                    orderInfoUOM: 1,
                    partNo: "$jobWorkerDetails.partNo",
                    partName: "$jobWorkerDetails.partName"
                }
            },
            {$sort: {jobWorkItemCode: 1}}
        ]);
        let itemCategoriesList = await getAllCheckedItemCategoriesList({
            categoryStatus: OPTIONS.defaultStatus.ACTIVE,
            BOM: true
        });
        itemCategoriesList = itemCategoriesList?.map(x => x?.category);
        const JWItemsList = await filteredItemList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    isActive: "A",
                    itemType: {$in: itemCategoriesList}
                }
            },
            {
                $addFields: {
                    supplierDetails: {$first: "$supplierDetails"}
                }
            },
            {
                $unwind: {
                    path: "$supplierDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 0,
                    JWLChallanLineNo: {$literal: 0},
                    item: "$_id",
                    itemCode: "$itemCode",
                    itemName: "$itemName",
                    itemDescription: "$itemDescription",
                    UOM: "$orderInfoUOM",
                    primaryToSecondaryConversion: 1,
                    primaryUnit: 1,
                    secondaryUnit: 1,
                    conversionOfUnits: 1,
                    currency: "$supplierDetails.supplierCurrency",
                    HSNCode: "$hsn",
                    gst: 1,
                    igst: 1,
                    cgst: 1,
                    sgst: 1,
                    ugst: 1,
                    unitRate: "$supplierDetails.stdCostUom1",
                    stdCostUom1: "$supplierDetails.stdCostUom1",
                    stdCostUom2: "$supplierDetails.stdCostUom2",
                    quantity: {$literal: 0},
                    taxableAmt: {$literal: 0}
                }
            },
            {$sort: {itemCode: 1}}
        ]);

        return res.success({JWItemsOptions, JWItemsList});
    } catch (error) {
        console.error("getAllMasterData Job Work Challan", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const jobWorkerOptions = await filteredJobWorkerMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $project: {jobWorkerName: 1}
            }
        ]);
        const {jobWorker = null, toDate = null, fromDate = null} = req.query;
        let query = {
            company: ObjectId(req.user.company),
            status: {$in: [OPTIONS.defaultStatus.REPORT_GENERATED]},
            ...(!!jobWorker && {
                jobWorker: ObjectId(jobWorker)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    JWChallanDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let project = getAllJobWorkChallanReportsAttributes();
        let pipeline = [
            {
                $match: query
            }
        ];

        let rows = await JobWorkChallanRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success({...rows, jobWorkerOptions});
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
