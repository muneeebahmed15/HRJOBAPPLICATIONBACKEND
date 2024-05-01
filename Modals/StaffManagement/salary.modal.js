const mongoose = require("mongoose")

const salarySchema = mongoose.Schema({
    empId: {type: mongoose.Schema.Types.ObjectId, ref:"Staff"},
    //temporary hours next will come from attendance
    totalHours: {type: String},
    bonus: {type: String},
    overtimeHours: {type: String},
    deduction: {type: String},
    totalSalary: {type: String},
    status: {type: String, default: 'pending'},
    remarks: {type: String},
    month: {type: String},
    year: {type: String}
},{ timestamps: true })

const salary = mongoose.model("salary", salarySchema);

module.exports = salary