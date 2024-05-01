const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
    jobId: {type: mongoose.Schema.Types.ObjectId, ref: "job"},
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    city: {type: String},
    lastDegree: {type: String},
    workExperience: {type: String},
    technicalSkills: {type: String},
    portfolio: {type: String},
    availability: {type: String},
    salaryExpectation: {type: String},
    previousSalary: {type: String},
    description: {type: String} //why should we hire you?
},{
    timestamps: true
})

const candidate = mongoose.model("candidate", candidateSchema);

module.exports = candidate;