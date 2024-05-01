const leave = require("../../Modals/StaffManagement/leave.modal")

const leaveRequest = async (req, res) =>{
    // console.log(req.body)
    try {
        const data = req.body;
        console.log(data);
        const request = await leave.create(data);
        if(request){
            res.status(200).json({status: true, msg: "Application Sent", request})
        }else{
            res.status(400).json({status: false, error: "Failed to sent"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const leaveResponse = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    // console.log(id);
    // console.log(data);

    try {
        const Leave = await leave.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
        if (Leave) {
            res.status(200).json({status:true, data:Leave});
        } else {
            res.status(400).json({status:false, msg: "Leave not found", Leave });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getSingleLeave = async (req, res) =>{
    const {id} = req.params;
    try {
        const singleLeave = await leave.findById(id).populate("empId");
        if(singleLeave){
            res.status(200).json({status:true, data: singleLeave})
        }else{
            res.status(404).json({status:false, msg: "Leave not found"});
        }
    } catch (error) {
        console.log(error);
        res.stauts(500).json({error: "Internal Server Error"})
    }
}

const getLeaves = async(req,res) =>{
    try {
        const Leaves = await leave.find().populate("empId").populate({path: "empId", populate:{ path: "personalDetails.department"}});
        res.status(200).json({status: true, data:Leaves});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}



module.exports = {leaveRequest, leaveResponse, getSingleLeave, getLeaves}