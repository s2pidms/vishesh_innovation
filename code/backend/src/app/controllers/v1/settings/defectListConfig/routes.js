const app = require("express")();
const {createOrUpdate, getAll, update} = require("./defectListConfig");

app.post("/createOrUpdate", createOrUpdate);
app.get("/getAll", getAll);

module.exports = app;
