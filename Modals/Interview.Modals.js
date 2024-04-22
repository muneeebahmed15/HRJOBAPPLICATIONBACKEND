const mongoose = require("mongoose");
const company = require ("./company.modal")
const employee = require("./Employee.Modals")

const interviewSchema = mongoose.Schema({
    interviewAssignedBy:{type: mongoose.Schema.Types.ObjectId, ref:"company"},
    interviewee_id:{type: mongoose.Schema.Types.ObjectId, ref:"employee"},
    interviewee:{type: String, required: true},
    interviewee_email:{type: String, required: true},
    interviewer:{type: String, required: true},
    interviewer_email:{type: String, required: true},
    interviewtype:{type: String, required: true},
    location:{type: String, required: true},
    time:{type: String, required: true},
    date:{type: Date, required: true},
    interviewee:{type: String, required: true},
},
{
    timestamps: true,
});

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;