const mongoose = require("mongoose");

const interviewSchema = mongoose.Schema(
  {
    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidate",
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
    },
    interviewTime: { type: String },
    interviewDate: { type: String },
    interviewee: { type: String },
    intervieweeEmail: { type: String },
    interviewType: { type: String },
    interviewLocation: { type: String },
    interviewConducted: { type: Boolean, default: false },
    hiringStatus: { type: String },
    interviewFeedback: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const interview = mongoose.model("interview", interviewSchema);

module.exports = interview;
