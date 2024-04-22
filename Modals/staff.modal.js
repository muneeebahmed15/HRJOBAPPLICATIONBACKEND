const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
    // companyId: { type: String }, 
    // Assuming "Company" is the name of your company model

    personalDetails: {        
       name: { type: String},
        fatherName: { type: String},
        CNIC: { type: String},
        email: { type: String},
        phone: { type: String},
        department: { type: mongoose.Schema.Types.ObjectId, ref: "department" },
        DOB: { type: String},
        gender: { type: String},
        martialStatus: { type: String},
        religion: { type: String},
        languages: { type: String},
        dependents: { type: String},
        height: { type: String},
        linkedURL: { type: String, required: true},
        password: { type: String},
    },

    addresses: {
         currentAddress: { type: String},
        permanentAddress: { type: String}
    },
    
    medicalHistory: {
      bloodGroup: { type: String},
    disease: { type: String},
},

    employeeEmergencyContact:{
        emergencyContactName: { type: String},
        relation: { type: String},
        emergencyPhone: { type: String},
        emergencyCurrentAddress: { type: String},
    },

    joiningDetails:{
        joiningDate: { type: String},
        recruitmentMode: { type: String},
        totalHours: { type: String},
        benefits: { type: String},
        shift: { type: String},
        timing: { type: String},
        jobType: { type: String},
        jobStatus: { type: String},
        jobType: { type: String},
        jobStatus: { type: String},
    },

    bankDetails:{
        bankName: { type: String},
        branchCode: { type: String},
        accountTitle: { type: String},
        IBAN: { type: String},
    },

    employeeEducation:{
        degree: { type: String},
        institution: { type: String},
        score: { type: String},
        passingYear: { type: String},
        majors: { type: String},
        grade: { type: String},
    },

    employeeEmployement:{
        companyName: { type: String},
         designation: { type: String},
         majorRoles: { type: String},
         workDuration: { type: String},
         location: { type: String},
    },

    salaryDetails:{
        currentSalary: { type: String},
        joiningSalary: { type: String},
        basicSalary: { type: String},
        hourlySalary: { type: String}
    },

    // hrID: { type: String } 
    // Assuming hrID is optional
}, { timestamps: true });

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;





        // name: { type: String},
        // fatherName: { type: String},
        // CNIC: { type: String},
        // email: { type: String},
        // phone: { type: String},
        // department: { type: String},
        // DOB: { type: String},
        // gender: { type: String},
        // martialStatus: { type: String},
        // religion: { type: String},
        // languages: { type: String},
        // dependents: { type: String},
        // height: { type: String},
        // linkedinURL: { type: String},
        // password: { type: String},


        
        // currentAddress: { type: String},
        // permanentAddress: { type: String}


        
    // bloodGroup: { type: String},
    // disease: { type: String},


    
        // name: { type: String},
        // relation: { type: String},
        // address: { type: String},
        // phone: { type: String},


        
        // joiningDate: { type: String},
        // designation: { type: String},
        // recruitmentMode: { type: String},
        // workingHours: { type: String},
        // startingPackage: { type: String},
        // benefits: { type: String},
        // timing: { type: String},
        // compensationMethod: { type: String},
        // jobType: { type: String},
        // jobStatus: { type: String},


        
        // bankName: { type: String},
        // branchCode: { type: String},
        // accountTitle: { type: String},
        // IBAN: { type: String},


        
        // degree: { type: String},
        // board: { type: String},
        // score: { type: String},
        // passingYear: { type: String},
        // majors: { type: String},
        // grade: { type: String},



        
        // companyName: { type: String},
        // designation: { type: String},
        // majborRoles: { type: String},
        // workDuration: { type: String},
        // location: { type: String},









