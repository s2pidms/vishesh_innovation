const app = require("express")();
const {
    createOrUpdate,
    getAll,
    getAllMasterData,
    getProcessFromDirectCostBySKUId,
    getJCEntryDataByJobCardId
} = require("./jobCardEntry");

app.post("/createOrUpdate", createOrUpdate);
app.get("/getAll", getAll);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getProcessFromDirectCostBySKUId", getProcessFromDirectCostBySKUId);
app.get("/getJCEntryDataByJobCardId", getJCEntryDataByJobCardId);

module.exports = app;
