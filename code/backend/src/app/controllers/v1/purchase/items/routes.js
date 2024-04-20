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
    updateItemByFile
} = require("./items");

app.post(
    "/create",
    upload.fields([
        {
            name: "tdsFile",
            maxCount: 1
        },
        {
            name: "msdsFile",
            maxCount: 1
        },
        {
            name: "drawing",
            maxCount: 1
        }
    ]),

    create
);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put(
    "/update/:id",
    validate("checkParamId"),
    upload.fields([
        {
            name: "tdsFile",
            maxCount: 1
        },
        {
            name: "msdsFile",
            maxCount: 1
        },
        {
            name: "drawing",
            maxCount: 1
        }
    ]),
    update
);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getAllReports", getAllReports);
app.post("/updateItemByFile", upload.single("uploadFile"), updateItemByFile);
module.exports = app;
