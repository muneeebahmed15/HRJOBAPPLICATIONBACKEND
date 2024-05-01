const mongoose = require ("mongoose");

const jobSchema = mongoose.Schema({
    title: {type: String},
    status: {type: String},
    jobType: {type: String},
    location: {type: String},
    jobStatus: {type: String},
    experience: {type: String},
    description: {type: String}
},{
    timestamps: true
})

const job = mongoose.model("job", jobSchema);
module.exports = job;