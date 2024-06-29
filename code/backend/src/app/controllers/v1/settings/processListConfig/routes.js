const app = require("express")();
const {getAll, createOrUpdate} = require("./processListConfig");

app.post("/createOrUpdate", createOrUpdate);
app.get("/getAll", getAll);

module.exports = app;
