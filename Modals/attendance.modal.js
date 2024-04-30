const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({
    empId: {type: mongoose.Schema.Types.ObjectId, ref : "Staff"},
    date: {type: String},
    status: {type: String},
    checkIn: {type: String},
    checkOut: {type: String},
    totalHours: {type: String},
    overTimeHours: {type: String}
},{
    timestamps: true,
})

 const attendance = mongoose.model('attendance', attendanceSchema);

 module.exports = attendance;