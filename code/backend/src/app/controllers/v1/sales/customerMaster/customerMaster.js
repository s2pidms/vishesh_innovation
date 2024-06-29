const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/sales/customerModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {outputData, getAllAggregationFooter, getIncrementNumWithPrefix} = require("../../../../helpers/utility");
const {getMatchData, OPTIONS} = require("../../../../helpers/global.options");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {default: mongoose} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const {getAllPaymentTerms} = require("../paymentTerms/paymentTerms");
const {updateProspectOnCustomerCreate} = require("../../businessLeads/prospect/prospect");
const {
    getAllCustomerAttributes,
    getAllCustomerExcelAttributes,
    getAllCustomerReportsAttributes
} = require("../../../../models/sales/helpers/customerHelper");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {getAndSetAutoIncrementNo, getNextAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {B2B_CUSTOMER} = require("../../../../mocks/schemasConstant/salesConstant");
const CustomerRepository = require("../../../../models/sales/repository/customerRepository");
const validationJson = require("../../../../mocks/excelUploadColumn/validation.json");
const AutoIncrementRepository = require("../../../../models/settings/repository/autoIncrementRepository");
const {filteredCurrencyMasterList} = require("../../../../models/settings/repository/currencyMasterRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllCustomerAttributes();
        if (req.query.excel == "true") {
            project = getAllCustomerExcelAttributes();
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company)}},
            {$unwind: {path: "$customerBillingAddress", preserveNullAndEmptyArrays: true}},
            {
                $addFields: {
                    customerContactInfo: {$first: "$customerContactInfo"}
                }
            },
            {$unwind: {path: "$customerContactInfo", preserveNullAndEmptyArrays: true}}
        ];
        let rows = await CustomerRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll B2B Customer Master", e);
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
        const saveObj = new Model(createdObj);
        if (saveObj.customerShippingAddress.length == 0) {
            saveObj.customerShippingAddress = saveObj.customerBillingAddress.map(x => {
                x.contactPersonName = saveObj.customerName;
                return x;
            });
        }
        const itemDetails = await saveObj.save();
        if (itemDetails) {
            if ((req.body.isConvertedToCustomer = "Converted to Customer")) {
                await updateProspectOnCustomerCreate(req.body.prospectId, req.user.company);
            }
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("B2B Customer Master"),
                _id: itemDetails._id
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create CMM", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await CustomerRepository.findOneDoc({_id: req.params.id}, {_id: 1});
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        await CustomerRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("B2B Customer Master has been")
        });
    } catch (e) {
        console.error("update B2B Customer Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   PUT /sales/SKU/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("B2B Customer Master")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("B2B Customer Master");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById CMM", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /sales/SKU/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("CMM");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById CMM", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /sales/SKU/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(B2B_CUSTOMER.AUTO_INCREMENT_DATA(), req.user.company);
        const options = await dropDownOptions(req.user.company);
        return res.success({
            autoIncrementNo,
            ...options
        });
    } catch (error) {
        console.error("getAllMasterData CMM", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
const dropDownOptions = async company => {
    try {
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
        const salesCategoryOptions = await findAppParameterValue("SALES_CATEGORY", company);
        const paymentTermsOptions = await getAllPaymentTerms(company);
        const zones = await findAppParameterValue("REGION_ZONES", company);
        const gstClassifications = await findAppParameterValue("GST_CLASSIFICATION", company);
        const salesCountry = await getAllModuleMaster(company, "SALES_COUNTRY");
        return {
            salesCountry,
            currenciesOptions: currenciesOptions.map(x => {
                return {
                    label: x.currencyName,
                    value: x.currencyName
                };
            }),
            salesCategoryOptions: salesCategoryOptions.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            paymentTermsOptions: paymentTermsOptions.map(x => {
                return {
                    label: x.paymentDescription,
                    value: x.paymentDescription
                };
            }),
            zones: zones.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            gstClassifications: gstClassifications.split(",").map(x => {
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
exports.getCustomersList = asyncHandler(async (req, res) => {
    try {
        const customerOptions = await CustomerRepository.filteredCustomerList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    isCustomerActive: "A"
                }
            },
            {
                $project: {
                    customerCode: 1,
                    customerName: 1,
                    printQRCodeOnInvoice: 1,
                    printDSOnInvoice: 1,
                    showSKUDescription: 1
                }
            }
        ]);
        return res.success(customerOptions);
    } catch (error) {
        console.error("getCustomersList", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllCustomers = async (company, project = {}) => {
    try {
        let rows = await Model.find(
            {
                isCustomerActive: "A",
                company: company
            },
            project
        )
            .populate("company", "GSTIN")
            .sort({customerName: 1});
        return rows;
    } catch (e) {
        console.error("getAllCustomers", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return errors;
    }
};
exports.getAllCustomersFiltered = async match => {
    try {
        let rows = await Model.find(
            {isCustomerActive: "A", ...match},
            {
                customerName: 1,
                customerCategory: 1,
                currency: "$customerCurrency",
                reference: "$_id",
                referenceModel: "Customer"
            }
        ).sort({customerName: 1});
        return rows;
    } catch (e) {
        console.error("getAllCustomersFiltered", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return errors;
    }
};
exports.getAllCustomersForNPD = async company => {
    try {
        let rows = await Model.find(
            {
                isCustomerActive: "A",
                company: company
            },
            {name: "$customerName", type: "Customer", currency: "$customerCurrency"}
        );
        return rows;
    } catch (e) {
        console.error("getAllCustomersForNPD", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return errors;
    }
};
exports.getAllCustomersCount = async company => {
    try {
        const count = await Model.countDocuments({
            isCustomerActive: "A",
            company: company
        });
        return count;
    } catch (error) {
        console.error(error);
    }
};
exports.getB2BCustomerById = asyncHandler(async id => {
    try {
        let existing = await Model.findById(id).populate("company", "GSTIN placesOfBusiness exportsDetails");
        return existing;
    } catch (e) {
        console.error("getById B2B Customer Master", e);
    }
});
exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const customerCategory = await findAppParameterValue("CUSTOMER_TYPE", req.user.company);
        const {
            search = null,
            excel = "false",
            page = 1,
            pageSize = 10,
            column = "createdAt",
            direction = -1,
            category = null,
            state = null,
            city = null
        } = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let query = {
            company: ObjectId(req.user.company),
            isCustomerActive: "A",
            ...(!!category && {
                customerCategory: {$eq: category}
            }),
            ...(!!state && {
                "customerBillingAddress.state": {
                    $regex: `${state}`,
                    $options: "i"
                }
            }),
            ...(!!city && {
                "customerBillingAddress.city": {
                    $regex: `${city}`,
                    $options: "i"
                }
            })
        };
        let project = getAllCustomerReportsAttributes();
        let match = await getMatchData(project, search);
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await Model.aggregate([
            {$unwind: "$customerBillingAddress"},
            {
                $match: query
            },
            {
                $addFields: {
                    customerContactInfo: {$first: "$customerContactInfo"}
                }
            },
            {$unwind: {path: "$customerContactInfo", preserveNullAndEmptyArrays: true}},
            ...getAllAggregationFooter(project, match, column, direction, pagination)
        ]);
        return res.success({
            customerCategory: customerCategory.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            ...outputData(rows)
        });
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// exports.uploadCustomerFile = asyncHandler(async (req, res) => {
//     try {
//         let fname = req.file.filename;
//         let jsonData = await readExcel(fname, column);
//         for (let i = 0; i < jsonData.length; i++) {
//             const ele = jsonData[i];
//             if (!!ele.pinCode && ele.pinCode.length > 1) {
//                 let numberValue = String(ele.pinCode).replaceAll(".", "").replaceAll(" ", "");
//                 ele.pinCode = +numberValue;
//             } else {
//                 ele.pinCode = null;
//             }
//         }
//         let customerData = jsonData.map(x => {
//             const {line1, line2, line3, country, state, city, district, pinCode, contactPersonName, ...rest} = x;
//             let address = {
//                 line1,
//                 line2,
//                 line3,
//                 country,
//                 state,
//                 city,
//                 district: city,
//                 pinCode,
//                 contactPersonName: rest.customerName
//             };
//             rest.customerBillingAddress = [address];
//             rest.customerShippingAddress = [address];
//             return rest;
//         });
//         // fs.writeFile("./customerMigration/Output.json", JSON.stringify(customerData), err => {
//         //     // In case of a error throw err.
//         //     if (err) throw err;
//         // });
//         let {customerArr, exitsCustomerArr} = await customerUpload(customerData);
//         return res.success({message: "uploaded successfully!", customerArr, exitsCustomerArr});
//     } catch (e) {
//         const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
//         res.serverError(errors);
//         throw new Error(e);
//     }
// });

exports.getAllCustomersWithAddress = asyncHandler(async (req, res) => {
    try {
        let customerList = await Model.find(
            {company: req.user.company},
            {
                customerCode: 1,
                customerName: 1,
                customerNickName: 1,
                region: 1,
                GSTIN: 1,
                customerBillingAddress: 1,
                customerShippingAddress: 1
            }
        );
        return res.success(customerList);
    } catch (e) {
        console.error("getAllCustomersWithAddress ", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.checkCustomersValidation = async (customerData, column, company) => {
    try {
        const customersOptions = await CustomerRepository.filteredCustomerList([
            {
                $match: {
                    isCustomerActive: "A",
                    company: ObjectId(company)
                }
            },
            {
                $project: {
                    customerName: 1
                }
            }
        ]);
        const requiredFields = [
            "customerCode",
            "customerName",
            "customerCategory",
            "customerPAN",
            "GSTIN",
            "GSTClassification",
            "customerCurrency",
            "customerPaymentTerms"
        ];
        const falseArr = OPTIONS.falsyArray;
        let {currenciesOptions, salesCategoryOptions, paymentTermsOptions, zones, gstClassifications, salesCountry} =
            await dropDownOptions(company);
        let dropdownCheck = [
            {
                key: "customerCurrency",
                options: currenciesOptions
            },
            {
                key: "customerCategory",
                options: salesCategoryOptions
            },
            {
                key: "customerPaymentTerms",
                options: paymentTermsOptions
            },
            {
                key: "region",
                options: zones
            },
            {
                key: "GSTClassification",
                options: gstClassifications
            },
            {
                key: "country",
                options: salesCountry
            }
        ];
        for await (const x of customerData) {
            x.isValid = true;
            x.message = null;
            for (const ele of Object.values(column)) {
                if (requiredFields.includes(ele) && falseArr.includes(x[ele])) {
                    let regex = /exports/i;
                    x.isValid = false;
                    x.message = validationJson[ele] ?? `${ele} is Required`;
                    if (regex.test(x.customerCategory) && (ele == "customerPAN" || ele == "GSTIN")) {
                        x.isValid = true;
                        x.message = null;
                    }
                    break;
                }
                for (const dd of dropdownCheck) {
                    if (ele == dd.key && !dd.options.map(values => values.value).includes(x[ele])) {
                        x.isValid = false;
                        x.message = `${ele} is Invalid Value & Value Must be ${dd.options.map(values => values.value)}`;
                        break;
                    }
                }
                for (const ele of customersOptions) {
                    if (ele.customerName == x["customerName"]) {
                        x.isValid = false;
                        x.message = `${x["customerName"]}  already exists`;
                        break;
                    }
                }
            }
        }
        const inValidRecords = customerData.filter(x => !x.isValid);
        const validRecords = customerData.filter(x => x.isValid);
        return {inValidRecords, validRecords};
    } catch (error) {
        console.error(error);
    }
};

exports.bulkInsertCustomersByCSV = async (jsonData, {company, createdBy, updatedBy}) => {
    try {
        for (let i = 0; i < jsonData.length; i++) {
            const ele = jsonData[i];
            if (!!ele.pinCode && ele.pinCode.length > 1) {
                let numberValue = String(ele.pinCode).replaceAll(".", "").replaceAll(" ", "");
                ele.pinCode = +numberValue;
            } else {
                ele.pinCode = null;
            }
        }
        let autoIncrementObj = await getNextAutoIncrementNo({
            ...B2B_CUSTOMER.AUTO_INCREMENT_DATA(),
            company: company
        });
        let customerData = jsonData.map(x => {
            const {
                line1,
                line2,
                line3,
                country,
                state,
                city,
                district,
                pinCode,

                contactPersonName,
                contactPersonDesignation,
                contactPersonDepartment,
                contactPersonNumber,
                contactPersonEmail,
                ...rest
            } = x;
            let address = {
                line1,
                line2,
                line3,
                country,
                state,
                city,
                district: city,
                pinCode,
                contactPersonName: rest.customerName
            };
            let contactInfo = {
                contactPersonName,
                contactPersonDesignation,
                contactPersonDepartment,
                contactPersonNumber,
                contactPersonEmail
            };
            rest.customerBillingAddress = [address];
            rest.customerShippingAddress = [address];
            rest.customerContactInfo = [contactInfo];
            rest.company = company;
            rest.createdBy = createdBy;
            rest.updatedBy = updatedBy;
            rest.customerCode = getIncrementNumWithPrefix(autoIncrementObj);
            autoIncrementObj.autoIncrementValue++;
            let regex = /exports/i;
            if (regex.test(rest.customerCategory)) {
                delete rest.customerPAN;
                delete rest.GSTIN;
                delete rest.region;
                delete rest.GSTClassification;
            }
            return rest;
        });
        await CustomerRepository.insertManyDoc(customerData);
        await AutoIncrementRepository.findAndUpdateDoc(
            {
                module: B2B_CUSTOMER.MODULE,
                company: company
            },
            {
                $set: {
                    autoIncrementValue: autoIncrementObj.autoIncrementValue
                }
            }
        );
        return {message: "Uploaded successfully!"};
    } catch (error) {
        console.error(error);
    }
};
