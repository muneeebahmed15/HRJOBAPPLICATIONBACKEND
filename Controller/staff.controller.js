const staff = require("../Modals/staff.modal");
const bcrypt = require("bcryptjs")

const newStaff = async(req, res) =>{

//companyId
const {
    personalDetails: {
        name,
        fatherName,
        CNIC,
        email,
        phone,
        department,
        DOB,
        gender,
        martialStatus,
        religion,
        languages,
        dependents,
        height,
        linkedURL,
        password,
     },
     addresses: {
             currentAddress,
             permanentAddress,
     },
     medicalHistory: {
         bloodGroup,
         disease,
     },
     employeeEmergencyContact: {
         emergencyContactName,
         relation,
         emergencyPhone,
         emergencyCurrentAddress,
     },
     joiningDetails: {
         joiningDate,
         recruitmentMode,
         totalHours,
         benefits,
         shift,
         timing,
         jobType,
         jobStatus,
     },
     bankDetails: {
         bankName,
         branchCode,
         accountTitle,
         IBAN,
     },  
     employeeEducation: {
         degree,
         institution,
         score,
         passingYear,
         majors,
         grade,
     },
     employeeEmployement: {
         companyName,
         designation,
         majorRoles,
         workDuration,
         location,
     },
     salaryDetails: {
         currentSalary,
         joiningSalary,
         basicSalary,
         hourlySalary
     },
} = req.body;


// hrID 
    try {

        // console.log(personalDetails.email);

        const existingUser = await staff.findOne({
            $or: [
                { "personalDetails.email": email },
                { "personalDetails.CNIC":  CNIC },
                { "personalDetails.linkedURL":  linkedURL },
            ]
        });

        if (existingUser) {
            if (existingUser.personalDetails.email === email) {
                return res.status(201).json({ status: false, msg: "User with this email already exists" });
            } else if(existingUser.personalDetails.CNIC === CNIC) {
                return res.status(201).json({ status: false, msg: "User with this CNIC already exists" });
            }else{
                return res.status(201).json({ status: false, msg: "User with this LinkedinURl already exists" });
            }
        }

        else{
            if (!password === "") {
                const hashedPassword = bcrypt.hashSync(password, 10);
                personalDetails.password = hashedPassword;
            }

            const newStaff = new staff({
                // companyId,
                personalDetails: {
                    name,
                    fatherName,
                    CNIC,
                    email,
                    phone,
                    department,
                    DOB,
                    gender,
                    martialStatus,
                    religion,
                    languages,
                    dependents,
                    height,
                    linkedURL,
                    password,
                 },
                 addresses: {
                         currentAddress,
                         permanentAddress,
                 },
                 medicalHistory: {
                     bloodGroup,
                     disease,
                 },
                 employeeEmergencyContact: {
                     emergencyContactName,
                     relation,
                     emergencyPhone,
                     emergencyCurrentAddress,
                 },
                 joiningDetails: {
                     joiningDate,
                     recruitmentMode,
                     totalHours,
                     benefits,
                     shift,
                     timing,
                     jobType,
                     jobStatus,
                 },
                 bankDetails: {
                     bankName,
                     branchCode,
                     accountTitle,
                     IBAN,
                 },  
                 employeeEducation: {
                     degree,
                     institution,
                     score,
                     passingYear,
                     majors,
                     grade,
                 },
                 employeeEmployement: {
                     companyName,
                     designation,
                     majorRoles,
                     workDuration,
                     location,
                 },
                 salaryDetails: {
                     currentSalary,
                     joiningSalary,
                     basicSalary,
                     hourlySalary
                 },

               
                // hrID,
            });

            await newStaff.save();
            return res.status(200).json({
                status: true,
                msg: 'Staff registered successfully',
                data: newStaff,
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}

const singleStaff = async(req, res) =>{
    const {id} = req.params;


    try {
        const user = await staff.findOne({_id:id}).populate("personalDetails.department");
        if(user){
            res.status(200).json({status: true, user});
        }else{
            res.status(404).json({status: false, msg: "Doesn't Exist"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}

const allStaff = async(req, res) =>{
    try {
        const data = await staff.find().populate("personalDetails.department");
        if(data){
            res.status(200).json({status: true, data});
        }
        else{
            res.status(404).json("No User Exist");
        }
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}

const removeStaff = async(req, res) =>{
    const {id} = req.params;
    
    try {
        const user = await staff.deleteOne({_id:id});
        if(user){
            res.status(200).json("Staff Removed");
        }
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}

const updateStaff = async(req, res) =>{
    const {id} = req.params;
    const { staffData} = req.body;

    const { 
        personalDetails,
        addresses,
        medicalHistory,
        employeeEmergencyContact,
        joiningDetails,
        bankDetails,
        employeeEducation,
        employeeEmployement,
        hrID 
    } = staffData;

    try {
        const update = await staff.findOneAndUpdate(
            {_id: id},
            {
                $set: {
                    "personalDetails": personalDetails,
                    "addresses": addresses,
                    "medicalHistory": medicalHistory,
                    "employeeEmergencyContact": employeeEmergencyContact,
                    "joiningDetails": joiningDetails,
                    "bankDetails": bankDetails,
                    "employeeEducation": employeeEducation,
                    "employeeEmployement": employeeEmployement,
                    "hrID": hrID
                }
            },
            {new: true}
        );
        if(update){
            return res.status(200).json({update});
        } else {
            return res.status(404).json({error: "Staff not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

const test = async (req, res) => {
    res.status(200).json({message:"Helllllllllllloooooooooo"});
};


module.exports = { newStaff, singleStaff, allStaff, removeStaff, updateStaff, test}






// const addStaff = async(req, res) =>{

//     const {data}=req.body;

//     // console.log(data);
// //companyId
//     const { 
//         personalDetails,
//         addresses,
//         medicalHistory,
//         employeeEmergencyContact,
//         joiningDetails,
//         bankDetails,
//         employeeEducation,
//         employeeEmployement,
//         salaryDetails,
        
//     } = data;
// // hrID 
//     try {

//         // console.log(personalDetails.email);

//         const existingUser = await staff.findOne({
//             $or: [
//                 { "personalDetails.email": personalDetails.email },
//                 { "personalDetails.CNIC":  personalDetails.CNIC }
//             ]
//         });

//         if (existingUser) {
//             if (existingUser.personalDetails.email === personalDetails.email) {
//                 return res.status(201).json({ msg: "User with this email already exists" });
//             } else {
//                 return res.status(201).json({ msg: "User with this CNIC already exists" });
//             }
//         }

//         else{
//             const hashedPassword = bcrypt.hashSync(personalDetails.password, 10);
//             // console.log(hashedPassword);

//             personalDetails.password = hashedPassword;
//             // console.log( personalDetails.password);

//             const newStaff = new staff({
//                 // companyId,
//                 personalDetails,
//                 addresses,
//                 medicalHistory,
//                 employeeEmergencyContact,
//                 joiningDetails,
//                 bankDetails,
//                 employeeEducation,
//                 employeeEmployement,
//                 salaryDetails,

               
//                 // hrID,
//             });
//             await newStaff.save();
//             return res.status(200).json({
//                 status: true,
//                 msg: 'Staff registered successfully',
//                 data: newStaff,
//             });
        
//         }

//     } catch (error) {
//         console.log(error);
//         res.status(500).json("Internal Server Error");
//     }
// }