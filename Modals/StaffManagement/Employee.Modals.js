const mongoose = require("mongoose");
const Interview = require("./Interview.Modals"); 
const company = require("./company.modal")

const employeeSchema = mongoose.Schema({
    interview_id : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interview'}],
    registeredBy : {type: mongoose.Schema.Types.ObjectId, ref: "company"},
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    skills: { type: String, required: true },
    current_company: { type: String, required: true },
    salary_required: { type: String, required: true },
    current_pay: { type: String, required: true },
    linkedin: { type: String, required: true },
    experience: { type: String, required: true },
    gender: { type: String, required: true },
    degree: { type: String, required: true },
    institute: { type: String, required: true },
    martial_status: { type: String, required: true },
}, {
    timestamps: true,
});

const employee = mongoose.model("employee", employeeSchema);
module.exports = employee;
