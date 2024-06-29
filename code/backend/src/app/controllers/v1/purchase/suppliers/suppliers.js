const Model = require("../../../../models/purchase/supplierModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {removeFile, removeSingleFileInError, getIncrementNumWithPrefix} = require("../../../../helpers/utility");
const {OPTIONS} = require("../../../../helpers/global.options");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {default: mongoose} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const validationJson = require("../../../../mocks/excelUploadColumn/validation.json");
const statesJson = require("../../../../mocks/states.json");
const {getAllPaymentTerms} = require("../../sales/paymentTerms/paymentTerms");
const {
    getAllSupplierAttributes,
    getAllSupplierExcelAttributes,
    getAllSupplierReportsAttributes
} = require("../../../../models/purchase/helpers/supplierHelper");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {getAndSetAutoIncrementNo, getNextAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {SUPPLIER} = require("../../../../mocks/schemasConstant/purchaseConstant");
const SupplierRepository = require("../../../../models/purchase/repository/supplierRepository");
const {SUPPLIER_OPTIONS} = require("../../../../mocks/dropDownOptions");
const AutoIncrementRepository = require("../../../../models/settings/repository/autoIncrementRepository");
const {filteredCurrencyMasterList} = require("../../../../models/settings/repository/currencyMasterRepository");

// @route   GET /purchase/suppliers/getAll
exports.getAll = async (req, res) => {
    try {
        let project = getAllSupplierAttributes();
        if (req.query.excel == "true") {
            project = getAllSupplierExcelAttributes();
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company)}},
            {$unwind: "$supplierBillingAddress"},
            {
                $addFields: {
                    supplierBankDetails: {$first: "$supplierBankDetails"},
                    supplierContactMatrix: {$first: "$supplierContactMatrix"}
                }
            },
            {$unwind: {path: "$supplierBankDetails", preserveNullAndEmptyArrays: true}},
            {$unwind: {path: "$supplierContactMatrix", preserveNullAndEmptyArrays: true}}
        ];
        let rows = await SupplierRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllSuppliers", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.create = async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        if (createdObj.supplierBillingAddress) {
            createdObj.supplierBillingAddress = JSON.parse(createdObj.supplierBillingAddress);
        }
        if (createdObj.supplierShippingAddress) {
            createdObj.supplierShippingAddress = JSON.parse(createdObj.supplierShippingAddress);
        }
        if (createdObj.supplierAddress) {
            createdObj.supplierAddress = JSON.parse(createdObj.supplierAddress);
        }
        if (createdObj.supplierContactMatrix) {
            createdObj.supplierContactMatrix = JSON.parse(createdObj.supplierContactMatrix);
        }
        if (createdObj.supplierBankDetails) {
            createdObj.supplierBankDetails = JSON.parse(createdObj.supplierBankDetails);
        }
        if (req.file) {
            if (req.file.filename) {
                createdObj["cpaFile"] = req.file.filename;
            }
        }
        const itemDetails = await SupplierRepository.createDoc(createdObj);
        if (itemDetails) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Supplier")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Suppliers", e);
        if (req.file) {
            removeSingleFileInError(req.file);
        }
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.update = async (req, res) => {
    try {
        let itemDetails = await SupplierRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        if (req.body.supplierBillingAddress) {
            req.body.supplierBillingAddress = JSON.parse(req.body.supplierBillingAddress);
        }
        if (req.body.supplierShippingAddress) {
            req.body.supplierShippingAddress = JSON.parse(req.body.supplierShippingAddress);
        }
        if (req.body.supplierAddress) {
            req.body.supplierAddress = JSON.parse(req.body.supplierAddress);
        }
        if (req.body.supplierContactMatrix) {
            req.body.supplierContactMatrix = JSON.parse(req.body.supplierContactMatrix);
        }
        if (req.body.supplierBankDetails) {
            req.body.supplierBankDetails = JSON.parse(req.body.supplierBankDetails);
        }
        if (req.file && req.file.filename) {
            if (itemDetails.cpaFile) {
                removeFile(`${req.file.destination}/${itemDetails.cpaFile}`);
            }
            req.body.cpaFile = req.file.filename;
        }
        itemDetails = await SupplierRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Supplier has been")
        });
    } catch (e) {
        console.error("update Suppliers", e);
        if (req.file) {
            removeSingleFileInError(req.file);
        }
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @route   PUT /purchase/suppliers/delete/:id
exports.deleteById = async (req, res) => {
    try {
        const deleteItem = await SupplierRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Supplier")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Supplier");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Suppliers", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @route   GET /purchase/suppliers/getById/:id
exports.getById = async (req, res) => {
    try {
        let existing = await SupplierRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Supplier");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Suppliers", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @route   GET /purchase/suppliers/getAllMasterData
exports.getAllMasterData = async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(SUPPLIER.AUTO_INCREMENT_DATA(), req.user.company);
        const options = await dropDownOptions(req.user.company);
        return res.success({
            autoIncrementNo,
            ...options
        });
    } catch (error) {
        console.error("getAllMasterData Suppliers", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
const dropDownOptions = async company => {
    try {
        const paymentTermsOptions = await getAllPaymentTerms(company);
        // const currenciesOptions = await findAppParameterValue("Currency", company);
        const currenciesOptions = await filteredCurrencyMasterList([
            {
                $match: {
                    company: ObjectId(company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $sort: {sequence: 1}
            },
            {
                $project: {
                    currencyName: 1,
                    symbol: 1
                }
            }
        ]);
        const purchaseTypesOptions = await findAppParameterValue("PURCHASE_TYPE", company);
        const freightTermsOptions = await getAllModuleMaster(company, "FREIGHT_TERMS");
        const purchaseCountryOptions = await getAllModuleMaster(company, "PURCHASE_COUNTRY");
        return {
            purchaseCountryOptions,
            freightTermsOptions,
            paymentTermsOptions: paymentTermsOptions.map(x => {
                return {
                    label: x.paymentDescription,
                    value: x.paymentDescription
                };
            }),
            currenciesOptions: currenciesOptions.map(x => {
                return {
                    label: x.currencyName,
                    value: x.currencyName
                };
            }),
            purchaseTypesOptions: purchaseTypesOptions.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        };
    } catch (error) {
        console.error(error);
    }
};
exports.getAllSuppliers = async (company, project = {}) => {
    try {
        let rows = await Model.find(
            {
                isSupplierActive: "A",
                company: company
            },
            project
        ).sort({supplierName: 1});
        return rows;
    } catch (e) {
        console.error("getAllSuppliers", e);
    }
};
exports.getAllSupplierCount = async company => {
    try {
        const result = await Model.aggregate([
            {
                $match: {
                    company: ObjectId(company),
                    isSupplierActive: "A"
                }
            },
            {
                $facet: {
                    domesticSupplierCount: [
                        {$match: {supplierPurchaseType: {$regex: /Domestic/i}}},
                        {
                            $group: {
                                _id: null,
                                counts: {$sum: 1}
                            }
                        }
                    ],
                    importSupplierCount: [
                        {$match: {supplierPurchaseType: {$regex: /Imports/i}}},
                        {
                            $group: {
                                _id: null,
                                counts: {$sum: 1}
                            }
                        }
                    ]
                }
            }
        ]);
        let obj = {
            domesticSupplierCount: result[0]?.domesticSupplierCount[0]?.counts || 0,
            importSupplierCount: result[0]?.importSupplierCount[0]?.counts || 0
        };
        return obj;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};
exports.getAllReports = async (req, res) => {
    try {
        const purchaseTypes = await findAppParameterValue("PURCHASE_TYPE", req.user.company);
        const {supplierPurchaseType = null, state = null, city = null} = req.query;
        let query = {
            company: ObjectId(req.user.company),
            ...(!!supplierPurchaseType && {
                supplierPurchaseType: supplierPurchaseType
            }),
            ...(!!state && {
                "supplierBillingAddress.state": {
                    $regex: `${state}`,
                    $options: "i"
                }
            }),
            ...(!!city && {
                "supplierBillingAddress.city": {
                    $regex: `${city}`,
                    $options: "i"
                }
            })
        };
        let project = getAllSupplierReportsAttributes();
        let pipeline = [
            {
                $addFields: {
                    supplierBillingAddress: {$first: "$supplierBillingAddress"}
                }
            },
            {$unwind: {path: "$supplierBillingAddress", preserveNullAndEmptyArrays: true}},
            {
                $match: query
            },
            {
                $addFields: {
                    supplierContactMatrix: {$first: "$supplierContactMatrix"}
                }
            },
            {$unwind: {path: "$supplierContactMatrix", preserveNullAndEmptyArrays: true}}
        ];
        let rows = await SupplierRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success({
            purchaseCategories: purchaseTypes.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            ...rows
        });
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.checkSupplierValidation = async (supplierData, column, company) => {
    try {
        const suppliersOptions = await SupplierRepository.filteredSupplierList([
            {$match: {company: ObjectId(company), isSupplierActive: "A"}},
            {
                $project: {
                    _id: 1,
                    supplierName: 1,
                    supplierGST: 1
                }
            }
        ]);
        const requiredFields = ["supplierCode", "supplierName", "supplierGST", "supplierPAN", "supplierPurchaseType"];
        const falseArr = OPTIONS.falsyArray;
        const MSME = SUPPLIER_OPTIONS.MSME_CLASSIFICATION;
        const GSTClassification = SUPPLIER_OPTIONS.GST_CLASSIFICATION;
        const accType = SUPPLIER_OPTIONS.ACCOUNT_TYPE;
        let {
            purchaseCountryOptions,
            paymentTermsOptions,
            currenciesOptions,
            freightTermsOptions,
            purchaseTypesOptions
        } = await dropDownOptions(company);
        let dropdownCheck = [
            {
                key: "supplierPurchaseType",
                options: purchaseTypesOptions
            },
            {
                key: "GSTClassification",
                options: GSTClassification
            },
            {
                key: "MSMEClassification",
                options: MSME
            },
            {
                key: "supplierCurrency",
                options: currenciesOptions
            },
            {
                key: "supplierPaymentTerms",
                options: paymentTermsOptions
            },
            {
                key: "supplierINCOTerms",
                options: freightTermsOptions.map(x => {
                    return {
                        label: x.label,
                        value: x.value
                    };
                })
            },
            {
                key: "state",
                options: statesJson
            },
            {
                key: "country",
                options: purchaseCountryOptions.map(x => {
                    return {
                        label: x.label,
                        value: x.value
                    };
                })
            },
            {
                key: "accountType",
                options: accType
            }
        ];
        for await (const x of supplierData) {
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
                if (
                    await SupplierRepository.findOneDoc(
                        {
                            $or: [{supplierName: x["supplierName"]}, {supplierGST: x["supplierGST"]}]
                        },
                        {
                            _id: 1
                        }
                    )
                ) {
                    x.isValid = false;
                    x.message = `${ele} is already exists`;
                    break;
                }
                for (const ele of suppliersOptions) {
                    if (ele.supplierName == x["supplierName"] && ele.supplierGST == x["supplierGST"]) {
                        x.isValid = false;
                        x.message = `${x["supplierName"]} already exists`;
                        break;
                    }
                }
            }
        }
        const inValidRecords = supplierData.filter(x => !x.isValid);
        const validRecords = supplierData.filter(x => x.isValid);
        return {inValidRecords, validRecords};
    } catch (error) {
        console.error(error);
    }
};

exports.bulkInsertSupplierByCSV = async (jsonData, {company, createdBy, updatedBy}) => {
    try {
        for (let i = 0; i < jsonData.length; i++) {
            const ele = jsonData[i];
            if (!!ele.pinCode && ele.pinCode.length > 1) {
                let numberValue = String(ele.pinCode).replaceAll(" ", "");
                ele.pinCode = +numberValue;
            } else {
                ele.pinCode = null;
            }
            if (!!ele.accountNumber && ele.accountNumber.length > 1) {
                let numberValue = String(ele.accountNumber).replaceAll(" ", "");
                ele.accountNumber = +numberValue;
            } else {
                ele.accountNumber = null;
            }
            if (!!ele.supplierContactPersonNumber && ele.supplierContactPersonNumber.length > 1) {
                let numberValue = String(ele.supplierContactPersonNumber).replaceAll(" ", "");
                ele.supplierContactPersonNumber = +numberValue;
            } else {
                ele.supplierContactPersonNumber = 0;
            }
        }
        let supplierAutoIncrementObj = await getNextAutoIncrementNo({
            ...SUPPLIER.AUTO_INCREMENT_DATA(),
            company: company
        });
        let supplierData = jsonData.map(x => {
            const {
                line1,
                line2,
                line3,
                country,
                state,
                district,
                pinCode,
                supplierContactPersonName,
                supplierContactPersonDesignation,
                supplierContactPersonNumber,
                supplierContactPersonEmail,
                befName,
                bankName,
                accountNumber,
                accountType,
                bankIFSCCode,
                bankSwiftCode,
                ...rest
            } = x;
            let address = {
                line1,
                line2,
                line3,
                country,
                state,
                city: district,
                district,
                pinCode
            };
            rest.supplierBillingAddress = [address];
            rest.supplierShippingAddress = [address];
            rest.supplierContactMatrix = [
                {
                    supplierContactPersonName,
                    supplierContactPersonDesignation,
                    supplierContactPersonNumber,
                    supplierContactPersonEmail
                }
            ];
            rest.supplierBankDetails = [{befName, bankName, accountNumber, accountType, bankIFSCCode, bankSwiftCode}];
            rest.supplierCode = getIncrementNumWithPrefix(supplierAutoIncrementObj);
            rest.company = company;
            rest.createdBy = createdBy;
            rest.updatedBy = updatedBy;
            supplierAutoIncrementObj.autoIncrementValue++;
            return rest;
        });
        await SupplierRepository.insertManyDoc(supplierData);
        await AutoIncrementRepository.findAndUpdateDoc(
            {
                module: SUPPLIER.MODULE,
                company: company
            },
            {
                $set: {
                    autoIncrementValue: supplierAutoIncrementObj.autoIncrementValue
                }
            }
        );
        return {message: "Uploaded successfully!"};
    } catch (error) {
        console.error(error);
    }
};
