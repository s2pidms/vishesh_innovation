const app = require("express")();
const {validate} = require("../../../../middleware/validators");
const upload = require("../../../../middleware/upload");
const {
    create,
    getAll,
    getById,
    update,
    deleteById,
    getAllMasterData,
    getAllReports,
    getAllSKUMasterBySKUId,
    getAllSKUByProductCategory,
    updateSKUByFile,
    getMouldDataBySKUId
} = require("./SKU");
const {
    getAllForAttributes,
    getByIdForSKUDimAttributes,
    getByIdForSKUMaterialAttributes,
    createCopyForSKUDimAttributes,
    getAllForCopyAttributes,
    createCopyForSKUMaterialsAttributes,
    getByIdForSKUInkAttributes,
    createCopyForSKUInkAttributes,
    getAllSKUDimExcel
} = require("./SKUAttributes");

app.post(
    "/create",
    upload.fields([
        // {
        //     name: "drawingArtWorkFile",
        //     maxCount: 1
        // },
        // {
        //     name: "productionLayoutFile",
        //     maxCount: 1
        // }
    ]),
    create
);

app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put(
    "/update/:id",
    validate("checkParamId"),
    upload.fields([
        // {
        //     name: "drawingArtWorkFile",
        //     maxCount: 1
        // },
        // {
        //     name: "productionLayoutFile",
        //     maxCount: 1
        // }
    ]),
    update
);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getAllReports", getAllReports);
app.get("/getAllSKUMasterBySKUId/:id", validate("checkParamId"), getAllSKUMasterBySKUId);
app.get("/getAllSKUByProductCategory", getAllSKUByProductCategory);
app.post("/updateSKUByFile", upload.single("uploadFile"), updateSKUByFile);
app.get("/getMouldDataBySKUId", getMouldDataBySKUId);

// Attributes API
app.get("/getAllForAttributes", getAllForAttributes);
app.get("/getAllForCopyAttributes", getAllForCopyAttributes);
// SKU Dimension Attributes
app.get("/getByIdForSKUDimAttributes/:id", validate("checkParamId"), getByIdForSKUDimAttributes);
app.post("/createCopyForSKUDimAttributes", createCopyForSKUDimAttributes);
app.get("/getAllSKUDimExcel", getAllSKUDimExcel);
// SKU Material Attributes
app.get("/getByIdForSKUMaterialAttributes/:id", validate("checkParamId"), getByIdForSKUMaterialAttributes);
app.post("/createCopyForSKUMaterialsAttributes", createCopyForSKUMaterialsAttributes);
// SKU Ink Attributes
app.get("/getByIdForSKUInkAttributes/:id", validate("checkParamId"), getByIdForSKUInkAttributes);
app.post("/createCopyForSKUInkAttributes", createCopyForSKUInkAttributes);
module.exports = app;
