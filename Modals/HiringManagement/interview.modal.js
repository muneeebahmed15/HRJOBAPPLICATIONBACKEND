const mongoose = require("mongoose");

const interviewSchema = mongoose.Schema({
    candidateId: {type: mongoose.Schema.Types.ObjectId, ref: "candidate"},
    interviewTime: {type: String},
    interviewDate: {type: String},
    interviewee: {type: String},
    interviewType: {type: String},
    interviewLocation: {type: String},
    interviewFeedback: [{type: String}]
},{
    timestamps: true
})

const interview = mongoose.model("interview", interviewSchema);

module.exports = interview;