const salary = require("../../Modals/StaffManagement/salary.modal");

const enterSalaries = async (req, res) => {
    // const { empId, totalHours, bonus, deduction, overtimeHours, status, remarks } = req.body;
    const data = req.body;
    
    // console.log(data);

   try {
    const salaries = await salary.insertMany(data);
    if(salaries){
        res.status(200).json({status: true, salary:salaries})
    }else{
        res.status(400).json({status: false, msg: "Salaries not added"})
    }
   } catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal Server Error"});
   }
    
};

const getSalaries = async(req, res) =>{

    try {
        const salaries = await salary.find().populate("empId").populate({
            path: "empId",
            populate: {
                path: "personalDetails.department"
            }
        });
        if(salaries){
            if(salaries.length>0){
        res.status(200).json({record: salaries});
            }else{
                res.status(200).json({msg:"No record exist"})
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const getSingleSalary = async(req, res) =>{
    const {id} = req.params;
            console.log(id)
    try {
        const Salary = await salary.findOne({_id: id}).populate("empId").populate({
            path: "empId",
            populate: {
                path: "personalDetails.department"
            }
        });
        if(Salary){
            res.status(200).json({status: true, Salary})
        }else{
            res.status(404).json({status: false, msg:"No Salary Paid to this employee"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const getSingleEmployeeSalary = async(req, res) =>{
    const {id} = req.params;
            // console.log(id)
    try {
        const Salary = await salary.find({empId: id})
        if(Salary){
            res.status(200).json({status: true, Salary})
        }else{
            res.status(404).json({status: false, msg:"No Salary Paid to this employee"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {enterSalaries, getSalaries, getSingleSalary, getSingleEmployeeSalary}