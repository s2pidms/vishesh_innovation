const path = require("path");
const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/settings/companyModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {findAppParameterValue} = require("../appParameter/appParameter");
const {removeFile, removeFilesInError} = require("../../../../helpers/utility");
const {CONSTANTS} = require("../../../../../config/config");
const {getAllDepartments} = require("../department/department");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const fileHandler = require("../../../../utilities/fileHandler");
const excelJson = require("../../../../mocks/excelUploadColumn/index");
const {checkSupplierValidation, bulkInsertSupplierByCSV} = require("../../purchase/suppliers/suppliers");
const {bulkInsertItemsByCSV, checkItemsValidation} = require("../../purchase/items/items");
const {bulkInsertCustomersByCSV, checkCustomersValidation} = require("../../sales/customerMaster/customerMaster");
const {
    checkSKUDimensionValidation,
    bulkInsertSKUDimByCSV,
    checkSKUMaterialValidation,
    bulkInsertSKUMaterialByCSV,
    checkSKUInkValidation,
    bulkInsertSKUInkByCSV
} = require("../../sales/SKU/SKUAttributes");
const {
    bulkInsertInventoryByCSV,
    checkInventoryValidation,
    checkPPICInventoryValidation,
    bulkInsertPPICInventoryByCSV
} = require("../../stores/Inventory/Inventory");
const {checkSKUValidation, bulkInsertSKUByCSV} = require("../../sales/SKU/SKU");
const {
    checkFGINValidation,
    bulkInsertFGINByCSV
} = require("../../stores/finishedGoodsInwardEntry/finishedGoodsInwardEntry");
const {checkEmployeeValidation, bulkInsertEmployeeByCSV} = require("../../HR/employee/Employee");
const {checkAssetValidation, bulkInsertAssetByCSV} = require("../../finance/assetMaster/assetMaster");
const {
    checkSpecificationMasterValidation,
    bulkInsertSpecificationMasterByCSV
} = require("../../quality/specificationMaster/specificationMaster");
const {checkPurchaseHSNMasterValidation, bulkInsertPurchaseHSNMasterByCSV} = require("../../purchase/HSN/HSN");
const {bulkInsertPurchaseSACMasterByCSV, checkPurchaseSACMasterValidation} = require("../../purchase/SAC/SAC");
const {checkSalesHSNMasterValidation, bulkInsertSalesHSNMasterByCSV} = require("../../sales/salesHSN/salesHSN");
const {checkSalesSACMasterValidation, bulkInsertSalesSACMasterByCSV} = require("../../sales/salesSAC/salesSAC");
const {
    bulkInsertTransporterMasterByCSV,
    checkTransporterMasterValidation
} = require("../../sales/transporter/transporter");
const {bulkInsertJobWorkerByCSV, checkJobWorkerValidation} = require("../../purchase/jobWorkerMaster/jobWorkerMaster");
const {
    bulkInsertPurchaseRegisterEntryByCSV,
    checkPurchaseRegisterEntryValidation
} = require("../../accounts/purchaseRegisterEntry/purchaseRegisterEntry");
const {
    checkJobWorkItemsValidation,
    bulkInsertJobWorkItemsByCSV
} = require("../../purchase/jobWorkItemMaster/jobWorkItemMaster");
const ObjectId = mongoose.Types.ObjectId;
exports.getAll = asyncHandler(async (req, res) => {
    try {
        const {search = null} = req.query;
        let query = {
            company: ObjectId(req.user.company),
            ...(![undefined, null, ""].includes(search) && {$text: {$search: search}})
        };
        let rows = await getAllData(req, query);
        rows = JSON.parse(JSON.stringify(rows));
        for (const ele of rows[0].placesOfBusiness) {
            if (ele.SOPdfHeader) {
                ele.SOPdfHeaderUrl = CONSTANTS.domainUrl + "company/" + ele.SOPdfHeader;
            }
            if (ele.SOSignature) {
                ele.SOSignatureUrl = CONSTANTS.domainUrl + "company/" + ele.SOSignature;
            }
            if (ele.PISignature) {
                ele.PISignatureUrl = CONSTANTS.domainUrl + "company/" + ele.PISignature;
            }
            if (ele.TISignature) {
                ele.TISignatureUrl = CONSTANTS.domainUrl + "company/" + ele.TISignature;
            }
        }
        let count = await Model.countDocuments(query);
        let constitutionOfBusiness = await findAppParameterValue("CONSTITUTION_OF_BUSINESS", req.user.company);
        let compDepartments = await getAllDepartments(req.user.company, {
            label: "$departmentName",
            value: "$departmentName",
            _id: 0
        });
        let location = await findAppParameterValue("LOCATION", req.user.company);
        let GSTClassifications = await findAppParameterValue("GST_CLASSIFICATION", req.user.company);
        // let template = await findAppParameterValue("TEMPLATE", req.user.company);
        let PODomestic = await findAppParameterValue("PO_DOMESTIC_TEMPLATE", req.user.company);
        let POImport = await findAppParameterValue("PO_IMPORTS_TEMPLATE", req.user.company);
        let PIDomestic = await findAppParameterValue("PI_DOMESTIC_TEMPLATE", req.user.company);
        let PIExports = await findAppParameterValue("PI_EXPORTS_TEMPLATE", req.user.company);
        let TIDomestic = await findAppParameterValue("TI_DOMESTIC_TEMPLATE", req.user.company);
        let TIExports = await findAppParameterValue("TI_EXPORTS_TEMPLATE", req.user.company);
        // let companyType = await findAppParameterValue("COMPANY_TYPE", req.user.company);
        let companyType = await getAllModuleMaster(req.user.company, "COMPANY_TYPE");
        let currencies = await findAppParameterValue("Currency", req.user.company);

        return res.success({
            constitutionOfBusiness: constitutionOfBusiness.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            compDepartments: compDepartments,
            location: location.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            // template: template.split(",").map(x => {
            //     return {
            //         label: x,
            //         value: x,
            //     };
            // }),
            PODomestic: PODomestic.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            POImport: POImport.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            PIDomestic: PIDomestic.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            PIExports: PIExports.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            TIDomestic: TIDomestic.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            TIExports: TIExports.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            GSTClassifications: GSTClassifications.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            companyType,
            // companyType: companyType.split(",").map(x => {
            //     return {
            //         label: x,
            //         value: x
            //     };
            // }),
            currencies: currencies.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            rows,
            count
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.create = asyncHandler(async (req, res) => {
    try {
        let createdObj = {
            //  company: req.user.company,
            // createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        if (createdObj.companyAddress) {
            createdObj.companyAddress = JSON.parse(createdObj.companyAddress);
        }
        if (req.files) {
            if (req.files.LUTDocumentFile && req.files.LUTDocumentFile.length > 0) {
                createdObj.exportsDetails["LUTDocument"] = req.files.LUTDocumentFile[0].filename;
            }
            if (req.files.companyPdfHeaderFile && req.files.companyPdfHeaderFile.length > 0) {
                createdObj["companyPdfHeader"] = req.files.companyPdfHeaderFile[0].filename;
            }
            if (req.files.SOPdfHeaderFile && req.files.SOPdfHeaderFile.length > 0) {
                createdObj["SOPdfHeader"] = req.files.SOPdfHeaderFile[0].filename;
            }
            if (req.files.registerOfficePOHeaderFile && req.files.registerOfficePOHeaderFile.length > 0) {
                createdObj["registerOfficePOHeader"] = req.files.registerOfficePOHeaderFile[0].filename;
            }
            if (req.files.registerOfficeSOHeaderFile && req.files.registerOfficeSOHeaderFile.length > 0) {
                createdObj["registerOfficeSOHeader"] = req.files.registerOfficeSOHeaderFile[0].filename;
            }
            if (req.files.factoryPOHeaderFile && req.files.factoryPOHeaderFile.length > 0) {
                createdObj["factoryPOHeader"] = req.files.factoryPOHeaderFile[0].filename;
            }
            if (req.files.factorySOHeaderFile && req.files.factorySOHeaderFile.length > 0) {
                createdObj["factorySOHeader"] = req.files.factorySOHeaderFile[0].filename;
            }
            if (req.files.companySignatureFile && req.files.companySignatureFile.length > 0) {
                createdObj["companySignature"] = req.files.companySignatureFile[0].filename;
            }
            if (req.files.SOSignatureFile && req.files.SOSignatureFile.length > 0) {
                createdObj["SOSignature"] = req.files.SOSignatureFile[0].filename;
            }
            if (req.files.logoFile && req.files.logoFile.length > 0) {
                createdObj["logo"] = req.files.logoFile[0].filename;
            }
            if (req.files.landingPageHeaderFile && req.files.landingPageHeaderFile.length > 0) {
                createdObj["landingPageHeader"] = req.files.landingPageHeaderFile[0].filename;
            }
            if (req.files.welcomeInfoFile && req.files.welcomeInfoFile.length > 0) {
                createdObj["welcomeInfo"] = req.files.welcomeInfoFile[0].filename;
            }
            if (req.files.PISignatureFile && req.files.PISignatureFile.length > 0) {
                createdObj["PISignature"] = req.files.PISignatureFile[0].filename;
            }
            if (req.files.TISignatureFile && req.files.TISignatureFile.length > 0) {
                createdObj["TISignature"] = req.files.TISignatureFile[0].filename;
            }
        }
        const saveObj = new Model(createdObj);
        const itemDetails = await saveObj.save();
        if (itemDetails) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Company")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        if (req.files) {
            removeFilesInError(req.files.companyPdfHeaderFile);
            removeFilesInError(req.files.SOPdfHeaderFile);
            removeFilesInError(req.files.registerOfficePOHeaderFile);
            removeFilesInError(req.files.registerOfficeSOHeaderFile);
            removeFilesInError(req.files.factoryPOHeaderFile);
            removeFilesInError(req.files.factorySOHeaderFile);
            removeFilesInError(req.files.companySignatureFile);
            removeFilesInError(req.files.SOSignatureFile);
            removeFilesInError(req.files.logoFile);
            removeFilesInError(req.files.landingPageHeaderFile);
            removeFilesInError(req.files.welcomeInfoFile);
            removeFilesInError(req.files.PISignatureFile);
            removeFilesInError(req.files.TISignatureFile);
        }
        res.serverError(errors);
        console.error(e);
    }
});
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);

        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        if (req.body.contactInfo) {
            req.body.contactInfo = JSON.parse(req.body.contactInfo);
        }

        if (req.body.placesOfBusiness) {
            req.body.placesOfBusiness = JSON.parse(req.body.placesOfBusiness);
        }
        if (req.body.exportsDetails) {
            req.body.exportsDetails = JSON.parse(req.body.exportsDetails);
        }
        if (req.body.companyBillingAddress) {
            req.body.companyBillingAddress = JSON.parse(req.body.companyBillingAddress);
        }
        if (req.body.accountsDetails) {
            req.body.accountsDetails = JSON.parse(req.body.accountsDetails);
        }
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (req.body.contactInfo) {
            itemDetails.contactInfo = req.body.contactInfo;
        }
        if (req.body.placesOfBusiness) {
            itemDetails.placesOfBusiness = req.body.placesOfBusiness;
        }
        if (req.body.exportsDetails) {
            itemDetails.exportsDetails = req.body.exportsDetails;
        }
        if (req.files) {
            if (req.files.companyPdfHeaderFile && req.files.companyPdfHeaderFile.length > 0) {
                if (itemDetails.companyPdfHeader) {
                    removeFile(`${req.files.companyPdfHeaderFile[0].destination}/${itemDetails.companyPdfHeader}`);
                }
                itemDetails.companyPdfHeader = req.files.companyPdfHeaderFile[0].filename;
            }
            if (req.files.LUTDocumentFile && req.files.LUTDocumentFile.length > 0) {
                if (itemDetails.exportsDetails.LUTDocument) {
                    removeFile(`${req.files.LUTDocumentFile[0].destination}/${itemDetails.exportsDetails.LUTDocument}`);
                }
                itemDetails.exportsDetails.LUTDocument = req.files.LUTDocumentFile[0].filename;
            }
            if (req.files.SOPdfHeaderFile && req.files.SOPdfHeaderFile.length > 0) {
                if (itemDetails.SOPdfHeader) {
                    removeFile(`${req.files.SOPdfHeaderFile[0].destination}/${itemDetails.SOPdfHeader}`);
                }
                itemDetails.SOPdfHeader = req.files.SOPdfHeaderFile[0].filename;
            }
            if (req.files.registerOfficePOHeaderFile && req.files.registerOfficePOHeaderFile.length > 0) {
                if (itemDetails.registerOfficePOHeader) {
                    removeFile(
                        `${req.files.registerOfficePOHeaderFile[0].destination}/${itemDetails.registerOfficePOHeader}`
                    );
                }
                itemDetails.registerOfficePOHeader = req.files.registerOfficePOHeaderFile[0].filename;
            }
            if (req.files.registerOfficeSOHeaderFile && req.files.registerOfficeSOHeaderFile.length > 0) {
                if (itemDetails.registerOfficeSOHeader) {
                    removeFile(
                        `${req.files.registerOfficeSOHeaderFile[0].destination}/${itemDetails.registerOfficeSOHeader}`
                    );
                }
                itemDetails.registerOfficeSOHeader = req.files.registerOfficeSOHeaderFile[0].filename;
            }
            if (req.files.factoryPOHeaderFile && req.files.factoryPOHeaderFile.length > 0) {
                if (itemDetails.factoryPOHeader) {
                    removeFile(`${req.files.factoryPOHeaderFile[0].destination}/${itemDetails.factoryPOHeader}`);
                }
                itemDetails.factoryPOHeader = req.files.factoryPOHeaderFile[0].filename;
            }
            if (req.files.factorySOHeaderFile && req.files.factorySOHeaderFile.length > 0) {
                if (itemDetails.factorySOHeader) {
                    removeFile(`${req.files.factorySOHeaderFile[0].destination}/${itemDetails.factorySOHeader}`);
                }
                itemDetails.factorySOHeader = req.files.factorySOHeaderFile[0].filename;
            }
            if (req.files.companySignatureFile && req.files.companySignatureFile.length > 0) {
                if (itemDetails.companySignature) {
                    removeFile(`${req.files.companySignatureFile[0].destination}/${itemDetails.companySignature}`);
                }
                itemDetails.companySignature = req.files.companySignatureFile[0].filename;
            }
            if (req.files.SOSignatureFile && req.files.SOSignatureFile.length > 0) {
                if (itemDetails.SOSignature) {
                    removeFile(`${req.files.SOSignatureFile[0].destination}/${itemDetails.SOSignature}`);
                }
                itemDetails.SOSignature = req.files.SOSignatureFile[0].filename;
            }
            if (req.files.logoFile && req.files.logoFile.length > 0) {
                if (itemDetails.logo) {
                    removeFile(`${req.files.logoFile[0].destination}/${itemDetails.logo}`);
                }
                itemDetails.logo = req.files.logoFile[0].filename;
            }
            if (req.files.landingPageHeaderFile && req.files.landingPageHeaderFile.length > 0) {
                if (itemDetails.landingPageHeader) {
                    removeFile(`${req.files.landingPageHeaderFile[0].destination}/${itemDetails.landingPageHeader}`);
                }
                itemDetails.landingPageHeader = req.files.landingPageHeaderFile[0].filename;
            }
            if (req.files.welcomeInfoFile && req.files.welcomeInfoFile.length > 0) {
                if (itemDetails.welcomeInfo) {
                    removeFile(`${req.files.welcomeInfoFile[0].destination}/${itemDetails.welcomeInfo}`);
                }
                itemDetails.welcomeInfo = req.files.welcomeInfoFile[0].filename;
            }
        }
        itemDetails = await itemDetails.save();
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Company has been")
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        if (req.files) {
            removeFilesInError(req.files.companyPdfHeaderFile);
            removeFilesInError(req.files.SOPdfHeaderFile);
            removeFilesInError(req.files.registerOfficePOHeaderFile);
            removeFilesInError(req.files.registerOfficeSOHeaderFile);
            removeFilesInError(req.files.factoryPOHeaderFile);
            removeFilesInError(req.files.factorySOHeaderFile);
            removeFilesInError(req.files.companySignatureFile);
            removeFilesInError(req.files.SOSignatureFile);
            removeFilesInError(req.files.logoFile);
            removeFilesInError(req.files.landingPageHeaderFile);
            removeFilesInError(req.files.welcomeInfoFile);
        }
        res.serverError(errors);
        console.error(e);
    }
});
exports.getCompanyURLs = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findOne(
            {},
            {
                _id: 0,
                logo: 1,
                landingPageHeader: 1,
                logoUrl: 1,
                welcomeInfo: 1,
                welcomeInfoUrl: 1
            }
        );
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Company");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Company");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});

