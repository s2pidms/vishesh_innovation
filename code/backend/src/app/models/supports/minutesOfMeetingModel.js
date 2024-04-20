const mongoose = require("mongoose");
const AutoIncrement = require("../settings/autoIncrementModel");
const {getAutoIncrementNumber} = require("../../helpers/utility");
const {MINUTES_OF_MEETING_MODULE_PREFIX} = require("../../helpers/moduleConstants");
const {SUPPORT_MINUTES_OF_MEETING_ADDED, SUPPORT_MINUTES_OF_MEETING_UPDATED} = require("../../helpers/auditAction");
const Audit = require("../../controllers/v1/settings/audit/audit");
const minutesOfMeetingSchema = mongoose.Schema(
    {
        company: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Company"
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User"
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User"
        },
        MOMCode: {
            type: String,
            required: false
        },
        MOMDate: {
            type: Date,
            required: false
        },
        MOMTitle: {
            type: String,
            required: false
        },
        meetingType: {
            type: String,
            required: false
        },
        venue: {
            type: String,
            required: false
        },
        organizer: {
            type: String,
            required: false
        },
        attendedBy: {
            type: String,
            required: false
        },
        meetingInfo: [
            {
                actionPoint: {
                    type: String,
                    required: false
                },
                owner: {
                    type: String,
                    required: false
                },
                targetDate: {
                    type: Date,
                    required: false
                },
                reviewDate: {
                    type: Date,
                    required: false
                },
                status: {
                    type: String,
                    required: false
                    // enum: OPTIONS.defaultStatus.getAllMOMStatusAsArray(),
                },
                remarks: {
                    type: String,
                    required: false
                }
            }
        ]
    },
    {
        timestamps: true,
        collection: "MinutesOfMeeting"
    }
);

minutesOfMeetingSchema.pre("save", async function (next) {
    const {isNew, isModified} = this;
    if (this.isNew) {
        const autoIncrementedNo = await AutoIncrement.getNextId(
            "MinutesOfMeeting",
            MINUTES_OF_MEETING_MODULE_PREFIX,
            this.company
        );
        this.MOMCode = getAutoIncrementNumber(MINUTES_OF_MEETING_MODULE_PREFIX, "", autoIncrementedNo, 4);
        await AutoIncrement.setNextId("Minutes Of Meeting", MINUTES_OF_MEETING_MODULE_PREFIX, this.company);
    }
    await auditTrail(this, this.modifiedPaths(), isNew, isModified);
    next();
});

const MinutesOfMeeting = mongoose.model("MinutesOfMeeting", minutesOfMeetingSchema);

module.exports = MinutesOfMeeting;

const auditTrail = async (master, modifiedPaths, isNew, isModified) => {
    const {createdBy, updatedBy, company} = master;
    const auditTrail = {
        company: company,
        oldData: JSON.stringify(await master.constructor.findById(master._id)),
        data: JSON.stringify(master),
        user: isNew ? createdBy : updatedBy,
        action: isNew ? SUPPORT_MINUTES_OF_MEETING_ADDED : SUPPORT_MINUTES_OF_MEETING_UPDATED,
        fieldsModified: modifiedPaths.toString()
    };
    await Audit.auditModule(auditTrail);
};
