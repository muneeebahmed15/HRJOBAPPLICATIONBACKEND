const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "job" },
    interviewId: { type: mongoose.Schema.Types.ObjectId, ref: "interview" },
    name: { type: String },
    email: { type: String },
    gender: { type: String },
    phone: { type: String },
    city: { type: String },
    education: { type: String },
    linkedIn: { type: String },
    joining: { type: String },
    salaryExpectation: { type: String },
    previousSalary: { type: String },
    workExperience: { type: String },
    technicalSkills: { type: String },
    interviewAvailability: { type: String },
    status: { type: String, default: "Pending" },
  },
  {
    timestamps: true,
  }
);

const candidate = mongoose.model("candidate", candidateSchema);

module.exports = candidate;
