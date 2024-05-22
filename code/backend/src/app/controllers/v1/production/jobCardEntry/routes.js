const app = require("express")();
const {validate} = require("../../../../middleware/validators");

const {
    createOrUpdate,
    getAll,
    getAllMasterData,
    getProcessFromDirectCostBySKUId,
    getJCEntryDataByJobCardId,
    getById
} = require("./jobCardEntry");

app.post("/createOrUpdate", createOrUpdate);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getProcessFromDirectCostBySKUId", getProcessFromDirectCostBySKUId);
app.get("/getJCEntryDataByJobCardId", getJCEntryDataByJobCardId);

module.exports = app;
