const mongoose = require ("mongoose");

const jobSchema = mongoose.Schema({
    title: {type: String},
    status: {type: String},
    jobType: {type: String},
    location: {type: String},
    jobStatus: {type: String},
    experience: {type: String},
    description: {type: String},
    applicants:[{type: mongoose.Schema.Types.ObjectId, ref: "candidate"}]
},{
    timestamps: true
})

const job = mongoose.model("job", jobSchema)
module.exports = job;