const getAllData = asyncHandler(async (req, query, flag) => {
    try {
        const {page = 1, pageSize = 10, search = null, column = "createdAt", direction = -1} = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let rows = [];
        if (flag == "withP") {
            rows = await Model.find(query)
                .limit(+pageSize)
                .skip(+skip)
                .sort({[column]: direction});
        } else {
            rows = await Model.find(query).sort({[column]: direction});
        }
        return rows;
    } catch (e) {
        console.error(e);
    }
});

exports.getCompanyById = async (id, project = {}) => {
    try {
        let existing = await Model.findById(id, project).lean();
        return existing;
    } catch (e) {
        console.error(e);
    }
};
exports.getCompanyLocations = async id => {
    try {
        let existing = await Model.findById(id, {_id: 0, "placesOfBusiness.locationID": 1});
        return [...new Set(existing.placesOfBusiness.map(x => x.locationID))].join(",");
    } catch (e) {
        console.error(e);
    }
};
exports.getCompanyLocationsWithGST = async id => {
    try {
        let existing = await Model.findById(id, {
            _id: 0,
            "placesOfBusiness.locationID": 1,
            "placesOfBusiness.GSTINForAdditionalPlace": 1
        });
        return existing.placesOfBusiness;
    } catch (e) {
        console.error(e);
    }
};

