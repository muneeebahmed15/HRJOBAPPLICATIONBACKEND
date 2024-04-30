const attendance = require("../Modals/attendance.modal");

const markAttendance = async(req, res) =>{
    const data = req.body;
    // console.log(req.body);

    try {
        const mark = await attendance.insertMany(data);
        res.status(200).json({status: true, msg: "Attendance Mark", data: mark})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const getAllAttendance = async(req,res) =>{
        const {date} = req.body
        // console.log(date);
    try {
        const getAttendance = await attendance.find({date: date}).populate("empId").populate({
            path:"empId",populate:{ path:"personalDetails.department"}
        });
        if(getAttendance.length > 0){
        res.status(200).json({status: true, data: getAttendance})
    }else{
        res.status(200).json({status: false, msg: "No Attendance found for this date"})
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

const updateAttendance = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const update = await attendance.findOneAndUpdate({ empId: id }, { $set: data }, { new: true });
        if (update) {
            res.status(200).json({status:true, data:update});
        } else {
            res.status(400).json({status:false, msg: "Leave not found", Leave });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {markAttendance, getAllAttendance, updateAttendance}