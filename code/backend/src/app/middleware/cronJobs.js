const cron = require("node-cron");
const {updateLeaveApplicationStatusToAvailed} = require("../controllers/v1/HR/LeavesApplication/LeavesApplication");
const {getValidityData} = require("../controllers/v1/sales/proformaInvoice/proformaInvoice");
const {getCompanyId} = require("../controllers/v1/settings/company/company");
const {
    HRDashboard,
    businessLeadsDashboard,
    dispatchDashboard,
    esmpDashboard,
    maintenanceDashboard,
    planningDashboard,
    productionDashboard,
    purchaseDashboard,
    qualityDashboard,
    salesDashboard,
    settingsDashboard,
    storesDashboard,
    accountsDashboard,
    supportsDashboard
} = require("../controllers/v1/dashboard/dash_function");
const {mailTriggerCycle} = require("../controllers/v1/settings/mailTrigger/mailTrigger");
const AuditRepository = require("../models/settings/repository/auditRepository");
exports.triggers = async () => {
    await Promise.all([
        triggerLeaveApplicationStatusToAvailed(),
        triggerDashboard(),
        executeMailTrigger()
        // emptyAudit()
    ]);
};

const triggerLeaveApplicationStatusToAvailed = async () => {
    try {
        cron.schedule("0 0 * * *", async function () {
            updateLeaveApplicationStatusToAvailed();
            getValidityData();
        });
    } catch (error) {
        console.error(`Error: triggerLeaveApplicationStatusToAvailed ${error}`);
        process.exit(1);
    }
};
const executeMailTrigger = async () => {
    try {
        cron.schedule("*/5 * * * *", async function () {
            mailTriggerCycle();
        });
    } catch (error) {
        console.error(`Error: executeMailTrigger ${error}`);
        process.exit(1);
    }
};
const triggerDashboard = async () => {
    try {
        const companyId = await getCompanyId();
        cron.schedule("*/30 * * * *", async function () {
            // console.info("cron JOB EXECUTED", new Date().getHours(), new Date().getMinutes());
            await Promise.all([
                HRDashboard(companyId),
                purchaseDashboard(companyId),
                qualityDashboard(companyId),
                businessLeadsDashboard(companyId),
                storesDashboard(companyId),
                // esmpDashboard(companyId),
                productionDashboard(companyId),
                dispatchDashboard(companyId),
                maintenanceDashboard(companyId),
                settingsDashboard(companyId),
                planningDashboard(companyId),
                salesDashboard(companyId),
                accountsDashboard(companyId),
                supportsDashboard(companyId)
            ]);
        });
    } catch (error) {
        console.error(`Error: triggerDashboard ${error}`);
        process.exit(1);
    }
};

const emptyAudit = async () => {
    try {
        cron.schedule("0 7 * * 0", async function () {
            await AuditRepository.deleteManyDoc({});
        });
    } catch (error) {
        console.error(`Error: executeMailTrigger ${error}`);
        process.exit(1);
    }
};
