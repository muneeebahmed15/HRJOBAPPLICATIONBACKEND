const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true}
},
{
    timestamps: true,
}
);

const company = mongoose.model("company", companySchema);

module.exports = company; 