exports.getAllCompanyLocationCount = async () => {
    try {
        const result = await Model.aggregate([
            {
                $project: {
                    count: {$add: [{$cond: ["$placesOfBusiness", {$size: "$placesOfBusiness"}, 0]}, 1]}
                }
            }
        ]);
        return result[0]?.count || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};

exports.uploadSOSignPDF = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (req.files) {
            let destination = "";
            for (const ele of itemDetails.placesOfBusiness) {
                if (req.files.newSOSignatureFile && req.files.newSOSignatureFile.length > 0) {
                    if (ele._id == req.body.locationId) {
                        if (itemDetails.SOSignature) {
                            destination = path.join(
                                __dirname,
                                `/../../../../../assets/company/${itemDetails.SOSignature}`
                            );
                            removeFile(destination);
                        }
                        ele.SOSignature = req.files.newSOSignatureFile[0].filename;
                    }
                }
                if (req.files.newSOPdfHeaderFile && req.files.newSOPdfHeaderFile.length > 0) {
                    if (ele._id == req.body.locationId) {
                        if (itemDetails.SOPdfHeader) {
                            destination = path.join(
                                __dirname,
                                `/../../../../../assets/company/${itemDetails.SOPdfHeader}`
                            );
                            removeFile(destination);
                        }
                        ele.SOPdfHeader = req.files.newSOPdfHeaderFile[0].filename;
                    }
                }
                if (req.files.PISignatureFile && req.files.PISignatureFile.length > 0) {
                    if (ele._id == req.body.locationId) {
                        if (itemDetails.PISignature) {
                            destination = path.join(
                                __dirname,
                                `/../../../../../assets/company/${itemDetails.PISignature}`
                            );
                            removeFile(destination);
                        }
                        ele.PISignature = req.files.PISignatureFile[0].filename;
                    }
                }
                if (req.files.TISignatureFile && req.files.TISignatureFile.length > 0) {
                    if (ele._id == req.body.locationId) {
                        if (itemDetails.TISignature) {
                            destination = path.join(
                                __dirname,
                                `/../../../../../assets/company/${itemDetails.TISignature}`
                            );
                            removeFile(destination);
                        }
                        ele.TISignature = req.files.TISignatureFile[0].filename;
                    }
                }
            }
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
        itemDetails = await itemDetails.save();
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("SO PDF and Signature has been")
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        if (req.files) {
            removeFilesInError(req.files.newSOSignatureFile);
            removeFilesInError(req.files.newSOPdfHeaderFile);
            removeFilesInError(req.files.PISignatureFile);
            removeFilesInError(req.files.TISignatureFile);
        }
        console.error(e);
    }
});

