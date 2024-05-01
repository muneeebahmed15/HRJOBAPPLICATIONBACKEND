const mongoose= require("mongoose");

const departmentSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
})

const department = mongoose.model("department", departmentSchema);

module.exports = department;