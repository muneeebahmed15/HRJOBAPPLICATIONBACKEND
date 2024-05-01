const mongoose = require("mongoose")

const leaveSchema = mongoose.Schema({
    empId: {type: mongoose.Schema.Types.ObjectId, ref: "Staff"},
    leaveType: {type: String},
    from: {type: String},
    to: {type: String},
    totalDays: {type: String},
    reason: {type: String},
    status: {type: String, default: "pending"},
    remainingLeave: {type: String},
    remarks: {type: String}
},{
    timestamps: true
})

const leave = mongoose.model("leave", leaveSchema);

module.exports = leave;