exports.getCompanyId = async () => {
    try {
        const company = await Model.findOne({}, {_id: 1});
        return company._id;
    } catch (e) {
        console.error(e);
    }
};

exports.uploadAndCheckCSVFile = async (req, res) => {
    try {
        let fname = req.file.filename;
        let fileType = req.file.filename.split(".").pop();
        if (fileType != "csv") {
            return res.serverError("Please upload a CSV file only.");
        }
        let rows = [];
        let jsonData = await fileHandler.readExcelIntoJson(fname, excelJson[req.body.collectionName]);
        if (req.body.collectionName == "Supplier") {
            rows = await checkSupplierValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "Items") {
            rows = await checkItemsValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "Customer") {
            rows = await checkCustomersValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "InventoryCorrection") {
            rows = await checkInventoryValidation(jsonData);
        }
        if (req.body.collectionName == "SKUMaster") {
            rows = await checkSKUValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "FGIN") {
            rows = await checkFGINValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "Employee") {
            rows = await checkEmployeeValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "Asset") {
            rows = await checkAssetValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "SKUDimensions") {
            rows = await checkSKUDimensionValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "SKUMaterial") {
            rows = await checkSKUMaterialValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "SKUInk") {
            rows = await checkSKUInkValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "SpecificationMaster") {
            rows = await checkSpecificationMasterValidation(
                jsonData,
                excelJson[req.body.collectionName],
                req.user.company
            );
        }
        if (req.body.collectionName == "HSN") {
            rows = await checkPurchaseHSNMasterValidation(
                jsonData,
                excelJson[req.body.collectionName],
                req.user.company
            );
        }
        if (req.body.collectionName == "SAC") {
            rows = await checkPurchaseSACMasterValidation(
                jsonData,
                excelJson[req.body.collectionName],
                req.user.company
            );
        }
        if (req.body.collectionName == "SaleHSN") {
            rows = await checkSalesHSNMasterValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "SaleSAC") {
            rows = await checkSalesSACMasterValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "Transporter") {
            rows = await checkTransporterMasterValidation(
                jsonData,
                excelJson[req.body.collectionName],
                req.user.company
            );
        }
        if (req.body.collectionName == "JobWorkerMaster") {
            rows = await checkJobWorkerValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "PurchaseRegisterEntry") {
            rows = await checkPurchaseRegisterEntryValidation(
                jsonData,
                excelJson[req.body.collectionName],
                req.user.company
            );
        }
        if (req.body.collectionName == "JobWorkItemMaster") {
            rows = await checkJobWorkItemsValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        if (req.body.collectionName == "PPICInventoryCorrection") {
            rows = await checkPPICInventoryValidation(jsonData, excelJson[req.body.collectionName], req.user.company);
        }
        return res.success(rows);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        throw new Error(e);
    }
};

exports.bulkInsertByCSVFile = async (req, res) => {
    try {
        let rows = [];
        if (req.body.collectionName == "Supplier") {
            rows = await bulkInsertSupplierByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "Items") {
            rows = await bulkInsertItemsByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "Customer") {
            rows = await bulkInsertCustomersByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "InventoryCorrection") {
            rows = await bulkInsertInventoryByCSV(req.body.validRecords, {});
        }
        if (req.body.collectionName == "SKUMaster") {
            rows = await bulkInsertSKUByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "FGIN") {
            rows = await bulkInsertFGINByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "Employee") {
            rows = await bulkInsertEmployeeByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "Asset") {
            rows = await bulkInsertAssetByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "SKUDimensions") {
            rows = await bulkInsertSKUDimByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "SKUMaterial") {
            rows = await bulkInsertSKUMaterialByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "SKUInk") {
            rows = await bulkInsertSKUInkByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "SpecificationMaster") {
            rows = await bulkInsertSpecificationMasterByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "HSN") {
            rows = await bulkInsertPurchaseHSNMasterByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "SAC") {
            rows = await bulkInsertPurchaseSACMasterByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "SaleHSN") {
            rows = await bulkInsertSalesHSNMasterByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "SaleSAC") {
            rows = await bulkInsertSalesSACMasterByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "Transporter") {
            rows = await bulkInsertTransporterMasterByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "JobWorkerMaster") {
            rows = await bulkInsertJobWorkerByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "PurchaseRegisterEntry") {
            rows = await bulkInsertPurchaseRegisterEntryByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "JobWorkItemMaster") {
            rows = await bulkInsertJobWorkItemsByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        if (req.body.collectionName == "PPICInventoryCorrection") {
            rows = await bulkInsertPPICInventoryByCSV(req.body.validRecords, {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub
            });
        }
        return res.success(rows);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        throw new Error(e);
    }
};
